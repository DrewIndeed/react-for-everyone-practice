import React from "react";

const Header = ({ bigTitle, subTitle, learner, date }) => (
  <header className="wrapper header">
    {bigTitle}
    {subTitle}
    {learner}
    {date}
  </header>
);

export default Header;
