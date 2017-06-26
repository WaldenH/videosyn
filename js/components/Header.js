import React          from "react"              ;

import { Link       } from "react-router"       ;

export default class Header extends React.Component {
  constructor(){
    super();
    this.pageName = 'Header';
  }

  render(){
    return(
      <div>
        <button>
          <Link to='/'>Home Page</Link>
        </button>

        <button>
          <Link to='add_video'>Add Video</Link>
        </button>

        <button>
          <Link to='add_channel'>Add Channel</Link>
        </button>
        <button>
          <Link to='add_room'>Add Room</Link>
        </button>
        <button>
          <Link to='register'>register</Link>
        </button>
      </div>
    );
  }
}
