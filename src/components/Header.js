/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: transparent;
  }

  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 700;
    font-size: 1.2rem;
    :hover {
      color: ${props => props.theme.darkAccent};
      background: transparent;
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  button {
    margin-top: 0.5rem;
    background-color: ${props => props.theme.mainBrandColor};
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            // eslint-disable-next-line prettier/prettier
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/logo-1024.png" alt="site logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                // eslint-disable-next-line prettier/prettier
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/about" className="navbar-item">
                  Cars
                </Link>
                <Link to="/news" className="navbar-item">
                  Blog
                </Link>
                <Link to="/contact" className="navbar-item">
                  Pages
                </Link>
                <Link to="/contact" className="navbar-item">
                  About
                </Link>
                <Link to="/contact" className="navbar-item" />

                <button className="button is-normal is-size-5">Add Car</button>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
