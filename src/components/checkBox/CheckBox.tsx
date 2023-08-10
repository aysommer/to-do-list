import { FC } from "react";

type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement>;

const CheckBox: FC<CheckBoxProps> = ({ ...other }) => {
   return (
      <input
         type="checkbox"
         {...other}
      />
   )
}

export default CheckBox;