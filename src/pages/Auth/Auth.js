import {useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../store/actions/index";
import {updateObj} from '../../usefulFunc/utility';

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

import classes from "./Auth.module.css";

const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim !== "";
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if (rules.isEmail) {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    isValid = pattern.test(value) && isValid;
  }
  return isValid;
};


const formReducer = (state, action) => {

  switch (action.type) {
    case 'UPDATE_INPUT_VALUE': return updateObj(state, {
      [action.id]: {
        ...state[action.id],
        value: action.value,
        touched: true,
        valid: checkValidity(action.value, state[action.id].validation)
      }
    });
    case 'SET_FORM_IS_VALID': return updateObj(state, {
      formIsValid: action.emailOK && action.passwordOK
    })

    default: return state;
  };
}

function Auth(props) {
  const [formState, dispatchForm] = useReducer(formReducer, {
    email: {
      value: "",
      elementType: 'input',
      inputType: 'email',
      touched: false,
      valid: false,
      shouldValidate: true,
      validation: {
        required: true,
        isEmail: true
      }
    },
    password: {
      value: "",
      elementType: 'input',
      inputType: 'password',
      touched: false,
      valid: false,
      shouldValidate: true,
      validation: {
        required: true,
        minLength: 8,
        maxLength: 15
      }
    }
  });

  const [isSignup, setIsSignup] = useState(false)

  const [formIsValid, setFormIsValid] = useState(false)

  const {email: {valid: emailIsValid}, password: {valid: passwordIsValid}} = formState;

  useEffect(() => {
    const timer = setTimeout(() => {
      emailIsValid && passwordIsValid ? setFormIsValid(true) : setFormIsValid(false)
    }, 500);

    return () => clearTimeout(timer);
  }, [emailIsValid, passwordIsValid]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(!formIsValid) return;
    const account = {
      email: formState.email.value,
      password: formState.password.value,
      returnSecureToken: true,
    };
    props.onAuth(account, isSignup);
  };

  const onChangeHandler = (event, id) => dispatchForm({type: 'UPDATE_INPUT_VALUE', id: id, value: event.target.value});


  const onSwitchAuthModeHandler = () => setIsSignup(prevState => !prevState);


  const inputsArr = [];
  for(let input in formState) {
    inputsArr.push({
      id: input,
      config: formState[input]
    })
    console.log(input);
  }

  const displayedForm = inputsArr.map(input =>
    <Input
    key={input.id}
    label={input.id}
    elementType={input.config.elementType}
    inputType={input.config.inputType}
    value={input.config.value}
    touched={input.config.touched}
    invalid={!input.config.valid}
    shouldValidate={input.config.validation}
    changed={(event) => onChangeHandler(event, input.id)} />);

    console.log(displayedForm);

  let authRedirect = null;

  if (props.isAuthenticated) {
    authRedirect = <Redirect to="/" />;
  }

  let authError = null;

  if (props.error) {
    authError = <p style={{ color: "red" }}>{props.error}</p>;
  }

  return (
    <section className={classes.Auth}>
      {authRedirect}
      {authError}
      <form onSubmit={onSubmitHandler}>
        {displayedForm}
        <Button btnType="Submit">
          {isSignup ? "Sign in" : "Sign-up"}
        </Button>
      </form>
      <Button btnType="Changer" clicked={onSwitchAuthModeHandler}>
        Sign in / Sign-up
      </Button>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (account, isSignup) => dispatch(actions.auth(account, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
