import React from 'react';
import moment from 'moment';
import axiosWithAuth from './utils/axiosAuth';
import {connect} from 'react-redux';
import {deleteAnswer} from '../../src/actions/index';




class Answer extends React.Component {
  state = {
    FK_user_id: ''
  };
  componentDidMount() {
    axiosWithAuth()
      .get('https://mentor-mee.herokuapp.com/auth/decode')
      .then(res =>
        this.setState({
          FK_user_id: res.data.subject
        })
      )
      .catch(err => console.log(err));
  }
  onDelete = id => {
    this.props.deleteAnswer(id);
  };
  render() {
    return (
<div>
      
          <div  className="bubbleAD">
          
     
          <div className="content">
            <p>{this.props.answer.body}</p>
            {this.props.answer.FK_user_id === this.state.FK_user_id && (
              <div className="Aicon">
                <i className="Ticon" class="far fa-trash-alt fa-2x"    onClick={() => this.onDelete(this.props.answer.id)} />
              </div>
            )}
          </div>
         
          
       
        </div> {/*bubble*/}
        <div className="AuthorFooter2">
  <p className="authorDate">Answered by • {this.props.answer.author} On  {moment(this.props.answer.created_at).format('MMM Do YY')}</p> 
 
           </div>

     
        </div>
    );
  }
}

export default connect(
  null,
  {deleteAnswer}
)(Answer);
