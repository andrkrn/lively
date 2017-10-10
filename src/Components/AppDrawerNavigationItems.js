import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AccountBoxIcon from 'material-ui-icons/AccountBox';
import FingerprintIcon from 'material-ui-icons/Fingerprint';

const AppDrawerNavigationItems = ({ history }) => (
  <List>
    <ListItem button onClick={() => history.push('/attendance') }>
      <ListItemIcon>
        <FingerprintIcon />
      </ListItemIcon>
      <ListItemText primary="Attendance" />
    </ListItem>
    <ListItem button onClick={() => history.push('/users') }>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button onClick={() => history.push('/todos') }>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Todos" />
    </ListItem>
  </List>
);

export default withRouter(AppDrawerNavigationItems);
