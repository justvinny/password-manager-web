import styles from "@/styles/components/styled-button.module.css";
import { getValidStringElseDefault } from "@/utils/string-utils";

interface Props {
  text: string;
  disabled: boolean;
  className?: string;
}

export default function StyledButton({ text, disabled, className }: Props) {
  const buttonClasName = disabled ? styles.buttonDisabled : styles.button;

  return (
    <button
      type="submit"
      className={`${buttonClasName}${getValidStringElseDefault(className)}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
