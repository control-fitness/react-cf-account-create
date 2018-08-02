import { connect } from 'react-redux';
import { companyInputs, companyErrors } from '../actions';
import Company from '../components/forms/Company';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setValue: (value, property) => {
    dispatch(companyInputs(value, property));
    dispatch(companyErrors(false, property));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
