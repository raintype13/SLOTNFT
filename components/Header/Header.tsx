import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import UserDescription from "components/UserDescription";
import Search from "components/Search";
import { useLazyGetTwitterOAuthTokenQuery } from "services/auth";

const HeaderContainer = styled("div")(({ theme }) => {
  return {
    background: "#fff",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
});

const NavContainer = styled("div")(({ theme }) => ({
  margin: `0 ${theme.spacing(2)}`,
}));

const RightContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const StraightEdgePaper = styled(Paper)({
  borderRadius: 0,
});

const RectangleIconButton = styled(IconButton)({
  borderRadius: 0,
});

const MenuLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
  marginLeft: theme.spacing(2),
  fontSize: "1rem",
  ":first-of-type": {
    marginLeft: "initial",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [getAPIOAuthToken, apiOAuthToken] = useLazyGetTwitterOAuthTokenQuery();

  useEffect(() => {
    if (apiOAuthToken.data) {
      location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${apiOAuthToken.data.oauth_token}`;
    }
  }, [apiOAuthToken]);

  const open = Boolean(anchorEl);
  const handleConnectTwitter = () => {
    const getToken = getAPIOAuthToken(undefined);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StraightEdgePaper elevation={4}>
      <Container maxWidth="xl">
        <HeaderContainer>
          <div>
            <Typography variant="h5">$NiftyBits</Typography>
          </div>
          <RightContainer>
            <div>
              <Search />
            </div>
            <NavContainer>
              <MenuLink variant="h6" href="#">
                Browse
              </MenuLink>
              <MenuLink variant="h6" href="#">
                Help
              </MenuLink>
            </NavContainer>
            <div>
              <Button onClick={handleConnectTwitter}>
                Connect
                <TwitterIcon
                  sx={{
                    marginLeft: (theme) => theme.spacing(0.5),
                  }}
                />
              </Button>
              {/* <RectangleIconButton
                size="small"
                onClick={handleClick}
                sx={{
                  padding: 0,
                }}
              >
                <UserDescription
                  balance={5}
                  user={{ username: "Ivan", imageURL: "apegang5929.png" }}
                />
              </RectangleIconButton> */}
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </RightContainer>
        </HeaderContainer>
      </Container>
    </StraightEdgePaper>
  );
};

export default Header;
