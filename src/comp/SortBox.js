import React from 'react';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Box from '@material-ui/core/Box';
import { HANDLE_SORT } from '../act';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mybox: {
        backgroundColor: "#FFFF",
        borderRadius: "3px",
        padding: "25px",
        height: "200px",    
        flexFlow: "row wrap",
        display: "flex",
        flexDirection: "column",
    },
}));


const SortBox = ({ sortingType, dispatch }) => {
    const cls = useStyles();
    const handleChange = (event) => {
        const eventValue = event.target.value;
        dispatch({ type: HANDLE_SORT, payload: { eventValue } });
    };
  
    return (
        <Box className={cls.mybox}>
            <FormControl>
                <RadioGroup aria-label="gender" value={sortingType} onChange={handleChange} >
                    <FormControlLabel value="lowToHigh" control={<Radio   />} label="Price Low to High" />
                    <FormControlLabel value="highToLow" control={<Radio   />} label="Price High to Low" />
                    <FormControlLabel value="newToOld" control={<Radio   />} label="New to Old" />
                    <FormControlLabel value="oldToNew" control={<Radio  />} label="Old to New" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return { sortingType: state.sortingType }
}

export default connect(mapStateToProps)(SortBox);