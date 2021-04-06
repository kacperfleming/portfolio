import React from 'react';
import CharChanging from './CharChanging/CharChanging';
import {randNum} from '../../../utilityFunc/utility';

import './StringVariation.css';

const stringVariation = props => {

    return <span className="StringVariation">{props.children.split('').map((char, i) => <CharChanging posInQueue={i} key={i}>{char}</CharChanging>)}</span>;

}

export default stringVariation;