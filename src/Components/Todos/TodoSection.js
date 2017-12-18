import React from 'react';
import _ from 'lodash';

const TodoSection = ({ sections }) => (
  <ul>
    {
      _.map(sections, (section) => <li key={section.id}>{section.name}</li>)
    }
  </ul>
)

export default TodoSection;
