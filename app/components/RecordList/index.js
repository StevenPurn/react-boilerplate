import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RecordListItem from 'containers/RecordListItem';

function RecordList({ loading, error, records }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (records !== false && records.length > 0) {
    return <List items={records} component={RecordListItem} />;
  } else if (records.length === 0) {
    return <div>Nothing in the database yet!</div>;
  }

  return null;
}

RecordList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  records: PropTypes.any,
};

export default RecordList;
