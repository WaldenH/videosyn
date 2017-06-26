import React          from "react"              ;
import { connect    } from "react-redux"        ;
import { autobind   } from 'core-decorators'    ;
import { Link       } from "react-router"       ;

import Videos         from './Videos';

@autobind
export default class Channel extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <h5>
          <Link to='channel'>{this.props.name} </Link>
          <br/>
        </h5>
        <Videos></Videos>
      </div>
    );
  }
}
