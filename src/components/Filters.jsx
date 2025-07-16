import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState, useMemo } from "react";

export default function Filters({ setListPosts, copyListPosts, setSearchTerm }) {
  const [filterValue, setFilterValue] = useState({ sort: "", search: "" });

  const filteredPosts = useMemo(() => {
    let result = [...copyListPosts];
    if (filterValue.sort === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (filterValue.sort === "body") {
      result.sort((a, b) => a.body.localeCompare(b.body));
    }
    if (filterValue.search) {
      const searchLower = filterValue.search.toLowerCase();
      result = result.filter((post) => post.title.toLowerCase().includes(searchLower) || post.body.toLowerCase().includes(searchLower));
    }

    return result;
  }, [filterValue]);

  useEffect(() => {
    setListPosts(filteredPosts);
    setSearchTerm(filterValue.search);
  }, [filteredPosts]);

  const handleChangeSort = (event) => {
    setFilterValue((prev) => ({ ...prev, sort: event.target.value }));
  };

  const handleChangeSearch = (event) => {
    setFilterValue((prev) => ({ ...prev, search: event.target.value }));
  };

  const handleReset = () => {
    setFilterValue({ sort: "", search: "" });
    setListPosts(copyListPosts);
    setSearchTerm("");
  };

  return (
    <Box sx={{ display: "flex", gap: "50px", paddingTop: "20px" }}>
      <Box sx={{ width: "200px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={filterValue.sort} label="Sort" onChange={handleChangeSort}>
            <MenuItem value={"title"}> by title</MenuItem>
            <MenuItem value={"body"}>by body</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField placeholder="Search" value={filterValue.search} onChange={(e) => handleChangeSearch(e)} />
      <Button onClick={handleReset} variant="contained" size="large" color="secondary">
        Reset Filters
      </Button>
    </Box>
  );
}
