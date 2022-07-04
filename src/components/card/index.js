import React from "react";
import { format } from "date-fns";
import { Button, Grid, InputLabel, Paper } from "@mui/material";
import * as S from "./card.styled";

const Card = ({ onEditClick, onDeleteClick, task, onCopyClick }) => {
  const styles = S.useStyles();
  return (
    <Paper elevation={3} sx={styles.root}>
      <S.Content>
        <S.Row>
          <InputLabel sx={styles.label}>Project Name:</InputLabel>
          <span>{task?.pname}</span>
        </S.Row>

        <S.Row>
          <InputLabel sx={styles.label}>Project Budget:</InputLabel>
          <span>{task?.pbudget}</span>
        </S.Row>

        <S.Row>
          <InputLabel sx={styles.label}>Project End Date:</InputLabel>
          <span>{format(task?.pdate, " dd MMM yyyy hh:mm a")}</span>
        </S.Row>
      </S.Content>
      <S.StyledDivider />
      <S.BottomAction container alignItems={"center"}>
        <Grid item xs={4} textAlign="center">
          <Button
            size="small"
            fullWidth
            sx={styles.button}
            onClick={() => onEditClick({ ...task, action: "EDIT" })}
          >
            Edit Card
          </Button>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Button
            fullWidth
            size="small"
            onClick={() => onDeleteClick(task)}
            sx={styles.button}
          >
            Delete Card
          </Button>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Button
            fullWidth
            size="small"
            onClick={() => onCopyClick(task)}
            sx={styles.button}
          >
            Copy Card
          </Button>
        </Grid>
      </S.BottomAction>
    </Paper>
  );
};

export default Card;
