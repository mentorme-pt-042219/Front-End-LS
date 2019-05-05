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
    this.props.history.push('/Question');
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
   <SearchBar/>

   <div className="formWrapC">
<div className="formWrap">
<div>
      <h3 className="Qh3">What Would You Like To Edit?</h3>
     </div>
        <form onSubmit={this.onSubmit}>
         
          <div className="EditInputC">
           
           <div>
              <input
               className="SearchInput2"
                onChange={this.onChange}
                type="text"
                name="title"
                value={this.state.question.title}
                placeholder="Question Title"
              />
          </div>

          <div>
              <input
          className="SearchInput2"
                onChange={this.onChange}
                name="body"

                value={this.state.question.body}
                placeholder="Details"
              />
              </div>

</div>
         
         <div className="Abtn">
         <div>
         <Link className="cancelL" to={`/Question/${this.props.match.params.id}`}>Cancel</Link>
         </div>
         <div>
                <i class="far fa-arrow-alt-circle-right fa-3x" onClick={this.onSubmit}></i>
                </div>
          
            </div>
</form>

</div>
</div>
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