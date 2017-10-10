import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';

export function getTheme() {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: pink,
      type: 'light',
    },
  });

  return theme;
}
