import React, { useState, useEffect } from "react";
import type { CardContainerVariant } from "components/Card/Card";
import { styled } from "@mui/material/styles";
import Card from "./../Card";
import DotIndicator from "./../DotIndicator";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CardCarouselProps {
  cardContainerVariant?: CardContainerVariant;
  cardMediaHeight?: string | number;
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  position: "relative",
});

const CarouselContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  overflow: "hidden",
  position: "relative",
});

const ArrowContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  backgroundColor: "#e9deba",
  margin: "auto",
  top: 0,
  right: -20,
  bottom: 0,
  height: 60,
  width: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
}));

const CardContainer = styled((props: any) => <Card {...props} />)(
  ({ color, theme }) => ({
    marginLeft: theme.spacing(2),
    background: color,
    color: theme.palette.getContrastText(color),
    ":nth-of-type(1)": {
      marginLeft: 0,
    },
  })
);

const CardCarousel: React.FC<CardCarouselProps> = ({
  cardContainerVariant,
  cardMediaHeight,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onUpdate = (index: number) => {
    console.log("onUpdate", index);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (window) {
    }
  }, []);

  return (
    <Container>
      <CarouselContainer>
        <CardContainer
          title="Ape Gang#5929"
          description="Purchased August 2021"
          imageURL="apegang5929.png"
          color="#881a1e"
          containerVariant={cardContainerVariant}
          cardMediaHeight={cardMediaHeight}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#465bae"
          containerVariant={cardContainerVariant}
          cardMediaHeight={cardMediaHeight}
        />
        <CardContainer
          title="Ape Gang#5929"
          description="Purchased August 2021"
          imageURL="apegang5929.png"
          color="#881a1e"
          containerVariant={cardContainerVariant}
          cardMediaHeight={cardMediaHeight}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#465bae"
          containerVariant={cardContainerVariant}
          cardMediaHeight={cardMediaHeight}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#465bae"
          containerVariant={cardContainerVariant}
          cardMediaHeight={cardMediaHeight}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#465bae"
          containerVariant={cardContainerVariant}
          cardMediaHeight={cardMediaHeight}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#10ac84"
          containerVariant={cardContainerVariant}
          cardMediaHeight={cardMediaHeight}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#10ac84"
          containerVariant={cardContainerVariant}
          cardMediaHeight={cardMediaHeight}
        />
      </CarouselContainer>
      <ArrowContainer>
        <ArrowForwardIosIcon />
      </ArrowContainer>
      <DotIndicator length={5} activeIndex={activeIndex} onUpdate={onUpdate} />
    </Container>
  );
};

export default CardCarousel;
