import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Box, Paper } from '@material-ui/core';
import { BASKET_TO, ADD_BASKET, REMOVE_BASKET } from '../act';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { BorderStyle } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  
    area: {
        width: "90%",
        textAlign: 'right',
    },
    
    popbox: {
        width: "330px",
        textAlign: "center",
        marginLeft: "73%",
        marginTop: "5px",
        position: "absolute",
        border: "2px solid #E0E0E0",
       
        
    },
    
    amf: {
        width: "60%",
        float: "left",
        textAlign: "center",
        paddingTop: "5px"
    },
    thea: {
        float: "right",
        width: "35%",
        paddingTop: "5px",
        marginRight: "10px",
        border:"white",
        backgroundColor: "#FFF",
        
    },
    button: {
        color: "#FFFF",
        backgroundColor: "#147594",
        height: "76.64px",
        border:"white",
        
    },
    itemCont: {
        marginBottom: "50px",
    },
    buta: {
        color: "white",
        backgroundColor: "#1EA4CE",
        pointerEvents: "none",
        border:"0"
    },
    butb:{
        color: "#1EA4CE",
        backgroundColor: "#E0E0E0",
        border:"0"
    },

    priceTag: {
        fontFamily: "Helvetica",
        color: "#1EA4CE",
        fontSize: "14px",
        lineHeight: "18px",
    },
    itemdata: {
        fontFamily: "Open Sans",
        color: "#191919",
        fontSize: "14px",
        lineHeight: "18px",
    },
   
    total: {
        width: "70px",
        textAlign: "center",
        border: "1px solid #1EA4CE",
        color: "#1EA4CE",
        fontSize: "12px",
        lineHeight: "15px",
        margin: "10px",
        float: "right",
        padding: "5px"
    },
   
}));


const BasketData = ({ basket, totalPrice,  basketboolean, dispatch }) => {
    const cls = useStyles();

    return (<>
        <div >
            <div className={cls.area}>
                <Button
                    color="primary" className={cls.button} startIcon={<ShoppingBasketIcon />}
                    onClick={() => dispatch({ type: BASKET_TO })} disableElevation>
                    {Math.abs(totalPrice.toFixed(2))} TL
                </Button>
            </div>
        </div>
        { basketboolean &&
            <Paper className={cls.popbox}>{basket.length ? (
                        basket.map((item) => {
                            return (
                                <Box key={item.id} className={cls.itemCont}>
                                    <div className={cls.amf}>
                                        <div className={cls.itemdata}>{item.name}</div>
                                        <div className={cls.priceTag}>{item.price} TL </div>
                                    </div>
                                    <ButtonGroup size="small" aria-label="small outlined button group" className={cls.thea}>
                                        <Button className={cls.butb}color="primary"  onClick={() => dispatch({ type: REMOVE_BASKET, payload: { item } })}>-</Button>
                                        <Button className={cls.buta}>{item.amount}</Button>
                                        <Button className={cls.butb}color="primary"  onClick={() => dispatch({ type: ADD_BASKET, payload: { item } })}>+</Button>
                                    </ButtonGroup>
                                </Box>)
                        }
                        )
                    ) : (
                        <h4>  Basket is empty</h4>
                      
                    )
                    }
                <div className={cls.total}> {Math.abs(totalPrice.toFixed(2))}TL</div>
            </Paper>
        }
    </>
    )
}

const mapStateToProps = (state) => {
    return { basket: state.basket, totalPrice: state.totalPrice,  basketboolean: state. basketboolean }
}

export default connect(mapStateToProps)(BasketData);