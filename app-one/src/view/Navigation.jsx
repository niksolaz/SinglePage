import React,{Component} from 'react';

function SearchButton(){
  return (
    <div>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  );
}

function Menu() {
  return(
    <nav className="navbar navbar-inverse bg-primary">
      <SearchButton />
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">First</li>
          <li className="nav-item">Second</li>
          <li className="nav-item">Third</li>
          <li className="nav-item">Four</li>
        </ul>
      </div>
    </nav>
  );
}

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}
