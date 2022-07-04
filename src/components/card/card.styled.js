import { Box, Grid, styled } from "@mui/material";

export const Content = styled(Box)`
  background-color: #87cefaba;
  border-radius: 8px;
  padding: ${(props) => props.theme.spacing(1)}
    ${(props) => props.theme.spacing(2)};
`;

export const StyledDivider = styled("div")`
  height: 2px;
  width: 100%;
  background: blue;
`;

export const BottomAction = styled(Grid)`
  min-height: 40px;
`;

export const Row = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  label {
    font-size: 14px;
  }
  margin: ${(props) => props.theme.spacing(1)}
    ${(props) => props.theme.spacing(0)};
`;

export const useStyles = () => {
  return {
    root: {
      backgroundColor: "#87cefaba",
    },
    button: {
      textTransform: "capitalize",
      color: "black",
      fontWeight: 500,
      fontSize: 14,
    },
    label: { color: "black", fontWeight: "bold" },
  };
};
