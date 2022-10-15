import React, { useState, useEffect } from 'react'
import Header from '../../components/bases/header'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';

function ManagePage() {
  const [Category, setCategory] = useState('')
  const category = useSelector((state) => state.category.category)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    setCategory(event.target.value);
  }
  useEffect(() => {
    dispatch.category.fetchCategory('category')
  }, [dispatch])


  return (
    <div className='p-5 w-screen'>
      <Header title='Manage' />
      <div className='mt-10'>
        <div className='border-zinc-400 border-[1px] rounded-md shadow-lg p-5 w-full'>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField fullWidth label="Name" />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Category}
                  label="Category"
                  onChange={handleChange}
                >
                  {category.map((c,i) => <MenuItem value={i} >{c.name}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Divider />
            <Grid item xs={6} sm={8} md={8} lg={10}>
            </Grid>
            <Grid item xs={3} sm={2} md={2} lg={1}>
              <Button fullWidth variant="contained" color='info'>Cancel</Button>
            </Grid>
            <Grid item xs={3} sm={2} md={2} lg={1}>
              <Button fullWidth variant="contained">Save</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default ManagePage