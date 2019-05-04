import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterQuestion, logOutUser} from '../actions';


class SearchBar extends React.Component {
  state = {
    search: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === 'search') {
      this.props.filterQuestion(e.target.value);
    }
  };

  onSubmit = e => {
    e.preventDefault();
  };
  onLogout = () => {
    this.props.logOutUser().then(() => this.props.history.push('/'));
  };

  render() {
    const path = this.props.location.pathname;
    return (
      <div className="Header">
        <div className="container">
          <div className="logo" />
          {path !== '/' && this.props.isAuthenticated && (
            <div className="header1">
              <nav>
                <NavLink to="/Question">Questions</NavLink>
                <NavLink to="/QAform">Add question</NavLink>
                <NavLink onClick={this.onLogout} to="#">
                  Logout
                </NavLink>
              </nav>
              <form>
                <div className="form-content">
                  <i class="fas fa-search" />
                  <input
                    onChange={this.onChange}
                    type="text"
                    name="search"
                    placeholder="Search by keywords..."
                    value={this.state.search}
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({UserReducer, QuestionReducer}) => {
  return {
    isAuthenticated: UserReducer.isAuthenticated,
    filteredQuestion: QuestionReducer.filteredQuestion
  };
};

const SearchBarWithRouter = withRouter(SearchBar);

export default connect(
  mapStateToProps,
  {filterQuestion, logOutUser}
)(SearchBarWithRouter);