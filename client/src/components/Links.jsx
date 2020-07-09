import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//collapse?

const Collapse = styled.div.attrs({
  className: "navbar d-flex",
})``;

const List = styled.div.attrs({
  className: "navbar-nav p-2",
})``;

const Item = styled.div.attrs({
  className: "navbar",
})``;

class Links extends Component {
  render() {
    return (
      <Collapse>
        <Link to="/" className="navbar-brand mr-auto p-2">
          Howdy
        </Link>
        <List>
          <Item>
            <Link to="/posts/list" className="nav-link">
              List posts
            </Link>
          </Item>

          <Item>
            <Link to="/posts/create" className="nav-link">
              Create post
            </Link>
          </Item>

          <Item>
            <Link to="/post/update" className="nav-link">
              Update post
            </Link>
          </Item>
        </List>
      </Collapse>
    );
  }
}

export default Links;
