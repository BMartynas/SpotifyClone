import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import "./Footer.css";
import { useDataLayerValue } from "./DataLayer";

function Footer() {
  const [{ item }, dispatch] = useDataLayerValue();
  return (
    <div className="footer">
      <div className="footer-left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
      </div>
      <div className="footer-center">
        <ShuffleIcon className="green-icon" />
        <SkipPreviousIcon className="icon" />

        <PauseCircleOutlineIcon fontSize="large" className="icon" />

        <PlayCircleOutlineIcon fontSize="large" className="icon" />

        <SkipNextIcon className="icon" />
        <RepeatIcon className="green-icon" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
