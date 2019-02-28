import React from 'react';
import withStyles from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

export default function MultiChoiceOptionField(props) {
  // console.log('optionField', props);
  const { content, onChange } = props;
  return (
    <div style={styles.root}>
      <FormControl component='fieldset' styles={styles.formControl}>
        {/* <FormLabel component='legend'>{content}</FormLabel> */}
        <RadioGroup
          style={styles.group}
          aria-label={content}
          name={content}
          // className={classes.group}
          // value={this.state.value}
          onChange={onChange}
        >
          <FormControlLabel
            // value={content}
            control={<Radio color='primary' />}
            label={content}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
// style={{ width: '40%', paddingLeft: '40%' }}
// style={{
//   display: 'flex',
//   justifyContent: 'flex-start',
//   alignItems: 'center'
// }}
{
  /* <input
type='radio'
className=''
value={content}
// onChange={onChange}
placeholder='Question Title Change'
/>
{content} */
}
