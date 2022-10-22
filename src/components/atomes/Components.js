import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";

export const Button = styled(MuiButton)(({ pill }) => ({
  borderRadius: 100,
}));

export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 25px;
  }
`;

export const SelectWrapper = styled(Select)`
  fieldset {
    border-radius: 25px;
  }
`;
