import React from "react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

interface User {
  imageURL?: string;
  username?: string;
}

interface UserDescriptionProps {
  balance?: number;
  user?: User;
}

const UserDescriptionContainer = styled("div")({
  display: "flex",
});

const RightContainer = styled("div")(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const UserDescription: React.FC<UserDescriptionProps> = ({
  balance = 0,
  user,
}) => {
  return (
    <UserDescriptionContainer>
      <div>
        <Avatar alt={user?.username} src={user?.imageURL} />
      </div>
      {user && (
        <RightContainer>
          <div>{user?.username}</div>
          <div>{balance} µB</div>
        </RightContainer>
      )}
    </UserDescriptionContainer>
  );
};

export default UserDescription;
