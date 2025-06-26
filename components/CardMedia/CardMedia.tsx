import React from "react";
import Box from "@mui/material/Box";
import Player from "components/Player";
import { styled } from "@mui/material/styles";

interface CardMediaProps {
  height?: string | number;
}

const CardMediaContainer = styled(Box)<CardMediaProps>((props) => ({
  flexGrow: 1,
  fontSize: 0,
  "img, video": {
    objectFit: "cover",
  },
  height: props.height,
}));

const CardMedia: React.FC<CardMediaProps> = ({ height }) => {
  return (
    <CardMediaContainer height={height}>
      <Player />
    </CardMediaContainer>
  );
};

export default CardMedia;
