import { connect } from 'react-redux';
import {
  buttonInputs,
  termsInputs,
  termsErrors,
} from '../actions';
import valid from './valid';
import request from '../api/request';
import Footer from '../components/forms/Footer';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  submit: (form) => {
    if (valid(form, dispatch)) {
      // make graphQL request
      dispatch(buttonInputs(true, 'submit'));

      request(form, result => console.log(result));
    }
  },
  setValue: (value, property) => {
    dispatch(termsInputs(value, property));
    dispatch(termsErrors(false, property));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
