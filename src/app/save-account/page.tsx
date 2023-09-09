"use client";

import styles from "@/styles/page.module.css";
import WebIcon from "@mui/icons-material/Web";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  IconedInputFieldProps,
  IconedInputField,
} from "@/app/components/iconed-input-field";
import StyledButton from "@/components/styled-button";
import ErrorText from "@/components/error-text";

const ERROR_PASSWORDS = "Passwords do not match.";
const ERROR_EMPTY = "All fields must not be empty.";

const PLATFORM_KEY = "Platform";
const USERNAME_KEY = "Username";
const PASSWORD_KEY = "Password";
const REPEAT_PASSWORD_KEY = "Repeat Password";

const inputList: Array<IconedInputFieldProps> = [
  {
    icon: () => (
      <WebIcon
        fontSize="large"
        className={`${styles.themeColor} ${styles.mr8}`}
      />
    ),
    type: "text",
    placeholder: PLATFORM_KEY,
  },
  {
    icon: () => (
      <PersonIcon
        fontSize="large"
        className={`${styles.themeColor} ${styles.mr8}`}
      />
    ),
    type: "text",
    placeholder: USERNAME_KEY,
  },
  {
    icon: () => (
      <PasswordIcon
        fontSize="large"
        className={`${styles.themeColor} ${styles.mr8}`}
      />
    ),
    type: "password",
    placeholder: PASSWORD_KEY,
  },
  {
    icon: () => (
      <PasswordIcon
        fontSize="large"
        className={`${styles.themeColor} ${styles.mr8}`}
      />
    ),
    type: "password",
    placeholder: REPEAT_PASSWORD_KEY,
  },
];

const renderInputStateMap = (
  inputStateMap: Map<string, string>,
  setInputStateMap: Dispatch<SetStateAction<Map<string, string>>>
) =>
  inputList.map((item, index) => (
    <IconedInputField
      icon={item.icon}
      type={item.type}
      placeholder={item.placeholder}
      className={styles.mb16}
      value={inputStateMap.get(item.placeholder)}
      onChange={(event) => {
        const newInputStateMap = new Map(inputStateMap.entries());
        newInputStateMap.set(item.placeholder, event.target.value);
        setInputStateMap(newInputStateMap);
      }}
      key={`${index}-${item.placeholder}`}
    />
  ));

export default function SaveAccount() {
  const [errorText, setErrorText] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const [inputStateMap, setInputStateMap] = useState<Map<string, string>>(
    new Map<string, string>([
      [PLATFORM_KEY, ""],
      [USERNAME_KEY, ""],
      [PASSWORD_KEY, ""],
      [REPEAT_PASSWORD_KEY, ""],
    ])
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO once PWA Storage is setup
  };

  const areInputsNotEmpty = () =>
    Array.from(inputStateMap.values()).every((item) => item.length > 0);

  const doPasswordsMatch = () =>
    inputStateMap.get(PASSWORD_KEY) === inputStateMap.get(REPEAT_PASSWORD_KEY);

  useEffect(() => {
    if (!areInputsNotEmpty()) {
      setErrorText(ERROR_EMPTY);
      setIsValidInput(false);
    } else if (!doPasswordsMatch()) {
      setErrorText(ERROR_PASSWORDS);
      setIsValidInput(false);
    } else {
      setErrorText("");
      setIsValidInput(true);
    }
  }, [inputStateMap]);

  return (
    <main className={styles.main}>
      <h1 className={styles.mb16}>Save Account</h1>
      <form onSubmit={handleSubmit}>
        {renderInputStateMap(inputStateMap, setInputStateMap)}
        <StyledButton
          text="Save Account"
          disabled={!isValidInput}
          className={styles.mb16}
        />
        <ErrorText text={errorText} />
      </form>
    </main>
  );
}
