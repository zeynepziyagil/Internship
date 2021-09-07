import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Companies from '../comp/Companies';
import Tagsx from '../comp/Tagsx';
import BasketData from '../comp/BasketData';
import Grid from '@material-ui/core/Grid';
import reducer from '../action';
import { FDATA } from '../act';
import Box from '@material-ui/core/Box';
import axios from "axios";
import Productsx from '../comp/Productsx';
import ButWhitch from '../comp/ButWhitch';
import SortBox from '../comp/SortBox';
import Header from '../comp/Header';
import { createStore } from "redux";
import { Provider } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: "#E5E5E5",
    },
    minhead:{
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "13px",
        lineHeight: "18px",
        display: "flex",
   
        align: "center",
        color: "rgb(105, 116, 136)",
    
        
        
    },
    pheader:{

        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "26px",
        display: "flex",
        webkitBoxAlign: "center",
        alignItems: "center",
        letterSpacing: "0.25px",
        color: "rgb(111, 111, 111)",
        marginBottom: "16px",
        textAlign: "left",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
    
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
    
    
    },
    ride: {
        flexGrow: 1,
        marginLeft: "100px",
        marginRight: "100px",
        marginTop: "50px",
    },
    
    addbutton:{
        display: "flex",
        webkitBoxAlign: "center",
        alignItems: "center",
        webkitBoxPack: "center",
        justifyContent: "center",
        width: "124px",
        height: "22px",
        background: "rgb(30, 164, 206)",
        border: "none",
        borderRadius: "2px",
        cursor: "pointer",
    },
    addtag:{
    
        display: "flex",
        fontStyle: "normal",
        lineHeight: "20px",
        fontFamily: "Open Sans",
        textAlign: "left",
        fontWeight: "600",
        fontSize: "12px",
        height: "auto",
        color: "rgb(255, 255, 255)",
        marginBottom: "0px",
        margin: "0",
        padding:"0",
        boxSizing: "border-box",
        alignSelf:"center",
    },
    
    radio:{
        backgroundColor: "",
        color:"#0000FF",
    },

}));

const initialStore = { 
    brandSearchTerm: "",
    tagSearchTerm: "",
    displayedPage: 1,
    basket: [],
    totalPrice: 0,
    basketIsShown: false,
    showAlert: false,
    selectedTags: [],
    editedShirts: [],
    editedMugs: [],
    shirts: [],
    tags: [],
    brands: [],
    displayArray: [],
    mugs: [],
    editedBrands: [],
    editedTags: [],
    sortingType: "lowToHigh",
    isMug: true,
    filters: [],
}

const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Thepage = () => {
    const cls = useStyles();
 
    
    const [items, setItems] = useState([]);
    const getItems = () => {
        axios.get("https://getirserver.herokuapp.com/api/products").then((res) => {
            const itemArray = res.data.map((item) => {
                return {
                    tags: item.tags,
                    price: item.price,
                    name: item.name,
                    description: item.description,
                    slug: item.slug,
                    id: item.added,
                    manufacturer: item.manufacturer,
                    itemType: item.itemType
                };
            });
            setItems(itemArray);
        });
    };

    const [companies, setCompanies] = useState([]);
    const getCompanies = () => {
        axios.get("https://getirserver.herokuapp.com/api/companies").then((res) => {
            const companyArray = res.data.map((company) => {
                return {
                    name: company.slug,
                    id: company.account
                };
            });
            setCompanies(companyArray);
        });
    };

    useEffect(() => {
        store.dispatch({ type: FDATA, payload: { items, companies } });
    }, [items, companies])

    useEffect(() => {
        getItems();
        getCompanies();
    }, [])
    const [value,setValue] = useState();
    const sortva = (value) =>{
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

    return (
        <Provider store={store}>
            <Box className={cls.main}>
                <Header/><BasketData/>
                <div className={cls.ride}><Grid container spacing={3}><Grid item xs={12} md={3}>
                            <Grid container spacing={3}>
                             <Grid item xs={12}>
                                    <h4 className={cls.minhead}>Sorting</h4><SortBox/>
                                </Grid>
                                <Grid item xs={12}><h4 className={cls.minhead}>Brands</h4> <Companies/> </Grid>
                                <Grid item xs={12}><h4 className={cls.minhead} >Tags</h4><Tagsx/>
                                </Grid></Grid>
                        </Grid><Grid item xs={12} md={9}>
                            <h3 className={cls.pheader}>Products</h3><ButWhitch/>
                            <Grid container spacing={3}> <Productsx/>
                            </Grid></Grid> </Grid></div>
            </Box>
        </Provider>
    )
}

export default Thepage;
