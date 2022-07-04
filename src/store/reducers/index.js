import { v4 as uuidv4 } from "uuid";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  taskList: [
    {
      id: uuidv4(),
      pbudget: 100,
      pdate: new Date(),
      pname: "Sample Project",
    },
  ],
  editDialogOpen: false,
  deleteDialogOpen: false,
  editCardDetails: null,
  snackbar: {
    open: false,
    message: "",
  },
};

const Index = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const newItem = { ...state.editCardDetails, id: uuidv4() };
      let newTasks = [{ ...newItem }, ...state.taskList];
      return {
        ...state,
        editDialogOpen: false,
        editCardDetails: null,
        taskList: newTasks,
        snackbar: {
          open: true,
          message: "Project added!",
        },
      };

    case actionTypes.EDIT_TASK_DIALOG:
      return {
        ...state,
        editDialogOpen: action.editDialogOpen,
        editCardDetails: action.editCardDetails,
      };

    case actionTypes.EDIT_TASK:
      let cEditDetails = { ...state.editCardDetails };
      let cTaskList = [...state.taskList];
      cTaskList = cTaskList.map((cTask) => {
        if (cTask.id === cEditDetails.id) {
          cTask = { ...cEditDetails };
        }
        return cTask;
      });
      return {
        ...state,
        taskList: cTaskList,
        snackbar: {
          open: true,
          message: "Project updated!",
        },
        editDialogOpen: false,
        editCardDetails: null,
      };

    case actionTypes.DELETE_TASK_DIALOG:
      return {
        ...state,
        cardDetail: action.cardDetail,
        deleteDialogOpen: action.deleteDialogOpen,
      };

    case actionTypes.DELETE_TASK:
      const updatedState = { ...state, deleteDialogOpen: false };

      if (state?.cardDetail) {
        let cList = [...state.taskList];
        cList = cList.filter((list) => list.id !== state.cardDetail.id);
        updatedState.taskList = cList;
        updatedState.cardDetail = null;
        updatedState.snackbar = {
          open: true,
          message: "Project deleted!",
        };
      }
      return updatedState;

    case actionTypes.SNACK_BAR:
      return {
        ...state,
        snackbar: { open: action.open, message: action.message },
      };

    default:
      return state;
  }
};

export default Index;
