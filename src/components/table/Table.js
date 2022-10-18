import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { v4 } from "uuid";
import { Box } from "@mui/material";
import Chart from "../Chart";

const TableComponent = ({ data, columns }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          alignContent: "center",
          display: "inline-flex",
          mt: "10px",
          ml:6
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ minWidth: "400px", maxWidth: "700px", mr: 10, p: 4 }}
        >
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {columns.map((item) => (
                  <TableHeadItem item={item} key={v4()} />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((content) => (
                <TableRow key={content["id"]}>
                  {columns.map((item) => (
                    <TableCell key={item.key}>{content[item.key]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={8}>
          <Chart data={data}/>
        </Box>
      </Box>
    </div>
  );
};

const TableHeadItem = ({ item }) => <TableCell>{item.label}</TableCell>;

export default TableComponent;
