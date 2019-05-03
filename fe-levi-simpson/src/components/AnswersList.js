import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchAnswers} from '../../src/actions/index';
import Answer from './Answer';

class AnswersList extends React.Component {
  componentDidMount() {
    this.props.fetchAnswers(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        {this.props.isAuthenticated &&
          !this.props.isFetching &&
          this.props.answers.length >= 0 && (
            <div>
              {this.props.answers.map(a => {
                return (
                  <Answer key={a.id} answer={a} answers={this.props.answers} />
                );
              })}
            </div>
          )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({AnswerReducer, UserReducer}) => {
  return {
    answers: AnswerReducer.answers,
    isFetching: AnswerReducer.isFetching,
    isAuthenticated: UserReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  {fetchAnswers}
)(AnswersList);