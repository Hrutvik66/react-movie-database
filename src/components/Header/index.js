import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", fontSize: "1.5rem" }}
        >
          ReactMovie Database
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="TMDB logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
