import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import { getSection, createSection } from '../../Actions';

import TodoSection from './TodoSection';

const styles = theme => ({
  textField: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  }
})

const Todos = ({ classes, sections, onAddSection }) => (
  <div>
    <TodoSection sections={sections} />
    <div>
      <TextField
        required
        id="section-name"
        label="Section Name"
        margin="normal"
        className={classes.textField}
      />
      <Button
        raised
        onClick={() => onAddSection("something") }>
        Add Section
      </Button>
    </div>
  </div>
);

class RequestLayer extends Component {
  componentDidMount() {
    this.props.getSection();
  }

  render() {
    return (
      <Todos {...this.props} />
    );
  }
}


const mapStateToProps = (state) => ({
  sections: state.todo.sections
});

const mapDispatchToProps = (dispatch) => ({
  onAddSection(name) {
    dispatch(createSection(name))
  },

  getSection() {
    dispatch(getSection());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RequestLayer));
