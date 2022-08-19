import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CreateIcon from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#100720",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  taskBackGround: {
    backgroundColor: "#31087B",
    color: "white",
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0px 24px 0px 24px",
    marginBottom: "16px",
    position: "relative",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 36px 0px 36px",
    minWidth: "500px",
    minHeight: "500px",
  },
  doneTask: {
    textDecoration: "line-through",
    opacity: 0.3,
  },
  iconContainer: {
    position: "absolute",
    top: "50%",
    transform: " translateY(-50%)",
    right: "15px",
    width: "auto",
    display: "inline-block",
    cursor: "pointer",
  },
  icon: {
    cursor: "pointer",
    padding: "0px 4px",
    "&:hover": {
      color: "#FFC23C",
    },
  },
  input: {
    "& .MuiFilledInput-input": {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "16px",
      width: "400px",
    },
    marginRight: "24px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    marginBottom: "16px",
  },
});

function App() {
  const classes = useStyles();
  const [toDo, setToDO] = useState([
    { id: 1, title: "task 1", status: true },
    { id: 2, title: "task 2", status: false },
  ]);
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2>To Do List</h2>
        <div className={classes.formContainer}>
          <div className={classes.formControl}>
            <TextField
              classes={{ root: classes.input }}
              InputProps={{ disableUnderline: true }}
              variant="filled"
            />
            <Button variant="contained" color="primary">
              Update
            </Button>
          </div>
          <div className={classes.formControl}>
            <TextField
              classes={{ root: classes.input }}
              InputProps={{ disableUnderline: true }}
              variant="filled"
            />
            <Button variant="contained" color="Secondary">
              Add Task
            </Button>
          </div>
        </div>
        <Paper className={classes.cardContainer}>
          <p>{toDo && toDo.length ? "" : "No Tasks..."}</p>
          {toDo &&
            toDo.map((task) => (
              <React.Fragment key={task.id}>
                <Paper className={classes.taskBackGround}>
                  <div className={task.status ? classes.doneTask : ""}>
                    <span className={classes.taskTitle}>{task.title}</span>
                  </div>
                  <div className={classes.iconContainer}>
                    <span>
                      <DeleteIcon className={classes.icon} fontSize="small" />
                    </span>
                    <span>
                      <CreateIcon className={classes.icon} fontSize="small" />
                    </span>
                    <span>
                      <CheckCircleIcon
                        className={classes.icon}
                        fontSize="small"
                      />
                    </span>
                  </div>
                </Paper>
              </React.Fragment>
            ))}
        </Paper>
      </div>
    </div>
  );
}

export default App;
