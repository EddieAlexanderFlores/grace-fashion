import React, { MouseEventHandler, ReactNode } from "react";
import { Button } from "react-bootstrap";
import styles from "../styles/components/icon-button.module.scss";

type Props = {
  children?: ReactNode;
  className?: String;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = (props: Props) => {
  return (
    <Button
      className={`${styles["icon-button"]} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default IconButton;
