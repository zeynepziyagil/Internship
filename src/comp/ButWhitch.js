import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { T_SHOWN_MUGS, T_SHOWN_SHIRTS } from '../act';

const useStyles = makeStyles((theme) => ({
    
    a: {
        backgroundColor: "#FFFF",
        color: "#1EA4CE",
        textTransform: "none",
        border:"0",
    },
    b: {
        backgroundColor: "#1EA4CE",
        color: "#FFFF",
        textTransform: "none",
        border:"0",
    },
    c: {
        marginBottom: "10px",
    },
   
}));


const ButWhitch = ({ isMug, dispatch }) => {
    const classes = useStyles();
    return (
        <ButtonGroup color="primary" className={classes.c}>
            <Button className={isMug ? (classes.b) : (classes.a)} onClick={() => dispatch({ type: T_SHOWN_MUGS })} >Mug</Button>
            <Button className={isMug ? (classes.a) : (classes.b)} onClick={() => dispatch({ type: T_SHOWN_SHIRTS })}>Shirt</Button>
        </ButtonGroup>
    )
}

const mapStateToProps = (state) => {
    return { isMug: state.isMug }
}

export default connect(mapStateToProps)(ButWhitch);