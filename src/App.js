import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
      <Home toggleDrawer={toggleDrawer} />
    </>
  );
}

export default App;
