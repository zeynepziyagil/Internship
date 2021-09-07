import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FIL_TAG, FILTER_TAGS_BY_NAME } from "../act";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    Aox: {
        backgroundColor: "#FFFF",
        padding: "15px",
    },
    sBox: {
        backgroundColor: "#FFFF",
        borderRadius: "3px",
        padding: "25px",
        height: "200px",
        overflow: "scroll"
    },
}));

const Tagsx = ({ tags, filters, editedTags, selectedTags, dispatch }) => {
    const classes = useStyles();
    const handleChange = (event) => {
        const eventValue = event.target.name;
        const eventType = event.target.checked;
        console.log(event.target.name);
        console.log(event.target.checked);
        dispatch({ type: FIL_TAG, payload: { eventValue, eventType } });
    };
    const handleSearch = (event) => {
        const eventValue = event.target.value.toLowerCase();
        console.log("search value", event.target.value);
        dispatch({ type: FILTER_TAGS_BY_NAME, payload: { eventValue } });
    };
    return (
        <div className={classes.Aox}>
            <TextField id="tagSearchBar" label="Search Tag" variant="outlined"  onChange={handleSearch} />
            <Box className={classes.sBox}>
                <FormControlLabel
                    control={
                        <Checkbox  checked={selectedTags.length ? (false) : (true)}  disabled={selectedTags.length ? (true) : (false)} name="All"  color="primary"
                        />   }
                    label="All" /> {editedTags.length ? (
                    editedTags.map((tag, index) => {
                        return ( <div key={index}>
                                <FormControlLabel  control={
                                        <Checkbox onChange={handleChange}  name={tag} color="primary"
                                        />}label={tag}
                                /> </div>)})) : (<p>No Tags</p>)}  </Box>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { tags: state.tags, selectedTags: state.selectedTags, tagSearchTerm: state.tagSearchTerm, editedTags: state.editedTags }
}

export default connect(mapStateToProps)(Tagsx);