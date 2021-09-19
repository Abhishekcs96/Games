import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";

import { useDispatch } from "react-redux";
import {
  addGamesPlayed,
  removeGamesFromPlayed,
  removeGamesFromPlaylist,
  moveGamesToPlaylist,
} from "../redux/Actions/actions";

const Innercardcontrols = ({ Game, Type }) => {
  const dispatch = useDispatch();
  console.log(Type);

  return (
    <div className="inner-card-controls">
      {Type === "gamestoplay" && ( //react fragments, brackets with no elements in them really
        <>
          <Button
            variant="contained"
            color="success"
            startIcon={<DriveFileMoveIcon />}
            className="ctrl-btn"
            id="Button-card-control"
            onClick={() => dispatch(addGamesPlayed(Game))}
          >
            To Played
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            className="ctrl-btn"
            id="Button-card-control"
            onClick={() => dispatch(removeGamesFromPlaylist(Game.id))}
          >
            Delete
          </Button>
        </>
      )}
      {Type === "gamesplayed" && (
        <>
          <Button
            variant="contained"
            color="success"
            startIcon={<DriveFileMoveIcon />}
            className="ctrl-btn"
            id="Button-card-control"
            onClick={() => dispatch(moveGamesToPlaylist(Game))}
          >
            To List
          </Button>

          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            className="ctrl-btn"
            id="Button-card-control"
            onClick={() => dispatch(removeGamesFromPlayed(Game.id))}
          >
            Delete
          </Button>
        </>
      )}
    </div>
  );
};

export default Innercardcontrols;
