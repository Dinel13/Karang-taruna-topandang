import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Header from "./components/Header";
import ApaDiKatatop from "./components/AdaApaDiKatatop";

const useStyes = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bgr.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyes();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <ApaDiKatatop />
      </div>
    </>
  );
}

export default App;
