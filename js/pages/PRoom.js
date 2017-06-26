import React        from "react"                      ;
import { autobind } from 'core-decorators'            ;

import Header             from "../components/Header"     ;
import UsersList          from "../components/UsersList"  ;
import VideoBox           from "../components/VideoBox"  ;


@autobind
export default class PRoom extends React.Component {
  constructor(){
    super();
  };

  render(){
    return(
      <div>
        <Header></Header>
        <VideoBox></VideoBox>
        <UsersList></UsersList>
      </div>
    )
  }
}
