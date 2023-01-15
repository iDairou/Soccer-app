import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = (props) => {
  const { seasons, changeSeason, value } = props;

  return seasons ? (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Season</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Season"
        defaultValue="sr:season:77453"
        onChange={changeSeason}
      >
        {seasons.map((season) => {
          return (
            <MenuItem value={season.id} key={season.id}>
              {season.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  ) : (
    <div>Seasons not found</div>
  );
};
export default Dropdown;
