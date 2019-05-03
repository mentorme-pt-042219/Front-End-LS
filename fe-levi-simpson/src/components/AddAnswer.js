import React, {Component, Fragment} from 'react';
import axiosWithAuth from '../utils/axiosAuth';
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
      <Fragment>
        <div className="AddAnswer">
          <form onSubmit={this.onSubmit}>
            <div className="form-content">
              <div className="form-item">
                <textarea
                  required
                  type="text"
                  onChange={this.onChange}
                  name="body"
                  cols="30"
                  rows="10"
                  value={this.state.answer.body}
                  placeholder="Add answer..."
                />
              </div>
              <div className="btns">
                <input type="submit" value="Add" />
                <Link to={`/Question/${this.props.match.params.id}`}>
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  {addAnswer}
)(AddAnswer);