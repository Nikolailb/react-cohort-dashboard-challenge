import { useState, createContext, useEffect } from "react";

import "./App.css";
import "./components/ui/Ui.css";
import "./components/icons/Icons.css";
import "./components/containers/Containers.css";
import "./components/content/Content.css";

import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import Dashboard from "./components/content/Dashboard";
import { getUserById } from "./util/api";
import { Route, Routes } from "react-router-dom";
import Post from "./components/content/Post";

const CurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    getUserById(1, setCurrentUser);
  }, []);

  if (!currentUser) {
    return <div>Loading...</div>; // or a loading spinner, or some placeholder content
  }

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser }}>
        <Header />
        <div className="main-layout">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/profile" element={<div>WIP</div>} />
            </Routes>
          </main>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export { App, CurrentUserContext };
