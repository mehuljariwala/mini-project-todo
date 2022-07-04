import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COPY_TASK,
  EDIT_TASK_DIALOG,
  DELETE_TASK_DIALOG,
  SNACK_BAR,
} from "./actionTypes";

export const addTask = () => {
  return { type: ADD_TASK };
};

export const copyTask = (item) => {
  return { type: COPY_TASK, item: item };
};

export const editTask = () => {
  return { type: EDIT_TASK };
};

export const deleteTask = () => {
  return { type: DELETE_TASK };
};

export const openEditDialog = ({ editDialogOpen, editCardDetails }) => {
  return {
    type: EDIT_TASK_DIALOG,
    editDialogOpen,
    editCardDetails,
  };
};

export const openDeleteDialog = ({ deleteDialogOpen, cardDetail }) => {
  return {
    type: DELETE_TASK_DIALOG,
    deleteDialogOpen,
    cardDetail,
  };
};

export const handleSnackbar = ({ open, message }) => {
  return {
    type: SNACK_BAR,
    open,
    message,
  };
};
