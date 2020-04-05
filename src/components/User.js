import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

class User extends React.Component {
  // Called for x amount of posts.
  componentDidMount() {
    console.log("User -- componentDidMount()");
    this.props.fetchUser(this.props.userId);
  }

  render() {
    // Is called X number of time there are values in this.props.user, returned by mapStateToProps().
    console.log("User -- render()");
    // console.log(this.props.user);
    return this.props.user ? <div>{this.props.user.name}</div> : null;
  }
}
// Will be called X times, where X is the number of posts, see posts.map().
const mapStateToProps = (state, props) => {
  console.log("User -- mapStateToProps");
  // We manage from here the number of time render() is being called.
  // If we return 2 users, then render() will be called twice.
  return {
    // We only send the user from that post.
    user: state.users.find((user) => user.id === props.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(User);
// export default connect(mapStateToProps)(User);
