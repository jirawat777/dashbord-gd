import React, { useState, useEffect } from "react";
import Header from "../../components/bases/header";
import { TextFieldWrapper } from "../../components/atomes/Components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectWrapper } from "../../components/atomes/Components";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components/atomes/Components";
function ManagePage() {
  const [Category, setCategory] = useState("");
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    dispatch.category.fetchCategory("category");
  }, [dispatch]);

  return (
    <div className="p-5 w-screen">
      <Header title="Manage" />
      <div className="mt-10">
        <div className="border-zinc-400 border-[1px] rounded-md shadow-lg p-5 w-full">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextFieldWrapper fullWidth label="Name" />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <SelectWrapper
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Category}
                  label="Category"
                  onChange={handleChange}
                >
                  {category.map((c, i) => (
                    <MenuItem value={i}>{c.name}</MenuItem>
                  ))}
                </SelectWrapper>
              </FormControl>
            </Grid>
            <Divider />
            <Grid item xs={0} sm={8} md={8} lg={10}></Grid>
            <Grid item xs={12} sm={2} md={2} lg={1}>
              <Button fullWidth variant="contained" color="info">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={1}>
              <Button fullWidth variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ManagePage;
