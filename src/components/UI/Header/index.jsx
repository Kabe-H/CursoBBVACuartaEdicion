import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 95%)",
        }}
      >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <AccountBalanceIcon />
          </IconButton>
          <Typography variant="h6" component="h6">
            Curso BBVA
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
