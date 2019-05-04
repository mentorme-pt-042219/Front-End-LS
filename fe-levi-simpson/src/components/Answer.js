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

        <div className="cardContainer">
          <div className="card">
          
     
          <div className="content">
            <p>{this.props.answer.body}</p>
            {this.props.answer.FK_user_id === this.state.FK_user_id && (
              <button
                className="btn"
                onClick={() => this.onDelete(this.props.answer.id)}
              >
                <i class="far fa-trash-alt fa-lg" />
              </button>
            )}
          </div>
          <p className="author">Answered by &#5867; {this.props.answer.author}</p>
            <p>On {moment(this.props.answer.created_at).format('MMM Do YY')}</p>
        </div>
        </div>
    );
  }
}

export default connect(
  null,
  {deleteAnswer}
)(Answer);
