import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../redux/actionCreators/addPostAction';

function PostForm({ handleSubmit }) {
  console.log(handleSubmit);
  const [data, setData] = useState({
    title: '',
    body: '',
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(data);
    setData({
      title: '',
      body: '',
    });
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            id="title"
            className="form-control mb-4"
            placeholder="Post Title"
            aria-describedby="helpId"
            value={data.title}
            onChange={handleChange}
          />
          <textarea
            className="form-control mb-4"
            id="exampleFormControlTextarea1"
            rows="3"
            name="body"
            placeholder="Post Body"
            value={data.body}
            onChange={handleChange}
          />
          <button className="btn btn-outline-primary mb-4">Submit</button>
        </div>
      </form>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  console.log('inside dipatch to props: ', dispatch);
  return {
    handleSubmit: data => dispatch(addPost(data)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(PostForm);
