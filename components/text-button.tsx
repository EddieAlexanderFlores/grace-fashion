import React, { MouseEventHandler } from "react";
import { Button } from "react-bootstrap";
import styles from "../styles/components/text-button.module.scss";

type Props = {
  className?: String;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: String;
};

const TextButton = (props: Props) => {
  return (
    <Button
      className={`${styles["text-button"]} ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default TextButton;
