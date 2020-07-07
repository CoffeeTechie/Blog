import React, { Component } from "react";
import styled from "styled-components";

import logo from "../components/VioletBubbleFractal.svg";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

class Logo extends Component {
  render() {
    return (
      <Wrapper href="https://melbaril.com">
        <img src={logo} width="450" height="450" alt="melbaril.com" />
      </Wrapper>
    );
  }
}

export default Logo;
