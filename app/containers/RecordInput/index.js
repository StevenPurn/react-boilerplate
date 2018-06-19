import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { changeInput, submitInput } from './actions';
import { makeSelectInput, makeSelectSentRequest, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

import Input from './Input';
import Form from './Form';

export class RecordInput extends React.PureComponent {
  componentDidMount() {
    if (this.props.input && this.props.input.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { input, error, sentRequest } = this.props;
    const statusText = sentRequest ? <div>Record Saved</div> : <div>Enter your Text</div>;
    const err = error.text ? <div>There was an error, please try again</div> : null;
    return (
      <article>
        <Helmet>
          <title>Submit a Record</title>
          <meta name="description" content="Submit a record" />
        </Helmet>
        {statusText}
        {err}
        <Form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="record">
            <Input
              id="record"
              type="text"
              placeholder="fill me in"
              value={input}
              onChange={this.props.onChangeInput}
            />
          </label>
        </Form>
      </article>
    );
  }
}

RecordInput.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  input: PropTypes.string,
  sentRequest: PropTypes.bool,
  onChangeInput: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: (evt) => {
      dispatch(changeInput(evt.target.value));
    },
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitInput());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  input: makeSelectInput(),
  sentRequest: makeSelectSentRequest(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'recordinput', reducer });
const withSaga = injectSaga({ key: 'recordinput', saga });

export default compose(
 withReducer,
 withSaga,
 withConnect,
)(RecordInput);
