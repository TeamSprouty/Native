import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import LoginPassword from '../components/LoginPassword';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

const PasswordContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(LoginPassword);

// export the wrapper
export default PasswordContainer;