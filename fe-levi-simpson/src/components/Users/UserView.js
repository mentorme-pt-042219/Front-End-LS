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

  // componentDidMount() {
  //   //call our action
  //   this.props.getData();
  // }

  render() {
    {console.log( this.props.message)}
 
      // return something here to indicate that you are fetching data
  
    return (
      <div className="CharactersList_wrapper">
          {/* {this.props.fetchingMessage? <h1>Loading</h1> : null}

          {this.props.message.map(message => {
            
        return <UserCards  key={message.name} message={message} /> ;
          })} */}
       
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

// const mstp = state => {
//   return {
//    message: state.message,
//     fetchingMessage: state.fetchingMessage
//   }
// }

// export default connect(
//  (mstp), {getData: getData}
// )(UserView);

export default UserView;