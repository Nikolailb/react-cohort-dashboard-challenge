import { useState, createContext, useEffect } from "react";

import "./App.css";
import "./components/ui/Ui.css";
import "./components/icons/Icons.css";
import "./components/containers/Containers.css";
import "./components/content/Content.css";

import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import CreatePost from "./components/content/CreatePost";
import Post from "./components/content/Post";

const UserContext = createContext();

function App() {
  const [currentUser, serCurrentUser] = useState();

  return (
    <>
      <UserContext.Provider value={{ currentUser }}>
        <Header />
        <div className="main-layout">
          <Sidebar />
          <main className="content">
            <CreatePost />
            <Post />
          </main>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
