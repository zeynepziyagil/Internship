import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import { connect } from 'react-redux';
import { FILTERED,  FILTEREN } from "../act";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
   
    
    Aox: {
        backgroundColor: "#FFFF",
        padding: "15px",
    },
    Box: {
        backgroundColor: "#FFFF",
        borderRadius: "3px",
        padding: "25px",
        height: "200px",
        overflow: "scroll"
    },
  
}));

const Companies = ({ brands, filters, editedBrands, dispatch, }) => {
    const classes = useStyles();
    const handleChange = (event) => {
        const eventValue = event.target.name;
        const eventType = event.target.checked;
        console.log(event.target.name);
        console.log(event.target.checked);
        dispatch({ type:  FILTERED, payload: { eventValue, eventType } });
    };
    const [value,setValue] = useState();
    const sortva = (value,items) =>{
        console.log(value);
        if(value =="ltoh"){
            items.sort((a, b) => (a.itemprice > b.itemprice) ? 1 : -1)
              
        }
        else if(value =="htol"){
            items.sort((a, b) => (a.itemprice < b.itemprice) ? 1 : -1)
              
        } else if(value =="ntoo"){
            items.sort((a, b) => (a.addednum > b.addednum) ? 1 : -1)
              
        } else if(value =="oton"){
            items.sort((a, b) => (a.addednum < b.addednum) ? 1 : -1)
              
        }
    }
    const handleSearch = (event) => {
        const eventValue = event.target.value.toLowerCase();
        console.log("search value", event.target.value);
        dispatch({ type:  FILTEREN, payload: { eventValue } });
    };
   
    return (
        <div className={classes.Aox}>
            <TextField  label="Search" variant="outlined" className={classes.search} onChange={handleSearch} />
            <Box className={classes.Box}>
                <FormControlLabel control={
                        <Checkbox checked={filters.length ? (false) : (true)} disabled={filters.length ? (true) : (false)}name="All"color="primary" /> } label="All"
                />
                {editedBrands.length ? (editedBrands.map((brand) => {
                 return (<div key={brand.id}> <FormControlLabel control={
                                        <Checkbox onChange={handleChange} name={brand.name}  color="primary"/>
                                    }label={brand.name}/>
                </div> )})) : (   <p>No Matching Brands</p> )}
            </Box>
        </div>

    )
}

const mapStateToProps = (state) => {
    return { brands: state.brands, filters: state.filters, brandSearchTerm: state.brandSearchTerm, editedBrands: state.editedBrands }
}

export default connect(mapStateToProps)(Companies);