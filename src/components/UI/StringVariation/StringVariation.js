import React from 'react';
import CharChanging from './CharChanging/CharChanging';
import {randNum} from '../../../usefulFunc/utility';


const stringVariation = props => {

    return <span>{props.children.split('').map((char, i) => <CharChanging posInQueue={i} key={i}>{char}</CharChanging>)}</span>;

}

export default stringVariation;