import React from 'react';
import classes from './SinglePickedCard.css';



function SinglePickedCard(props) {

  return (
    <div className={classes.SPCContainer}>
         <div><img src={props.urlimage + props.image}/></div>
    </div>
  );
}

export default SinglePickedCard;


// let bg = <div><img src={props.urlbackimage}/></div>
// if (props.card.image) {
//     bg = <div><img src={props.urlimage + props.card.image}/></div>
// }