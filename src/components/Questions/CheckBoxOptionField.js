import React from 'react';

export default function CheckBoxOptionField(props) {
  // console.log('optionField', props);
  const { content } = props;
  return (
    <div>
      <input
        type='checkbox'
        className=''
        value={content}
        // onChange={onChange}
        placeholder='Question Title Change'
      />
      {content}
    </div>
  );
}
