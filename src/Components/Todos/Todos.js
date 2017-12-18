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

const Todos = ({ sectionName, updateInputValue, handleSubmit, classes, sections, onAddSection }) => (
  <div>
    <div>
      <TextField
        required
        id="section-name"
        label="Section Name"
        margin="normal"
        className={classes.textField}
        value={sectionName}
        onChange={e => updateInputValue(e)}
      />
      <Button
        raised
        onClick={() => handleSubmit() }>
        Add Section
      </Button>
    </div>
    <TodoSection sections={sections} />
  </div>
);

class RequestLayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionName: ""
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getSection();
  }

  updateInputValue(e) {
    this.setState({
      sectionName: e.target.value
    });
  }

  handleSubmit() {
    this.props.onAddSection(this.state.sectionName);
  }

  render() {
    return (
      <Todos
        sectionName={this.state.sectionName}
        handleSubmit={this.handleSubmit}
        updateInputValue={this.updateInputValue}
        {...this.props} />
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
