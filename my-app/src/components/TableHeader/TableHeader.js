import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
import { headColumns } from "../../constants/constants";
const TableHeader = () => {
  const renderHeadColumns = () => {
    return headColumns.map((colName) => (
      <TableCell key={colName}>{colName}</TableCell>
    ));
  };
  
  return (
    <TableHead>
      <TableRow>{renderHeadColumns()}</TableRow>
    </TableHead>
  );
};
export default TableHeader;
