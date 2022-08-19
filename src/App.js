import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";
function App() {
  const getTodoList = () => {
    let list = localStorage.getItem("toDo");
    console.log(list);
    if (list) {
      return JSON.parse(localStorage.getItem("toDo"));
    } else {
      return [];
    }
  };
  const classes = useStyles();
  const [toDo, setToDo] = useState(getTodoList());
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
    if (toDo) {
      setToDo(toDo);
    }
  }, [toDo]);

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const markFinishTask = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2>To Do List</h2>
        <div className={classes.formContainer}>
          {updateData && updateData ? (
            <UpdateForm
              updateData={updateData}
              changeTask={changeTask}
              updateTask={updateTask}
              cancelUpdate={cancelUpdate}
            />
          ) : (
            <AddTaskForm
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />
          )}
        </div>
        <Paper className={classes.cardContainer}>
          <p>{toDo && toDo.length ? "" : "No Tasks to do :)"}</p>
          <ToDo
            toDo={toDo}
            markFinishTask={markFinishTask}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask}
          />
        </Paper>
      </div>
    </div>
  );
}

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

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 36px 0px 36px",
    minWidth: "500px",
    minHeight: "500px",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
});
export default App;
