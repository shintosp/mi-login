import React from "react";
import UserPageLayout from "./userPageLayout";
const UserPage = props => {
  return <UserPageLayout user={props.user} />;
};

export default UserPage;
