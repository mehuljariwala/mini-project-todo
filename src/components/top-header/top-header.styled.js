import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Root = styled.div`
  min-height: 55px;
  background: cornflowerblue;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  position: relative;

  h1 {
    font-weight: bold;
    font-size: 1.2rem;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

export const AddBtnContainer = styled(Box)`
  position: absolute;
  right: 10px;
`;
