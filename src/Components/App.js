import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';

import { getTheme } from '../Styles/getTheme';

import AppDrawer from './AppDrawer';
import AppHeader from './AppHeader';
import Users from './Users';
import Attendance from './Attendance';
import Todos from './Todos/Todos';

const styles = theme => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
    }
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 250,
    },
  },
  root: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    paddingTop: '80px',
    margin: '0 auto'
  },
  gutters: theme.mixins.gutters({})
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={getTheme()}>
        <div className={classes.root}>
          <AppHeader
            title={"Application Header"} />
          <AppDrawer
            className={classes.drawer}
          />
          <div className={classNames(classes.content, classes.gutters)}>
            <Route exact path="/users" component={Users} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/todos" component={Todos} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
