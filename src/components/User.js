import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

class User extends React.Component {
  // Will be called X times, where X is the number of posts, see posts.map().
  componentDidMount() {
    console.log("User -- componentDidMount()");
    this.props.fetchUser(this.props.userId);
  }

  render() {
    // Is called X number of time where X is the number of values in this.props.user, returned by mapStateToProps().
    console.log("User -- render()");
    return this.props.user ? <div>{this.props.user.name}</div> : null;
  }
}
// Called once during initialization then it will be called X times, where X is the number of posts, see posts.map().
const mapStateToProps = (state, props) => {
  console.log("User -- mapStateToProps");
  // We manage from here the number of time render() is being called.
  // e.g: If we return an array of 2 of the same users, then render() will be called twice.
  // That's why we need to narrow it down to only one user at a time.
  return {
    // We only send the user from that post.
    // (It should be unique at that point other wise we re-render the component).
    user: state.users.find((user) => user.id === props.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(User);
// export default connect(mapStateToProps)(User);
