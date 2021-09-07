import React from "react";
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../img/Logo.png'

const useStyles = makeStyles({

    headbox:{
        position: "absolute",
        height: "76.64px",
        background: "#1EA4CE ",
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "94.83%",
        display: "",
        
    },
   imgg:{
       position: "center",
       marginTop: "18px",
       marginLeft:"43%",
   },


});    

const Header = () =>
{
const cs = useStyles()
    return (
    <div>
        <Box className ={cs.headbox} >
            <img class={cs.imgg} src={Logo} alt="market"></img> 
        </Box>
    </div>
    )
};
export default Header;