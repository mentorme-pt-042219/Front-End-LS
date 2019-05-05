import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import {getQuestion} from '../../actions/index';
import {connect} from 'react-redux';
import QCardsList from './QCardsList';
import SearchBar from '../SearchBar';


// const styles = theme => ({
//   card: {
//     maxWidth: 400,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   actions: {
//     display: 'flex',
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
 
//     avatar: {
//       // color: grey[900],
//     },
  
// });

class QCards extends React.Component {
  componentDidMount() {
    this.props.getQuestion();
  }
  render() {
    return (
      <div className="QCardsC">

        <div className="SContainer">
       <SearchBar/>
       </div>
        <div className="QlistC">
          {/* <h2>Question Feed </h2> */}
          <div className="Qlist">
            {
              !this.props.isFetching &&
              this.props.filteredQuestions.length >= 0 && (
                <div>
                  {this.props.filteredQuestions.map(q => {
                    return (
                      <QCardsList
                     
                        key={q.id}
                        question={q}
                        questions={this.props.questions}
                      />
                    );
                  })}
                </div>
              )}
          </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = ({QuestionReducer}) => {
  return {
    questions: QuestionReducer.questions,
 isFetching: QuestionReducer.fetchingQuestions,
    filteredQuestions: QuestionReducer.filteredQuestions,

  };
};

export default connect(
  mapStateToProps,
  {getQuestion}
)(QCards);