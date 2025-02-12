import { useState } from "react";

import "./App.css";
import "./components/ui/Ui.css";
import "./components/icons/Icons.css";
import "./components/containers/Containers.css";

import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Box from "./components/containers/Box";

function App() {
  return (
    <>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <Box>
            <Button>Some text here</Button>
            <Input />
          </Box>
        </main>
      </div>
    </>
  );
}

export default App;
