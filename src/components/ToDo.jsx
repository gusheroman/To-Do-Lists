import React from "react";
import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CreateIcon from "@material-ui/icons/Create";
import Paper from "@material-ui/core/Paper";

const ToDo = ({ toDo, markFinishTask, setUpdateData, deleteTask }) => {
    const classes = useStyles();
  return (
    <>
      {toDo &&
        toDo.map((task) => (
          <React.Fragment key={task.id}>
            <Paper className={classes.taskBackGround}>
              <div className={task.status ? classes.doneTask : ""}>
                <span>{task.title}</span>
              </div>
              <div className={classes.iconContainer}>
                <span>
                  <DeleteIcon
                    className={classes.icon}
                    fontSize="small"
                    onClick={() => deleteTask(task.id)}
                  />
                </span>
                {task.status ? null : (
                  <span>
                    <CreateIcon
                      className={classes.icon}
                      fontSize="small"
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    />
                  </span>
                )}
                <span>
                  <CheckCircleIcon
                    className={classes.icon}
                    fontSize="small"
                    onClick={() => markFinishTask(task.id)}
                  />
                </span>
              </div>
            </Paper>
          </React.Fragment>
        ))}
    </>
  );
};
const useStyles = makeStyles({
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
  });
export default ToDo;
