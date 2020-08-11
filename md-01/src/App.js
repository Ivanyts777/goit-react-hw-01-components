import React from "react";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import user from "./db/users.json";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import Statistics from "./Components/Statistics/Statistics";
import statisticalData from "./db/statistical-data.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statisticalData={statisticalData} />
      <FriendList />
      <TransactionHistory />
    </div>
  );
}

export default App;
