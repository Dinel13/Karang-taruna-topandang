import React from "react";
import SortIcon from "@material-ui/icons/Sort";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0  auto",
  },

  appbarTitle: {
    flexGrow: 1,
    // flexgrow akan membuat komponen ini memisah
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  moreIcon: {
    color: "#5AFF3D",
    fontSize: "2.5rem",
  },
}));

export default function Header() {
  const [checked, setchecked] = React.useState(false);

  React.useEffect(() => {
    setchecked(true);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      {/* elevation = box shadow */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Kata<span className={classes.colorText}>Top</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Selamat Datang <br />
            di <span className={classes.colorText}>Katatop</span>.
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.moreIcon} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
