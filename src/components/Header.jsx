import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Front
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
