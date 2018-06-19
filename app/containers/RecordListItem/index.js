import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export default class RepoListItem extends React.PureComponent {
  render() {
    const text = this.props.text;
    const content = (
      <Wrapper>
        <div>{text}</div>
      </Wrapper>
    );

    return (
      <ListItem item={content} />
    );
  }
}

RepoListItem.propTypes = {
  text: PropTypes.string,
};
