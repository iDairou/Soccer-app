import React, { useEffect, useState } from "react";
import API from "../../API/apiProvider";
import {
  temporaryStylesForNames,
  temporaryStylesForTable,
  temporaryStylesForResult,
} from "../../styles/tempStyles";

const Table = () => {
  const init = {
    events: [],
  };
  const [data, setData] = useState(init);
  const apiProvider = new API();

  const getData = () => {
    apiProvider.loadData().then((resp) => {
      setData({
        events: resp.schedules,
      });
    });
  };

  // Below function i made in case in Api "home" and "away" qualifier of competitors would be set in random order.
  // Right now 'home' is always first and 'away' second so it's not neccesary to have it but imho always better to be sure :)

  const findQualifier = (competitors, qualifier) => {
    return competitors.find(
      (comptetitor) => comptetitor.qualifier === qualifier
    ).name;
  };

  const renderData = (data) => {
    return data.events.map((item) => (
      <tr key={item.sport_event.id}>
        <td style={temporaryStylesForNames}>
          <span style={{ display: "block" }}>
            {findQualifier(item.sport_event.competitors, "home")}
          </span>

          <span style={{ display: "block" }}>
            {findQualifier(item.sport_event.competitors, "away")}
          </span>
        </td>
        {item.sport_event_status.match_status !== "postponed" ? (
          <td style={temporaryStylesForResult}>
            <span style={{ display: "block" }}>
              {item.sport_event_status.home_score}
            </span>

            <span style={{ display: "block" }}>
              {item.sport_event_status.away_score}
            </span>
          </td>
        ) : (
          <td style={temporaryStylesForResult}>Posponed</td>
        )}
      </tr>
    ));
  };

  const renderError = () => {
    return (
      <tr>
        <td>Data not found</td>
      </tr>
    );
  };

  useEffect(() => {
    getData();
  });

  return (
    <table style={temporaryStylesForTable}>
      <thead>
        <tr>
          <th>Team Names</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>{data.events.length > 0 ? renderData(data) : renderError()}</tbody>
    </table>
  );
};
export default Table;
