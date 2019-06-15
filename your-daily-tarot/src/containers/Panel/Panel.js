import React, { Component } from 'react';
import classes from './Panel.css';
import axios from 'axios';
import Singlecard from '../../components/Singlecard/Singlecard';
import SinglePickedCard from '../../components/SinglePickedCard/SinglePickedCard'

let myArr = [];

class Panel extends Component {
    state = {
        cards: [],
        check: false,
        urlbackimage: '',
        urlimage: '',
        addedTarots: [],
        erro: false,
        clickable: true,
    }


    async componentDidMount() {
        let res = await axios.get('https://api.myjson.com/bins/pzrnx');
        let data = await res.data;
        const newArray = [...data.cards];
        console.log(data);
        console.log('Informação Original:');
        console.log(data.cards);
        function func(a, b) {
            return 0.5 - Math.random();
        }
        const asss = newArray.sort(func);
        console.log('Informação Embaralhada:');
        console.log(asss);
        this.setState({ cards: asss })
        this.setState({ urlbackimage: data.imageBackCard })
        this.setState({ urlimage: data.imagesUrl })
        console.log(this.state);
    }

    selectedCardHandler = (teste) => {
        // const array = [...this.state.addedTarots];
        // array.push(teste);
        // this.setState({addedTarots: array})
        console.log(teste);
        if (myArr.length < 4) {
            myArr.push(teste);
            this.setState({ addedTarots: myArr })
        } else if (myArr.length = 5) {
            myArr.push(teste);
            this.setState({ addedTarots: myArr })
            const naopode = 'aaa'
            this.setState({ clickable: naopode })
        } else {
             console.log('array is full!') 
             console.log(this.state);
            }
             
        console.log(myArr);
    }

    render() {

        let cards = <p>Something went wrong.</p>
        if (!this.state.error) {
            cards = this.state.cards.map(
                card => { return <Singlecard clickable={this.state.clickable} clicked={() => this.selectedCardHandler(card)} name={card.name} image={card.image} urlbackimage={this.state.urlbackimage} urlimage={this.state.urlimage} /> }
            );
        }

        let pickedCards = <p>Something went wrong.</p>
        if (!this.state.error) {
            pickedCards = this.state.addedTarots.map(
                card => { return <SinglePickedCard name={card.name} image={card.image} urlbackimage={this.state.urlbackimage} urlimage={this.state.urlimage} /> }
            );
        }
        
        return (
            <div>
                <div className={classes.AppContainer}>
                    {cards}
                </div>

                <div className={classes.AppFooter}>
                    {pickedCards}
                </div>
            </div>
        )
    }

}


export default Panel;