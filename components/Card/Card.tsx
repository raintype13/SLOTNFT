import React from "react";
import Card, { CardProps as MUICardProps } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "components/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export type CardContainerVariant = "tallboy" | "square" | "default";

interface CardProps {
  title: string;
  description: string;
  status?: string;
  imageURL: string;
  color: string;
  classes?: string;
  className?: string;
  variant?: MUICardProps["variant"];
  containerVariant?: CardContainerVariant;
  cardMediaHeight?: string | number;
}

interface CardContainerProps extends MUICardProps {
  containerVariant?: CardContainerVariant;
}

const CardContainerWidth = {
  default: "auto",
  tallboy: 320,
  square: `calc(50% - .5rem)`,
};

const CardContainerHeight: any = {
  tallboy: 470,
};

const CardContainer = styled(Card)<CardContainerProps>(
  ({ theme, containerVariant = "default", color }) => ({
    flex: "1 0 100%",
    backgroundColor: color,
    ...(containerVariant === "square" ? { aspectRatio: "1/1" } : {}),
    [theme.breakpoints.up("sm")]: {
      flex: "1 0 auto",
      width: CardContainerWidth[containerVariant],
      height: CardContainerHeight[containerVariant],
    },
    [theme.breakpoints.up("lg")]: {
      flex: "1 0 25%",
    },
    display: "flex",
    flexDirection: "column",
    ...(containerVariant === "tallboy" || containerVariant === "square"
      ? {
          img: {
            flex: "1 1 100%",
          },
          video: {
            flex: "1 1 100%",
          },
        }
      : {}),
  })
);

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  [":last-child"]: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(2)}`,
  },
  fontSize: "1rem",
}));

const BottomContainer = styled("div")({});

CardContainer.defaultProps = {
  containerVariant: "default",
};

const MediaCard: React.FC<CardProps> = ({
  title,
  description,
  status,
  imageURL,
  color,
  classes,
  className,
  variant,
  containerVariant,
  cardMediaHeight,
}) => {
  return (
    <CardContainer
      className={className}
      variant={variant}
      color={color}
      containerVariant={containerVariant}
    >
      <CardMedia height={cardMediaHeight} />
      <BottomContainer>
        <StyledCardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography
                variant="h5"
                sx={{ fontSize: "1rem", fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </div>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="body2">Price</Typography>
              <Typography variant="body2">0.0004 BTC</Typography>
            </Box>
          </Box>
          <CardActions
            sx={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
          >
            <Button size="small" variant="contained">
              buy{status}
            </Button>
          </CardActions>
        </StyledCardContent>
      </BottomContainer>
    </CardContainer>
  );
};

export default MediaCard;
