import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display:'flex',
    justifyContent : "center",
    alignItems : "center",
    
  },
}));

export default function ApaDiKatatop() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {places.map((item, index) => (
        <ImageCard place={item} />
      ))}
    </div>
  );
}
