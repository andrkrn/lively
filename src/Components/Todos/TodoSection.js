import React from 'react';
import _ from 'lodash';

const TodoSection = ({ sections }) => (
  <ul>
    {
      _.map(sections, (section) => <li>{section}</li>)
    }
  </ul>
)

export default TodoSection;
