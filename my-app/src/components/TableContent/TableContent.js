import React, { useEffect, useState } from "react";
import API from "../../API/apiProvider";
import TablePagination from "@mui/material/TablePagination";

import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import TableHeader from "../TableHeader/TableHeader";
import Dropdown from "../Dropdown/Dropdown";

// Ready to refactor - necessarily (!)
const TableMUI = () => {
  const init = {
    events: [],
  };
  //api season data state
  const [data, setData] = useState(init);
  const apiProvider = new API();

  // dropdown state - season chosen in select
  const [currentSeason, setCurrentSeason] = useState("sr:season:77453");
  // gettin seasons name and id from Api
  const [seasons, setSeasons] = useState(null);

  // pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    getSeasonsFromApi();
  }, []);

  useEffect(() => {
    getSeasonDataFromApi();
  }, [currentSeason]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(page);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getSeasonDataFromApi = () => {
    apiProvider.loadData(currentSeason).then((resp) => {
      setData({
        events: resp.schedules,
      });
    });
    console.log("API call");
  };
  const getSeasonsFromApi = () => {
    apiProvider.loadSeasons().then((resp) => {
      setSeasons(resp.seasons);
    });
  };
  const changeSeason = (event) => {
    setCurrentSeason(event.target.value);
    setPage(0);
    console.log(event.target.value);
  };
  // Below function i made in case in Api "home" and "away" qualifier of competitors would be set in random order.
  // Currently 'home' is always first and 'away' second so let's say it's not neccesary to have it but imho always better to be sure.

  const findQualifier = (competitors, qualifier) => {
    return competitors.find(
      (comptetitor) => comptetitor.qualifier === qualifier
    ).name;
  };

  const checkIfPostponed = (status) => {
    return status === "postponed";
  };
  const checkIfCanceled = (status) => {
    return status === "cancelled";
  };
  const checkIfStarted = (status) => {
    return status === "not_started";
  };

  const getStadiumName = (data) => {
    return <TableCell>{data.sport_event.venue.name}</TableCell>;
  };
  const getMatchDate = (data) => {
    const dateFormat = new Date(data.sport_event.start_time).toLocaleString();

    return data.sport_event.start_time_confirmed ? (
      <TableCell>{dateFormat}</TableCell>
    ) : (
      <TableCell>Match time not confirmed</TableCell>
    );
  };
  const getHalfTimeScore = (data) => {
    if (checkIfPostponed(data.sport_event_status.status)) {
      return <TableCell>Postponed</TableCell>;
    } else if (checkIfCanceled(data.sport_event_status.status)) {
      return <TableCell>Cancelled</TableCell>;
    } else if (checkIfStarted(data.sport_event_status.status)) {
      return <TableCell>Not started</TableCell>;
    }
    return (
      <TableCell>
        <span>{data.sport_event_status.period_scores[0].home_score}</span>-
        <span>{data.sport_event_status.period_scores[0].away_score}</span>
      </TableCell>
    );
  };

  const checkWinLoseDraw = (data, team) => {
    return data.sport_event.competitors[team].id ===
      data.sport_event_status.winner_id
      ? { background: "green" }
      : { background: "red" } && data.sport_event_status.match_tie
      ? { background: "orange" }
      : { background: "red" };
  };
  const getTeam1 = (data) => {
    return (
      <TableCell sx={checkWinLoseDraw(data, 0)}>
        {findQualifier(data.sport_event.competitors, "home")}
      </TableCell>
    );
  };
  const getTeam2 = (data) => {
    return (
      <TableCell sx={checkWinLoseDraw(data, 1)}>
        {findQualifier(data.sport_event.competitors, "away")}
      </TableCell>
    );
  };
  const getResult = (data) => {
    return !checkIfPostponed(data.sport_event_status.match_status) ? (
      <TableCell key={data.sport_event.competitors[0].name}>
        <span>{data.sport_event_status.home_score}</span>-
        <span>{data.sport_event_status.away_score}</span>
      </TableCell>
    ) : (
      <TableCell>Postponed</TableCell>
    );
  };

  const renderBodyData = (data) => {
    return data.events
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((item) => (
        <TableRow key={item.sport_event.id}>
          {getTeam1(item)}
          {getTeam2(item)}
          {getResult(item)}
          {getMatchDate(item)}
          {getHalfTimeScore(item)}
          {getStadiumName(item)}
        </TableRow>
      ));
  };

  const renderError = () => {
    return (
      <TableRow>
        <TableCell>Data not found</TableCell>
      </TableRow>
    );
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, data.events.length - page * rowsPerPage);
  const renderEmptyRows = () => {
    return (
      emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )
    );
  };

  return (
    <TableContainer
      style={{
        margin: "30px auto",
        background: "transparent",
      }}
      component={Paper}
    >
      <Table aria-label="table">
        <TableHeader />
        <TableBody>
          {data ? renderBodyData(data) : renderError()}
          {renderEmptyRows()}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={data.events.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dropdown
        changeSeason={changeSeason}
        value={currentSeason}
        seasons={seasons}
      />
    </TableContainer>
  );
};
export default TableMUI;
