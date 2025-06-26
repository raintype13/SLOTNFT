import React from "react";
import { styled } from "@mui/material/styles";

interface DotIndicatorProps {
  length: number;
  activeIndex: number;
  onUpdate?: (index: number) => void;
}

interface DotProps {
  active?: boolean;
  onClick?: any;
}

const Dot = styled("button", {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "active",
})<DotProps>(({ theme, active }) => ({
  fontSize: 20,
  color: active ? theme.palette.primary.dark : theme.palette.primary.light,
  margin: `${theme.spacing(2)} ${theme.spacing(1)}`,
  padding: 0,
  background: "initial",
  border: "none",
  cursor: "pointer",
  ":hover": {
    color: theme.palette.primary.main,
  },
}));

const DotContainer = styled("div")({
  display: "flex",
});

const DotIndicator: React.FC<DotIndicatorProps> = ({
  activeIndex,
  length,
  onUpdate,
}) => {
  console.log("DotIndicator");
  const handleClick = (index: number) => {
    console.log("handleClick", index);
    if (onUpdate) {
      onUpdate(index);
    }
  };
  const renderDots = () => {
    let JSX = [];

    for (let i = 0; i < length; i++) {
      JSX.push(
        <Dot key={i} active={i === activeIndex} onClick={() => handleClick(i)}>
          •
        </Dot>
      );
    }
    return JSX;
  };

  return <DotContainer>{renderDots()}</DotContainer>;
};

export default DotIndicator;
