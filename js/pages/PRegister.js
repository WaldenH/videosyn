import React        from "react";
import { connect }  from "react-redux"
import { autobind } from 'core-decorators';

import Header       from "../components/Header.js";
import UsersList    from "../components/UsersList";

import { addUser }  from "../actions/UsersActions";

@connect((store) => {
  return {
  }})
@autobind
export default class PRegister extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: '',
    }
  };

  handleChange(e) {
    this.setState({
      userName: e.target.value
    });
  }

  addaUser() {
    this.props.dispatch(addUser(this.state.userName));
  }

  render(){
    return(
      <div>
        <Header></Header>
        User Name:
        <input  value    = { this.state.userName }
                onChange = { this.handleChange    } />
        <br/>
        <button onClick  = { this.addaUser}>
          Register
        </button>
        <UsersList></UsersList>
      </div>
    );
  }
}
