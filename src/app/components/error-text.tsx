import styles from "@/styles/components/error-text.module.css";
import { getValidStringElseDefault } from "@/utils/string-utils";

interface Props {
  text: string;
  className?: string;
}

export default function ErrorText({ text, className }: Props) {
  return (
    <p className={`${styles.errorText}${getValidStringElseDefault(className)}`}>
      {text}
    </p>
  );
}
