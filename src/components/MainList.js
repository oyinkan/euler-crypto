import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAssetAPI } from "../context/AssetContext";

const useStyles = makeStyles({
  media: {
    height: 260,
  },
  cardHeight: {
    height: 400
  },
  cardActionHeight: {
    height: "100%"
  }
});


export default function MainList() {
  const classes = useStyles();
  const { assetData } = useAssetAPI();

  const [assets, setAssets] = useState(assetData);

  console.log("main", assets);

  useEffect(() => {
    setAssets(assetData)
  }, [assetData])

  return(
    <>
    { assetData.length !== 0 &&
      <Grid container spacing={3} style={{width: "100%"}}>
        {assets.map(asset => (
          <Grid item xs={12} md={4} lg={3} key={asset.id}>
            <Card className={classes.cardHeight}>
              <CardActionArea className={classes.cardActionHeight}>
                <CardMedia
                  className={classes.media}
                  image={asset.image_url}
                  title={asset.asset_contract.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h5">
                    {asset.name} {asset.id}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {asset.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    }
    </>
  );
}
