import React          from "react"              ;
import {Link        } from "react-router"       ;

export default class Room extends React.Component {
  constructor(){
    super();
  };

  render(){
    return(
      <li>
        <Link to='room'>
          {this.props.name}
        </Link>
      </li>
    );
  }
}
