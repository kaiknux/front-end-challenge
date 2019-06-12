import React, { Component } from 'react';
import classes from './panel.css';
import axios from 'axios';
class Panel extends Component {
    state = {
        cards: [],
        check: false,
    }


    async componentDidMount() {
        let res = await axios.get('https://api.myjson.com/bins/pzrnx');
        let data = await res.data;
        const newArray = [...data.cards];
                                                    console.log('Informação Original:');
                                                    console.log(data.cards);
        function func (a, b)  {  
            return 0.5 - Math.random();
          }  
        const asss = newArray.sort(func);
                                                    console.log('Informação Embaralhada:');
                                                    console.log(asss);
        this.setState({cards: asss})
    }

    render() {

        let cards = <p>Something went wrong.</p>
        if (!this.state.error) {
            cards = this.state.cards.map(
                card => { return <div> <p>{card.name}</p></div> }
            );
        }
        return (
            <div>
                {cards}
            </div>
        );
    }

}


export default Panel;