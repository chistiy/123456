import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <ul id="nav">
        <li>
          <Link to="/">главная</Link>
        </li>
        <li>
          <Link to="/sign-in">регистрация </Link>
        </li>
        <li>
          <Link to="/profile">профильы</Link>
        </li>
      </ul>
    );
  }
}
