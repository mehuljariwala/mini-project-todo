import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import { handleSnackbar } from "../../store/actions";

const MSnackbar = () => {
  const { snackbar } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={snackbar?.open}
      autoHideDuration={3000}
      onClose={() => {
        dispatch(handleSnackbar({ open: false, snackbar: "" }));
      }}
      message={snackbar?.message || ""}
    />
  );
};

export default MSnackbar;
