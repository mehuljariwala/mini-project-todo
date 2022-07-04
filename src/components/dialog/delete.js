import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { deleteTask, openDeleteDialog } from "../../store/actions";

const DeleteDialog = () => {
  const { deleteDialogOpen, cardDetail } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onHandleClose = () => {
    dispatch(openDeleteDialog({ deleteDialogOpen: false }));
  };

  const onHandleDelete = () => {
    dispatch(deleteTask());
  };

  return (
    <Dialog
      open={deleteDialogOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={onHandleClose}
    >
      <DialogTitle>
        Delete Project <b>{cardDetail?.pname}</b>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure? You can't undo this action afterwards.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={onHandleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={onHandleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default DeleteDialog;
