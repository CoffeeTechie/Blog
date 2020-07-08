import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//collapse?

const Collapse = styled.div.attrs({
  className: "navbar",
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
  className: "navbar",
})``;

class Links extends Component {
  render() {
    return (
      <React.Fragment className="d-flex">
        <Collapse>
          <Link to="/" className="navbar-brand mr-auto p-2">
            Mel's Blog
          </Link>
          <List>
            <Item>
              <Link to="/posts/list" className="nav-link pr-2">
                List posts
              </Link>
            </Item>

            <Item>
              <Link to="/post/create" className="nav-link p-2">
                Create post?
              </Link>
            </Item>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Links;
