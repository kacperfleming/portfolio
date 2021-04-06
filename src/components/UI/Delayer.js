import {useEffect, useState} from 'react';

const Delayer = props => {
    const [el, setEl] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setEl(props.children);
        }, 3000);

        return () => clearTimeout(timer);
    }, [props.children]);

    return el;
}

export default Delayer;