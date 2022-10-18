import React, { useState } from "react";
import TableComponent from "./Table";
import mockData from "../../utilities/mockData/MOCK_DATA.js";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";

function FilteredTable() {
  const columns = [
    {label:"devEui"  , key:"dev-Eui" }, 
    {label:"LastData" , key: "Last-Data"}, 
    {label:"type" , key:"type" }, 
    {label:"appId" , key:"app-ID" }, 
    {label:"appKey" , key: "app-Key"}];
 
    const [data , setData] = useState(mockData);
    const [search, setSearch] = useState("");

    const searchHandler = (event) => {
      const value = event.target.value;
      setSearch(value);
      if (!value){
        setData(mockData)
      }else{
        const rawValue = String(value).toLowerCase();
        const queryResults =  data.filter(o =>
          Object.entries(o).some(entry =>
            String(entry[1]).toLowerCase().includes(rawValue)
          )
        );
        setData(queryResults);
      };
  
    };

  return (
  
        <>
       <Box sx={{ml:"10%", mr:"20%"}} >
       <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={search}
          onChange={searchHandler}
          sx={{mt:3  , ml:6 }}
        />
      <TableComponent data={data} columns={columns}  />
       </Box>
    </>
  );
}

export default FilteredTable;
