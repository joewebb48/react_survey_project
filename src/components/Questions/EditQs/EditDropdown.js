import React, { Component } from 'react';
// import Formik from 'Formik';
import Dropdown from '../Qs/Dropdown';

export default class EditDropdown extends Component {
  render() {
    return (
      <div>
        <form>
          <Dropdown
            question_id='abc'
            question_title='a multi choice question'
            options={[
              {
                content: 'option 1',
                options_id: 'option1'
              },
              {
                content: 'option 2',
                options_id: 'option2'
              },
              {
                content: 'option 3',
                options_id: 'option3'
              }
            ]}
          />
        </form>
      </div>
    );
  }
}
