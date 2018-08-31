/* global window */

import { connect } from 'react-redux';
import {
  buttonInputs,
  termsInputs,
  termsErrors,
  apiSubmit,
} from '../actions';
import valid from './valid';
import request from '../api/request';
import Footer from '../components/forms/Footer';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  submit: (form) => {
    if (valid(form, dispatch)) {
      // make graphQL request

      // show progress on button
      dispatch(buttonInputs(true, 'submit'));

      // hide api error response messages
      dispatch(apiSubmit(false, 'response'));

      request(form)
        .then(() => {
          window.location = '/signup/success';
        })
        .catch((response) => {
          dispatch(apiSubmit(response.graphQLErrors.map(error => error.message), 'messages'));

          // show api error response messages
          dispatch(apiSubmit(true, 'response'));

          // hide progress on button
          dispatch(buttonInputs(false, 'submit'));
        });
    }
  },
  setValue: (value, property) => {
    dispatch(termsInputs(value, property));
    dispatch(termsErrors(false, property));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
