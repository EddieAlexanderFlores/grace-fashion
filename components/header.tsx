import { NextPage } from "next";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  MdMenu,
  MdPerson,
  MdSearch,
  MdShoppingBag,
  MdShoppingBasket,
} from "react-icons/md";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import { Badge, Button, Modal } from "react-bootstrap";
import { MouseEventHandler, useState } from "react";
import SearchBar from "./search-bar";

type Props = {};

const Header: NextPage = (props: Props) => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  const handleCloseSearchBar = () => setShowSearchBar(false);
  const handleShowSearchBar: MouseEventHandler<HTMLButtonElement> = () =>
    setShowSearchBar(true);

  return (
    <Navbar
      as={"header"}
      expand="md"
      fixed="top"
      className={`${styles.header} shadow-sm`}
    >
      <Container fluid>
        <Container fluid className={`${styles["logo-container"]}`}>
          <Navbar.Brand href="#" className={`${styles.logo}`}>
            <Image src={Logo} alt="Grace Fashion logo" layout="responsive" />
          </Navbar.Brand>
        </Container>
        <Container fluid className={`${styles["navbar-items-container"]}`}>
          <Button
            aria-label="Search"
            className={`${styles["icon-button"]} ${styles["search-icon-button"]}`}
            onClick={handleShowSearchBar}
          >
            <MdSearch />
          </Button>
          <Nav as={"ul"} className={styles["navbar-menu"]}>
            <Nav.Item as={"li"}>
              <Link href="/account" passHref>
                <Nav.Link
                  aria-label="account"
                  className={`${styles["icon-button"]}`}
                >
                  <MdPerson />
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item as={"li"}>
              <Link href="/cart" passHref>
                <Nav.Link
                  aria-label="Shopping bag"
                  className={`${styles["icon-button"]} ${styles["shopping-bag-button"]} `}
                >
                  <MdShoppingBag className={`${styles["shopping-bag-icon"]}`} />
                  <Badge className={`${styles.badge}`}>10</Badge>
                </Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
          <Navbar.Toggle
            aria-controls="offcanvas-navbar-expand-md"
            className={`${styles["icon-button"]} ${styles["toggle-button"]}`}
          >
            <MdMenu />
          </Navbar.Toggle>
        </Container>
        <Navbar.Offcanvas
          id="offcanvas-navbar-expand-md"
          aria-labelledby="offcanvas-navbar-label-expand-md"
          placement="start"
        >
          <Offcanvas.Header closeButton className={styles["offcanvas-header"]}>
            <Offcanvas.Title id="offcanvas-navbar-label-expand-md">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles["offcanvas-body"]}>
            <SearchBar className={styles["search-bar"]} />
            <Button
              className={`${styles["text-button"]} ${styles["search-text-button"]}`}
              onClick={handleShowSearchBar}
            >
              Search
            </Button>
            <Nav
              as={"ul"}
              className={`${styles["offcanvas-nav"]} justify-content-end`}
            >
              <Nav.Item as={"li"}>
                <Link href="/collections/dresses" passHref>
                  <Nav.Link className={styles["nav-link"]}>Dresses</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Link href="/collections/sleepwear" passHref>
                  <Nav.Link className={styles["nav-link"]}>Sleepwear</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Link href="/collections/swimwear" passHref>
                  <Nav.Link className={styles["nav-link"]}>Swimwear</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Link href="/about" passHref>
                  <Nav.Link className={styles["nav-link"]}>About</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item
                as={"li"}
                className={`${styles["nav-item"]} ${styles["show"]}`}
              >
                <Link href="/login" passHref>
                  <Nav.Link className={styles["nav-link"]}>Account</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item
                as={"li"}
                className={`${styles["nav-item"]} ${styles["show"]} align-self-center`}
              >
                <Link href="/cart" passHref>
                  <Nav.Link
                    aria-label="Shopping bag"
                    className={`${styles["icon-button"]} ${styles["shopping-bag-button"]} `}
                  >
                    <MdShoppingBag
                      className={`${styles["shopping-bag-icon"]}`}
                    />
                    <Badge className={`${styles.badge}`}>10</Badge>
                  </Nav.Link>
                </Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Modal
          show={showSearchBar}
          onHide={handleCloseSearchBar}
          size="xl"
          dialogClassName={`${styles["search-bar-modal"]}`}
        >
          <SearchBar className={`${styles["search-bar"]} ${styles["show"]}`} />
        </Modal>
      </Container>
    </Navbar>
  );
};

export default Header;
