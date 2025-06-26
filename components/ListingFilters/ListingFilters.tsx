import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CollapseContent from "components/CollapseContent";
import PriceForm from "components/PriceForm";
import Divider from "@mui/material/Divider";
import MultiCheckboxForm from "components/MultiCheckboxForm";
import Box from "@mui/material/Box";

const GridButton = styled<any>((props: any) => <Button {...props} />)(
  ({ theme }) => ({
    flex: "40% 1 0",
  })
);

const CollapseContainer = styled("div")(
  ({ theme }) => `
      display: flex;
      flex-wrap: wrap;
      padding: 1.2em;
      gap: 10px;
      border-bottom: solid 1px ${theme.palette.divider};
    `
);

const ListingFilters: React.FC = () => {
  return (
    <>
      <CollapseContent title="Status">
        <CollapseContainer>
          <GridButton size="small" variant="contained">
            buy now
          </GridButton>
          <GridButton size="small" variant="contained">
            on auction
          </GridButton>
          <GridButton size="small" variant="contained">
            new
          </GridButton>
          <GridButton size="small" variant="contained">
            has offers
          </GridButton>
        </CollapseContainer>
      </CollapseContent>

      <CollapseContent title="Price">
        <PriceForm />
        <Divider />
      </CollapseContent>

      <CollapseContent title="Properties">
        <MultiCheckboxForm
          inputs={[
            <Box display="flex" justifyContent="space-between">
              <div>Fur</div>
              <div>17</div>
            </Box>,
            "Crown",
            "Armor",
            "Boots",
          ]}
        />
        <Divider />
      </CollapseContent>
    </>
  );
};

export default ListingFilters;
