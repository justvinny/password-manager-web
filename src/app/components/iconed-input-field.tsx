import componentStyles from "@/styles/components/iconed-input-field.module.css";
import { SvgIcon } from "@mui/material";
import { getValidStringElseDefault } from "@/utils/string-utils";
import { ChangeEvent } from "react";

export interface IconedInputFieldProps {
  icon: () => React.ReactElement<typeof SvgIcon>;
  type: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function IconedInputField({
  icon,
  type,
  placeholder,
  className,
  value,
  onChange,
}: IconedInputFieldProps) {
  return (
    <div
      className={`${
        componentStyles.textBoxContainer
      }${getValidStringElseDefault(className)}`}
    >
      {icon()}
      <input
        type={type}
        className={componentStyles.textBox}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
