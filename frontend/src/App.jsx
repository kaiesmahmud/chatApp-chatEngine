import { useState } from "react";

import "./App.css";
import AuthPage from "./AuthPage";

// import { AuthPage } from "./AuthPage";
import { ChatsPage } from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);


  if (!user) {
    console.log("found auth page")
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    console.log("found chatpage")
    return <ChatsPage user={user} />;
  }
}

export default App;