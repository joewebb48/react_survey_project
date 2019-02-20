import React, { Component } from 'react';
// import Formik from 'Formik';
import Dropdown from '../Qs/Dropdown';

export default class EditDropdown extends Component {
  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}
