import React from "react";
import Box from "@mui/material/Box";
import Card from "components/Card";

interface ListingGridProps {
  listings: Array<any>;
}

const ListingGrid: React.FC<ListingGridProps> = ({ listings }) => {
  const renderListings = () => {
    return listings.map((listing) => {
      return (
        <Card
          title="Ape Gang#5929"
          description="Purchased August 2021"
          imageURL="apegang5929.png"
          color="#881a1e"
          //   containerVariant={cardContainerVariant}
          //   cardMediaHeight={cardMediaHeight}
        />
      );
    });
  };
  return (
    <Box display="flex" alignItems="flex-start" gap="1em" flexWrap="wrap">
      {renderListings()}
    </Box>
  );
};

export default ListingGrid;
