import React from "react";
import styled from "styled-components";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "gatsby";

export const NavBar = styled.div`
  background-color: #323741;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  flex-wrap: wrap;
`;

export const Page = styled(Link)`
  cursor: pointer;
  padding-bottom: 0.5rem;
  color: #fff;
  font-size: 3rem;
  text-decoration: none;

  @media (min-width: 415px) {
    font-size: 1.25rem;
  }

  &:focus,
  :active {
    outline: none;
  }

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s;
    transform: background 0.5s;
    position: relative;
    z-index: 2;
  }

  @media (hover) {
    &:hover,
    &:focus {
      color: #fff;
      transition: color 0.6s;
      &:after {
        width: 100%;
      }
    }
  }
`;

const Nav = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
  render() {
    return (
      <section>
        {/* <Router> */}
        <div id="outer-container">
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            disableAutoFocus
            right
          >
            <Page onClick={() => this.closeMenu()} to="/">
              Home
            </Page>
            <Page onClick={() => this.closeMenu()} to="/about">
              About
            </Page>
            <Page onClick={() => this.closeMenu()} to="/services">
              Services
            </Page>
            <Page onClick={() => this.closeMenu()} to="/projects">
              Projects
            </Page>
            <Page onClick={() => this.closeMenu()} to="/contact">
              Contact
            </Page>
          </Menu>
        </div>
      </section>
    );
  }
};
export default Nav;
