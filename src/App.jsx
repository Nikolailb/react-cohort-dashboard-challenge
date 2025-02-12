import { useState, createContext, useEffect } from "react";

import "./App.css";
import "./components/ui/Ui.css";
import "./components/icons/Icons.css";
import "./components/containers/Containers.css";
import "./components/content/Content.css";

import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import Content from "./components/content/Content";
import { getUserById } from "./util/api";

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
          <Content />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export { App, CurrentUserContext };
