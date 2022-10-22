import React from "react";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
function UserAvatar(props) {
  const { width, height } = props;
  const profile = useSelector((state) => state.authentication.profile);

  return (
    <div className="p-2">
      <div className="w-full flex justify-center mb-5">
        <Avatar
          alt="Remy Sharp"
          sx={{ height: height, width: width }}
          src={profile.image_url}
        />
      </div>
      <p className="text-center">{profile.name}</p>
    </div>
  );
}

export default UserAvatar;
