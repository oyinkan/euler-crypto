import React from "react";
import Sidebar from "../components/Sidebar";
import Grid from '@material-ui/core/Grid';
import MainList from "../components/MainList";
import { AssetContextProvider } from "../context/AssetContext";

export default function Home() {
  return(
    <>
      <AssetContextProvider>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={8} md={10}>
            <MainList />
          </Grid>
        </Grid>
      </AssetContextProvider>
    </>
  );
}
