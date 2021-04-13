import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actions from '../../store/actions/index';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

import './Auth.css';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched : false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 15
                },
                valid: false,
                touched : false
            }
        },
        isSignup: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if(rules.required) {
            isValid = value.trim !== '';
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        if(rules.isEmail) {
            const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            isValid = pattern.test(value) && isValid;
        }
        return isValid;
    }

    onSubmitHandler = event => {
        event.preventDefault();
        const account = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value,
            returnSecureToken: true
        }
        this.props.onAuth(account, this.state.isSignup);
    }

    onChangeHandler = (event, id) => {
        const updatedControls = {
            ...this.state.controls,
            [id]: {
                ...this.state.controls[id],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[id].validation),
                touched: true
            }
        }
        this.setState({controls: updatedControls})
    }

    onSwitchAuthModeHandler = () => this.setState(prevState => {
        return {
            isSignup: !prevState.isSignup
        }
    });

    render() {
        const inputsArray = [];
        for(let input in this.state.controls) {
            inputsArray.push({
                id: input,
                config: this.state.controls[input]
            });
        }

        const displayedForm = inputsArray.map(input =>
            <Input
                key={input.id}
                label={input.id}
                changed={(event) => this.onChangeHandler(event, input.id)}
                invalid={!input.config.valid}
                touched={input.config.touched}
                shouldValidate={input.config.validation.required}
                value={input.config.value}
                inputType={input.config.elementType}
                elementConfig={input.config.elementConfig} />
            );

            let authRedirect = null;

            if(this.props.isAuthenticated) {
                authRedirect= <Redirect to="/" />;
            }

            let authError = null;

            if(this.props.error) {
                authError = <p style={{color: "red"}}>{this.props.error}</p>
            }


        return (
            <div className="Auth">
                {authRedirect}
                {authError}
                <form onSubmit={this.onSubmitHandler}>
                    {displayedForm}
                    <Button btnType="Submit">Submit</Button>
                </form>
                <Button btnType="Changer" clicked={this.onSwitchAuthModeHandler}>{this.state.isSignup ? 'Sign in' : 'Signup'}</Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (account, isSignup) => dispatch(actions.auth(account, isSignup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);