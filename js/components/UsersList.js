import React          from "react"              ;
import { connect    } from "react-redux"        ;
import { autobind   } from 'core-decorators'    ;

@connect((store) => {
  return {
    users: store.users.users
  }})
@autobind
export default class UsersList extends React.Component {
  constructor(){
    super();
  };

  render(){
    const { users }   = this.props;
    const mappedUsers = users.map((user,i) =>
    {
      return(
        <li key={i}>
          {user.name}
        </li>
        )
      });

    return(
      <div>{ mappedUsers }</div>
    );
  }
}
