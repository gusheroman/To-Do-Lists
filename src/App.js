import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    backgroundColor: "black",
    color:"white",
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center"
    
  },
});

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
    
    <h2>To Do List</h2>
    </div>
  );
}

export default App;
