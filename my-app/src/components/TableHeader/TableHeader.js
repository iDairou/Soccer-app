import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = () => {
  const headColumns = [
    "Team 1 (home)",
    "Team 2 (away)",
    "Result",
    "Match date",
    "Half time score",
    "Stadium name",
  ];

  const renderHeadColumns = () => {
    return (
      <TableRow>
        {headColumns.map((colName) => (
          <TableCell key={colName}>{colName}</TableCell>
        ))}
      </TableRow>
    );
  };

  return <TableHead>{renderHeadColumns()}</TableHead>;
};
export default TableHeader;
