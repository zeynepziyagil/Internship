import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Ayi from '../img/ayi.png'
import apart from '../utils/apart';
import Pagination from '@material-ui/lab/Pagination';
import { ADD_BASKET, PAGE_NAV } from '../act';


const useStyles = makeStyles((theme) => ({
    unda: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minWidth: 125
    },
    add: {
        marginTop: "5px",
        padding: "3px",
        textAlign: 'center',
        backgroundColor: "#1EA4CE",
        color: "#FFFF",
        width: "100%",
        fontWeight: "300",
        '&:hover': {
            marginTop: "5px",
        padding: "3px",
        textAlign: 'center',
        backgroundColor: "#1EA4CE",
        color: "#FFFF",
        width: "100%",
        fontWeight: "300",
        },

        
    },
    
   
    xsr: {

        margin: "auto"
    },
    imgs: {
        maxWidth: "70%",
        height: "auto"
    },
    pa: {
        fontFamily: "Helvetica",
        fontSize: "14px",
        lineHeight: "20px",
        color: "#1EA4CE"
    },
    na: {
        fontFamily: "Open Sans",
        fontSize: "14px",
        lineHeight: "20px",
        color: "#191919"
    },
    xsa: {
        padding: "10px",
        display: "flex",

        alignItems: "center"
    },
    out:{
        backgroundColor: "white",
    },
   
}));

const Productsx = ({ displayArray, sortingType, filters, displayedPage, dispatch }) => {
    const cls = useStyles();
    const handleApart = (event, value) => {

        dispatch({ type: PAGE_NAV , payload: { value } });
    }
    const aparr = apart(displayArray);
    const pages = aparr.length ? (aparr[displayedPage - 1]) : ([]);
    return (<>{pages.length ? (
                pages.map((item) => {
                    return (
                        <Grid className={cls.out} item xs={6} sm={4} md={3} key={item.id}>
                            <Paper elevation={0} className={cls.unda}>
                                <img src={Ayi} alt="ayi" className={cls.imgs} /><br/>
                                <span className={cls.pa}>₺ {item.price}</span><br/>
                                <span className={cls.na}>{item.name}</span><br/>
                                <Button  variant="contained" color="primary" className={cls.add} onClick={() => dispatch({ type: ADD_BASKET, payload: { item } })}>  Add
                                </Button>
                            </Paper>
                        </Grid>  )   }) ) : (<p>No Matching Items</p>)} <Grid item xs={12} className={cls.xsa}>
                <Pagination count={aparr.length ? (aparr.length) : (1)}  shape="rounded" page={displayedPage} onChange={handleApart} className={cls.xsr} />
            </Grid>  </>
    )

}

const mapStateToProps = (state) => {
    return { displayArray: state.displayArray, sortingType: state.sortingType, filters: state.filters, displayedPage: state.displayedPage }
}

export default connect(mapStateToProps)(Productsx);