import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import LoginUserName from '../components/LoginUserName';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

const UserNameContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(LoginUserName);

// export the wrapper
export default UserNameContainer;