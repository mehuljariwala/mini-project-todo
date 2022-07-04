import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";
import TopHeader from "../components/top-header";
import Card from "../components/card";
import {
  addTask,
  handleSnackbar,
  openDeleteDialog,
  openEditDialog,
} from "../store/actions";
import EditDialog from "../components/dialog/edit";
import DeleteDialog from "../components/dialog/delete";
import MSnackbar from "../components/snack-bar";

const ProjectList = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.tasks);

  const onHandleEdit = (cardDetail) => {
    dispatch(
      openEditDialog({ editDialogOpen: true, editCardDetails: cardDetail })
    );
  };

  const onHandleDelete = (cardDetail) => {
    dispatch(openDeleteDialog({ deleteDialogOpen: true, cardDetail }));
  };

  const onHandleCopy = (cardDetail) => {
    dispatch(openEditDialog({ editCardDetails: cardDetail }));
    dispatch(addTask());
    dispatch(handleSnackbar({ open: true, message: "Project copy success!" }));
  };

  return (
    <Container maxWidth="lg">
      <TopHeader />
      {taskList?.length ? (
        <Box
          maxHeight={"calc(100vh - 90px)"}
          overflow={"auto"}
          padding={"12px"}
        >
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
            marginTop={"12px"}
            rowGap={4}
            columnGap={4}
          >
            {taskList.map((task) => (
              <Grid item md={5} xs={12} key={task.id}>
                <Card
                  task={task}
                  onEditClick={onHandleEdit}
                  onDeleteClick={onHandleDelete}
                  onCopyClick={onHandleCopy}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Box
          textAlign={"center"}
          minHeight={100}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={"column"}
          gap={1}
        >
          <Typography variant="h6">No Product found!</Typography>
          <Typography variant="h6">
            Please click on add project button.
          </Typography>
        </Box>
      )}
      <EditDialog />
      <DeleteDialog />
      <MSnackbar />
    </Container>
  );
};

export default ProjectList;
