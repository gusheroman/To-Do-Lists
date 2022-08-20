import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.formControl}>
        <TextField
          classes={{ root: classes.input }}
          InputProps={{ disableUnderline: true }}
          variant="filled"
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={updateTask}
            style={{ marginBottom: "12px" }}
          >
            Update
          </Button>
          <Button
            style={{ paddingLeft: "8px" }}
            variant="contained"
            color="secondary"
            onClick={cancelUpdate}
          >
            Cancel
          </Button>
        </div>
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
export default UpdateForm;
