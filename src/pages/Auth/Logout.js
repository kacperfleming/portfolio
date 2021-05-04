import {connect} from 'react-redux';
import {useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import * as actions from '../../store/actions/index';

function Logout(props) {

    const {onLogout} = props;

    useEffect(() => {
        onLogout();
    }, [onLogout]);

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
