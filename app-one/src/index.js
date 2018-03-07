import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './view/Body';
import Header from './view/Header';
import Footer from './view/Footer';



class IndexBody extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<IndexBody />,document.getElementById('root'));

