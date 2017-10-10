import React from 'react';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import AppDrawerNavigationItems from './AppDrawerNavigationItems';

const styles = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper
  },
  toolbarContainer: {
    display: 'flex'
  },
  toolbar: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
});

const AppDrawer = (props) => {
  const { className, classes } = props;

  return (
    <div className={className}>
      <Drawer
        type="permanent"
        classes={{
          paper: classes.paper
        }}
        open={true}>
        <div className={classes.toolbarContainer}>
          <Toolbar
            className={classes.toolbar}>
            <Typography type="title" gutterBottom color="inherit">
              Blow
            </Typography>
            <Divider absolute />
          </Toolbar>
        </div>
        <AppDrawerNavigationItems />
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(AppDrawer);
