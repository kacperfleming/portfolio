import {connect} from 'react-redux';
import {useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import * as actions from '../../store/actions/index';

const Logout = props => {
    console.log('test');

    useEffect(() => {
        console.log('logout');
        props.onLogout();
    }, [props.onLogout]);

    return <Redirect to="/" />
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.initiateLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
