import React from "react";
import { connect } from "react-redux";

import UserCards from "../Users/UserCards";
// import actions
import {getData} from "../../actions/index";

// import UpdateFriendContainer from '../components/UpdateFriendContainer';

class UserView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //call our action
    this.props.getData();
  }

  render() {
    {console.log( this.props.message)}
 
      // return something here to indicate that you are fetching data
  
    return (
      <div className="CharactersList_wrapper">
         {this.props.fetchingFriend? <h1>Loading</h1> : null}
      {console.log( this.props.message)}
        <UserCards message={this.props.message} />
       
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mstp = state => {
  return {
   message: state.message,
    fetchingFriend: state.fetchingFriend
  }
}

export default connect(
 (mstp), {getData: getData}
)(UserView);
