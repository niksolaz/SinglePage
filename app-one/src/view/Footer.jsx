import React,{Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          Footer
        </div>
        <div className="card-block">
          <h4 className="card-title">Special title treatment</h4>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer text-muted">
         ...
        </div>
      </div>
    );
  }
}