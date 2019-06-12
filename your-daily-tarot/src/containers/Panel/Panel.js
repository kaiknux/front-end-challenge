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
        console.table(data);
        this.setState({ cards: data.cards })
        console.log(this.state)
    }

    render() {

        let cards = <p>Something went wrong.</p>
        if (!this.state.error) {
            cards = this.state.cards.map(
                card => { return <div> {card.name}</div> }
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