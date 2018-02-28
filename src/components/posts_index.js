import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      const link = `/posts/${post.id}`;

      return (
        <li className="list-group-item" key={post.id}>
          <Link to={link}>{post.title}</Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-end">
          <Link to="/posts/new" className="btn btn-primary">Add a new Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchPosts: () => {
//       dispatch(fetchPosts());
//     }
//   }
// }

// export default connect(null, mapDispatchToProps)(PostsIndex);


//this syntax replaces mapDispatchToProps;
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
