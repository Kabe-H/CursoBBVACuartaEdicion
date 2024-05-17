import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

export default function ReactArrayKeys(props) {

  return (
    <>
      {props.data.map((dato) => (
        <List key={dato.id}>
          <ListItem >
            <ListItemText primary={dato.name}/>
          </ListItem>
        </List>
      ))}
    </>
  );
}
