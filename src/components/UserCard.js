import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import useUserHook from "../hooks/useUserHook";

export default function UserCard(props) {
  const { user } = props;

  return (
    <>
      {user?.login ? (
        <Card sx={{ maxWidth: 345, overflow: "visible" }}>
          <CardMedia
            sx={{ height: 300, width: 350 }}
            image={user?.avatar_url}
            title="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="span">
              {user.login}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Following: {user.following}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Followers: {user.followers}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Repos: {user.public_repos}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Created at: {user.created_at}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ) : (
        <div>no data</div>
      )}
    </>
  );
}
