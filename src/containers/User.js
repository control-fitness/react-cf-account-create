import { connect } from 'react-redux';
import { userInputs, userErrors } from '../actions';
import User from '../components/forms/User';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setValue: (value, property) => {
    dispatch(userInputs(value, property));
    dispatch(userErrors(false, property));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
