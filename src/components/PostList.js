import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
// import { fetchPostsAndUsers } from "../actions";
import User from "./User";

class PostList extends React.Component {
  componentDidMount() {
    console.log("List -- componentDidMount()");
    this.props.fetchPosts();
    // this.props.fetchPostsAndUsers();
  }

  renderList() {
    console.log("List -- render()");

    return this.props.posts.map((post) => {
      console.log("List -- Call User Component");

      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <User userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  // When is being called?
  console.log("List -- mapStateToProps()");
  // The key bellow will be the name user in getState().key
  return { posts: state.posts };
};
// export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
export default connect(mapStateToProps, { fetchPosts })(PostList);
