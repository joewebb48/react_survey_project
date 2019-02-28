import React from 'react';
import withStyles from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function CheckBoxOptionField(props) {
  // console.log('optionField', props);
  const { content } = props;
  return (
    <div style={{ width: '40%', paddingLeft: '40%' }}>
      <FormGroup column>
        <FormControlLabel
          control={<Checkbox value={content} color='primary' />}
          label={content}
        />
      </FormGroup>
    </div>
  );
}
{
  /* <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <input
          type='checkbox'
          className=''
          value={content}
          // onChange={onChange}
          placeholder='Question Title Change'
        />
        {content}
      </div> */
}
