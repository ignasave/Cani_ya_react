import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { RoutesConfig } from '../RouteSetup';

const MakeList = () => {
  return RoutesConfig.map((item) => (
    <ListItem button key={ item.route }>
      <ListItemIcon>{ item.icon }</ListItemIcon>
      <ListItemText primary={ item.name } />
    </ListItem>
  ))
}

export default function SideList() {
    return(
    <div>
      <List>
          { MakeList() }
      </List>
      <Divider/>
    </div>
  );}