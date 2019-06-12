import React, { Component } from 'react';
import classes from './panel.css';

class Panel extends Component {
state = {
    card: {
        check: false,
    }
};

    render() {
        let cards = <p>Cards still not recognized!</p>;
        if (this.state.card.check) {
            cards = <div className={classes.TarotCard}></div>
        }
        return(
            <div>
                {cards}
            </div>
        );
    }

}


export default Panel;