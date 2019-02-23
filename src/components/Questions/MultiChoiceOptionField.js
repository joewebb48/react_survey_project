import React from 'react';

export default function MultiChoiceOptionField(props) {
  // console.log('optionField', props);
  const { content } = props;
  return (
    <div>
      <input
        type='radio'
        className=''
        value={content}
        // onChange={onChange}
        placeholder='Question Title Change'
      />
      {content}
    </div>
  );
}
