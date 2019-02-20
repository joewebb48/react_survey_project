import React from 'react';
import CheckBox from '../components/Questions/Qs/CheckBox';
import Dropdown from '../components/Questions/Qs/Dropdown';
import MultiLineText from '../components/Questions/Qs/MultiLineText';
import MultipleChoice from '../components/Questions/Qs/MultipleChoice';
import SingleLineText from '../components/Questions/Qs/SingleLineText';

import { storiesOf } from '@storybook/react';
import { Formik } from 'formik';

storiesOf('Checkbox', module).add('default', () => {
  return (
    <Formik>
      <MultipleChoice
        _id='abc'
        title='a multi choice question'
        options={[
          {
            _id: 'option1',
            content: 'option 1'
          },
          {
            _id: 'option2',
            content: 'option 2'
          },
          {
            _id: 'option3',
            content: 'option 3'
          }
        ]}
      />
    </Formik>
  );
});

storiesOf('Dropdown', module).add('default', () => {
  return (
    <Formik>
      <Dropdown
        _id='abc'
        title='a multi choice question'
        options={[
          {
            _id: 'option1',
            content: 'option 1'
          },
          {
            _id: 'option2',
            content: 'option 2'
          },
          {
            _id: 'option3',
            content: 'option 3'
          }
        ]}
      />
    </Formik>
  );
});

storiesOf('Multi Choice', module).add('default', () => {
  return (
    <Formik>
      <MultipleChoice
        _id='abc'
        title='a multi choice question'
        options={[
          {
            _id: 'option1',
            content: 'option 1'
          },
          {
            _id: 'option2',
            content: 'option 2'
          },
          {
            _id: 'option3',
            content: 'option 3'
          }
        ]}
      />
    </Formik>
  );
});

storiesOf('SingleLineText', module).add('default', () => {
  return (
    <Formik>
      <SingleLineText _id='abc' title='text line' placeholder='blabla' />
    </Formik>
  );
});

storiesOf('MultiLineText', module).add('default', () => {
  return (
    <Formik>
      <MultiLineText _id='abc' title='text line' placeholder='blabla' />
    </Formik>
  );
});
