import {useState, useEffect} from 'react';
import * as utility from '../../../../usefulFunc/utility';

function CharChanging(props) {
    const [char, setChar] = useState('');

    useEffect(() => {
        setChar('');
        const interval = setInterval(() => {
            setChar(utility.randChar());
        }, 50);

        const timer = setTimeout(() => {
            clearInterval(interval);
            setChar(props.children);
        }, 2000 * (props.posInQueue * 0.2 + 0.1));

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        }
    }, [props.children, props.posInQueue])

    return char;
}

export default CharChanging;