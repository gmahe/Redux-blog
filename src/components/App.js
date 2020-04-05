import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <PostList></PostList>
        </div>
        <div className="column eight wide"></div>
      </div>
    </div>
  );
};

export default App;
