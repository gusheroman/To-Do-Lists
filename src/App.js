import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CreateIcon from "@material-ui/icons/Create";
const useStyles = makeStyles({
  container: {
    backgroundColor: "black",
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
    backgroundColor: "blue",
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
  icon: {
    position: "absolute",
    top: "50%",
    transform: " translateY(-50%)",
    right: "15px",
    width: "auto",
    display: "inline-block",
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
        <Paper className={classes.cardContainer}>
          <p>{toDo && toDo.length ? "" : "No Tasks..."}</p>
          {toDo.map((task, index) => (
            <React.Fragment key={task.id}>
              <Paper className={classes.taskBackGround}>
                <div className={task.status ? classes.doneTask : ""}>
                  <span className={classes.taskTitle}>{task.title}</span>
                </div>
                <div className={classes.icon}>
                  <span>
                    <DeleteIcon />
                  </span>
                  <span>
                    <CreateIcon />
                  </span>
                  <span>
                    <CheckCircleIcon />
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
