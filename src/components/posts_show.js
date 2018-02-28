import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>Hello you handsome genius!</div>
    )
  }
}

function mapStateToProps({ posts }) {
  
}

export default connect(null, { fetchPost })(PostsShow);
