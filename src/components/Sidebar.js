import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useAssetAPI } from "../context/AssetContext";
import assetRequest from "../requests";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return(
    <>
      <div className={classes.root}>
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="Assets" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Bundles" />
          </ListItem>
        </List>
      </div>
    </>
  );
}
