import React, { MouseEventHandler } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "../styles/components/search-bar.module.scss";

type Props = {
  className?: String;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const SearchBar = (props: Props) => {
  return (
    <InputGroup className={`${styles["search-bar"]} ${props.className}`}>
      <Form.Control
        type="search"
        placeholder="Product name or SKU"
        aria-label="Search"
      />
      <Button onClick={props.onClick}>Search</Button>
    </InputGroup>
  );
};

export default SearchBar;
