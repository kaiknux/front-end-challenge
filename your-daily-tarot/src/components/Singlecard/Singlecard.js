import React, { Component } from 'react';
import classes from './Singlecard.css';

class Singlecard extends Component {
    state = {
        clicked: false,
    }
    changeImageHandler = () =>  {
        if(this.props.clickable !== 'aaa') {
        this.setState({clicked: true})
        this.props.clicked();
    } else {return null}
    }

    render() {
        
            let card = <div><img onClick={() => this.changeImageHandler()} src={this.props.urlbackimage}></img></div>
            if (this.state.clicked) {
                card = <div><img src={this.props.urlimage + this.props.image}></img></div>
            }
        return (
            <div className={classes.Container}>
                {card}
            </div>
        );
    }
}
export default Singlecard

// urlbackimage={this.state.urlbackimage} urlimage={this.state.urlimage} name={this.state.cards.name} image={this.state.cards.image} /> }



// return (
//     <div className={classes.Container}>
//         <div><img onClick={this.props.clicked} src={this.props.urlimage + this.props.image}></img></div>
//     </div>
// );
// }
// }