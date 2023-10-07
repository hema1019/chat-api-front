import React from "react";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";
import Groups2Icon from "@mui/icons-material/Groups2";

function UserMenu({ onCreateConversation, onCreateGroup }) {
  const { avatar } = JSON.parse(localStorage.getItem("user"));

  return (
    <Box sx={{ width: "100%", padding: "5px 10px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Avatar src={avatar} />
        <Stack direction="row" gap="15px">
          <IconButton color="primary" onClick={onCreateConversation}>
            <SmsIcon />
          </IconButton>
          <IconButton color="primary" onClick={onCreateGroup}>
            <Groups2Icon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default UserMenu;
