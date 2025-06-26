import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";

const FilterCollapseButton = styled("button")(({ theme }) => ({
  background: theme.palette.background.default,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  ...theme.typography.h6,
  border: 0,
  padding: `${theme.spacing(2)} 0`,
  paddingLeft: theme.spacing(0.875),
  borderBottom: `solid 1px ${theme.palette.divider}`,
  cursor: "pointer",
}));

interface CollapseContentProps {
  title: string;
}

const CollapseContent: React.FC<CollapseContentProps> = ({
  title,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <FilterCollapseButton
        onClick={() => {
          console.log("switching state", expanded);
          setExpanded((state) => !state);
        }}
      >
        {title}
        {expanded ? (
          <ArrowDropUp role="img" titleAccess="drop up button" />
        ) : (
          <ArrowDropDownIcon role="img" titleAccess="drop down button" />
        )}
      </FilterCollapseButton>
      <Collapse in={expanded} timeout={0} collapsedSize="0px">
        {children}
      </Collapse>
    </>
  );
};

export default CollapseContent;
