import jsonPlaceHolder from "../api/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // V1
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // console.log(userIds);
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  // V2 using lodash.
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();

  // If we want to access the users we need to resolve the
  // await Promise.all(userIds.map((id) => dispatch(fetchUser(id))));
  // console.log(getState());
};

export const fetchPosts = () => {
  // For redux-thunk to be able to work
  return async function (dispatch) {
    const response = await jsonPlaceHolder.get("/posts");
    dispatch({
      type: "FETCH_POST",
      payload: response.data,
      // payload: [
      //   { userId: 4, title: "My Post 1", body: "body", id: 1 },
      //   { userId: 2, title: "My Post 2", body: "body", id: 2 },
      //   { userId: 3, title: "My Post 3", body: "body", id: 3 },
      // ],
    });
  };
};

export const fetchUser = (id) => {
  // For redux-thunk to be able to work
  return async function (dispatch) {
    const response = await jsonPlaceHolder.get("/users/" + id);
    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };
};

// export const fetchUser = (id, update = false) => {
//   // For redux-thunk to be able to work
//   return function (dispatch, getState) {
//     update === true
//       ? _fetchAndUpdateUser(id, dispatch)
//       : _fetchUser(id, dispatch);
//     // console.count("fetchUser");
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get("/users/" + id);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });

// const _fetchAndUpdateUser = async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get("/users/" + id);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// };
