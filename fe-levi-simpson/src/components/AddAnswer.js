import React, {Component, Fragment} from 'react';
import axiosWithAuth from './utils/axiosAuth';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addAnswer} from '../actions';



class AddAnswer extends Component {
  state = {
    answer: {
      body: '',
      author: '',
      FK_question_id: this.props.match.params.id,
      FK_user_id: ''
    }
  };

  componentDidMount() {
    axiosWithAuth()
      .get('https://mentor-mee.herokuapp.com/auth/decode')
      .then(res =>
        this.setState(prevState => ({
          answer: {
            ...prevState.answer,
            author: res.data.handle,
            FK_user_id: res.data.subject
          }
        }))
      )
      .catch(err => console.log(err));
  }

  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      answer: {
        ...prevState.answer,
        [e.target.name]: e.target.value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.addAnswer(this.state.answer);

    this.setState({
      answer: {
        body: ''
      }
    });

    this.props.history.push(`/Question/${this.props.match.params.id}`);
  };

  render() {
    return (
      <div className="formWrap1">
        <div className="formWrapC1">
          <form onSubmit={this.onSubmit}>
         
          <div>
            <h3 className="Qh3">Send An Answer</h3>
            </div>
            
                <input
                  className="SearchInput2"
                  required
                  type="text"
                  onChange={this.onChange}
                  name="body"
                
                  value={this.state.answer.body}
                  placeholder="Answer"
                />
        
            
              <div className="Abtn">
            
                
                <div>
                <Link className="cancelL" to={`/Question/${this.props.match.params.id}`}>
                  Cancel
                </Link>
                </div>

                <div>
                <i class="far fa-arrow-alt-circle-right fa-3x" onClick={this.onSubmit}></i>
                </div>
              
              </div>
            
         
          
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {addAnswer}
)(AddAnswer);