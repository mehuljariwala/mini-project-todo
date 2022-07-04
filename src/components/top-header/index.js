import React from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./top-header.styled";
import { openEditDialog } from "../../store/actions";

const TopHeader = () => {
  const { taskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const getTotalBudget = React.useCallback(() => {
    const tBudget = taskList.reduce((p, c) => {
      p += +c.pbudget;
      return p;
    }, 0);

    return {
      tProjects: taskList?.length,
      tBudget: tBudget,
    };
  }, [taskList]);

  const total = getTotalBudget();

  const onHandleAdd = () => {
    dispatch(
      openEditDialog({
        editDialogOpen: true,
        editCardDetails: {
          action: "ADD",
          pname: "",
          pbudget: "",
          pdate: new Date(),
        },
      })
    );
  };

  return (
    <S.Root>
      <h1>{`Total Projects = ${total.tProjects}, Total Budget = ${total.tBudget}`}</h1>
      <S.AddBtnContainer>
        <Button color="success" variant="contained" onClick={onHandleAdd}>
          Add Project
        </Button>
      </S.AddBtnContainer>
    </S.Root>
  );
};

export default TopHeader;
