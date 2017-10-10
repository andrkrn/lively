import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 250px)',
    },
  }
});

class AppHeader extends React.Component {
  render() {
    const { title, classes } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography type="title" color="inherit" noWrap>
            { title != null && title }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppHeader);
