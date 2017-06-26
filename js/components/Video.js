import React from "react";
import {Link} from "react-router";

export default class Video extends React.Component {
  constructor(){
    super();
  };

  render(){
    return(
      <li>
        <Link to='video'>
          {this.props.name}
        </Link>
      </li>
    );
  }
}
