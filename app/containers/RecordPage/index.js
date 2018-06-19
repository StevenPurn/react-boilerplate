import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H1 from 'components/H1';
import { createStructuredSelector } from 'reselect';

import { makeSelectError, makeSelectLoading, makeSelectRecords } from './selectors';
import { loadRecords } from './actions';
import reducer from './reducer';
import RecordList from '../../components/RecordList';
import Button from './Button';
import saga from './saga';

class RecordPage extends React.Component {

  componentDidMount() {
    this.props.onButtonClick();
  }

  render() {
    const { loading, error, records } = this.props;
    const recordListProps = {
      loading,
      error,
      records,
    };
    return (
      <article>
        <Helmet>
          <title>Records</title>
          <meta name="description" content="All of the current records in the database" />
        </Helmet>
        <H1>
          Records
        </H1>
        <Button onClick={this.props.onButtonClick}>Refresh Records</Button>
        <RecordList {...recordListProps} />
      </article>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRecords());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  records: makeSelectRecords(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'recordpage', reducer });
const withSaga = injectSaga({ key: 'recordpage', saga });

RecordPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  records: PropTypes.any,
  onButtonClick: PropTypes.func,
};

export default compose(
 withReducer,
 withSaga,
 withConnect,
)(RecordPage);
