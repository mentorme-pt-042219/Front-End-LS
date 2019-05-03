import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {editQuestion, getQuestion} from '../actions';

import SearchBar from '../components/SearchBar';

class UpdateQuestion extends Component {
  state = {
    question: {
      title: this.props.question.title ? this.props.question.title : '',
      body: this.props.question.body ? this.props.question.body : '',
      id: this.props.question.id ? this.props.question.id : '',
      FK_user_id: this.props.question.FK_user_id
        ? this.props.question.FK_user_id
        : ''
    }
  };

  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      question: {
        ...prevState.question,
        [e.target.name]: e.target.value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.editQuestion(this.props.match.params.id, this.state.question);
    // console.log(this.state.question);

    this.setState({
      question: {
        title: '',
        body: ''
      }
    });
    this.props.getQuestion();
    this.props.history.push('/QArchives');
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
   <SearchBar/>
        <form onSubmit={this.onSubmit}>
          <div className="form-content">
            <div className="form-item">
              <label htmlFor="title">Question title</label>
              <input
                onChange={this.onChange}
                type="text"
                name="title"
                value={this.state.question.title}
                placeholder="Question title..."
              />
            </div>
            <div className="form-item">
              <label htmlFor="body">Question Details</label>
              <textarea
                onChange={this.onChange}
                name="body"
                cols="30"
                rows="10"
                value={this.state.question.body}
                placeholder="Details..."
              />
            </div>
            <input type="submit" value="Edit" />
            <Link to={`/questions/${this.props.match.params.id}`}>Cancel</Link>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({QuestionReducer}, props) => ({
  question: QuestionReducer.questions.find(
    q => `${q.id}` === props.match.params.id
  )
});

export default connect(
  mapStateToProps,
  {editQuestion, getQuestion}
)(UpdateQuestion);