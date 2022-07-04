import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, openEditDialog } from "../../store/actions";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import DateTSelecter from "../date-picker";

const useStyles = () => {
  return {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minWidth: 400,
      bgcolor: "background.paper",
      boxShadow: 24,
    },
    label: {
      color: "black",
      fontWeight: "bold",
      mb: 1,
    },
  };
};

const EditDialog = () => {
  const {
    editDialogOpen,
    editCardDetails: ecd,
    taskList,
  } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const styles = useStyles();

  console.log("taskList", taskList);

  const onHandleClose = () => {
    dispatch(openEditDialog({ editDialogOpen: false, editCardDetails: null }));
  };

  const onHandleChange = ({ target: { name, value } }) => {
    dispatch(
      openEditDialog({
        editDialogOpen: true,
        editCardDetails: { ...ecd, [name]: value },
      })
    );
  };

  const onHandleSave = () => {
    if (ecd?.action === "ADD") {
      dispatch(addTask());
    } else {
      dispatch(editTask());
    }
  };

  return (
    <Modal open={editDialogOpen} onClose={onHandleClose}>
      <Box sx={styles.container}>
        <Box textAlign="center" bgcolor={"#87cefa"} p={1}>
          <Typography variant="h6">{`${
            ecd?.action === "ADD" ? "Add" : "Edit"
          } Details`}</Typography>
        </Box>
        <Box p={3}>
          <Box mb={3}>
            <InputLabel sx={styles.label}>Project Name:</InputLabel>
            <TextField
              fullWidth
              size="small"
              name="pname"
              value={ecd?.pname}
              onChange={onHandleChange}
              placeholder="Required"
            />
          </Box>
          <Box mb={3}>
            <InputLabel sx={styles.label}>Project Budget:</InputLabel>
            <TextField
              fullWidth
              type="number"
              size="small"
              name="pbudget"
              value={ecd?.pbudget}
              onChange={onHandleChange}
            />
          </Box>
          <Box mb={3}>
            <InputLabel sx={styles.label}>Project End Date:</InputLabel>
            <DateTSelecter
              onChange={(val) =>
                onHandleChange({ target: { name: "pdate", value: val } })
              }
              initialDate={ecd?.pdate}
            />
          </Box>

          <Grid container justifyContent={"center"} spacing={2}>
            <Grid item md={6}>
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                onClick={onHandleClose}
              >
                Close
              </Button>
            </Grid>
            <Grid item md={6}>
              <Button
                variant="contained"
                fullWidth
                color="success"
                onClick={onHandleSave}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditDialog;
