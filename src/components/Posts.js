import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import PostItemContainer from './PostItemContainer';
import { fetchPosts } from '../redux/actionCreators/postAction';

function Posts({ posts, fetchPostReducer }) {
  useEffect(() => {
    fetchPostReducer();
  }, []);

  const postItem = posts.map(post => {
    return (
      <PostItemContainer key={post.id} title={post.title} body={post.body} />
    );
  });

  return (
    <Fragment>
      <div className="container-fluid">
        {postItem}
        <br />
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.postsRoot.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPostReducer: () => dispatch(fetchPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
