import React, { Component } from "react";
import styled from "styled-components";

import logo from "../components/AbstractBubbleFractal.svg";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

class Logo extends Component {
  render() {
    return (
      <Wrapper href="https://melbaril.com">
        <img
          src={logo}
          borderWidth="10"
          width="75"
          height="75"
          alt="melbaril.com"
        />
      </Wrapper>
    );
  }
}

export default Logo;
