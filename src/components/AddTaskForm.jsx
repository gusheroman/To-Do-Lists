import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.formControl}>
        <TextField
          classes={{ root: classes.input }}
          InputProps={{ disableUnderline: true }}
          variant="filled"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={addTask}>
          Add Task
        </Button>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  input: {
    "& .MuiFilledInput-input": {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "16px",
      width: "400px",
    },
    marginRight: "24px",
  },
  formControl: {
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
  },
});
export default AddTaskForm;
