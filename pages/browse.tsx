import { ReactElement, useEffect, useState } from "react";
import ListingFilters from "components/ListingFilters";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Layout from "components/Layout";

import type { NextPageWithLayout } from "./random2398";
import ListingGrid from "components/ListingGrid";
import { useLazyGetListingsQuery } from "services/listings";

const AsideSidebar = styled("aside")(
  ({ theme }) => `
  margin-top: 40px;
  width: 300px;
  border: solid 1px ${theme.palette.divider};
  border-bottom: none;
`
);

const StyledMain = styled("main")`
  flex: 1 1;
  padding: 1em;
`;

const Browse: NextPageWithLayout = () => {
  const [expanded, setExpanded] = useState(false);
  const [fetchedListings, setFetchedListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [getListingsData, listingsData, loading] = useLazyGetListingsQuery();

  useEffect(() => {
    if (listingsData?.data?.page > currentPage) {
      setCurrentPage(listingsData?.data?.page);
      setFetchedListings((state: any) => {
        return [...state, ...listingsData?.data?.data];
      });
    }
  }, [listingsData.data, currentPage]);

  useEffect(() => {
    getListingsData(currentPage + 1);
  }, []);

  console.log("listingsData", listingsData);

  const fetchMore = async () => {
    const listingsResult = await getListingsData(currentPage + 1);
  };

  return (
    <Box display="flex" alignItems="flex-start">
      <AsideSidebar>
        <section>
          <ListingFilters />
        </section>
      </AsideSidebar>

      <StyledMain>
        <ListingGrid listings={fetchedListings} />
        <Button
          fullWidth
          variant="contained"
          sx={{ marginTop: "1em" }}
          onClick={fetchMore}
          disabled={listingsData?.isLoading}
        >
          Load more
        </Button>
      </StyledMain>
    </Box>
  );
};

Browse.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Browse;
