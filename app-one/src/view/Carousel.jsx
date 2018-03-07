import React,{Component} from 'react';

function List(props){
    return (
        <li>
            <img src={props.value} alt="planet"></img>
        </li>
        );
}
function Event(props){
    const listes = props.listes; 
    const listCarousel =  listes.map((list) =>
            <List key={list.toString()} value={list}/>
    );
    return (
        <ol>
          {listCarousel}
        </ol>
      );
} 
export default class Carousel extends Component {
    render(){
        return (
            <ol>
              <Event listes={listes} />
            </ol>
          );
    }
}

const listes = [
        '/img/mars.jpeg',
        '/img/jupiter.jpeg',
        '/img/venus.jpeg'
    ];

