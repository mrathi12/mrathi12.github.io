import React from 'react'
import Card from './card';
import styles from '../../css/grid-cards.module.css'

const GridCards = (props)=>{
    return(

            <div className={styles.cards}>
               { Object.values(props).map(cardProps => Card(cardProps))
               }
            </div>

    );


}

export default GridCards;