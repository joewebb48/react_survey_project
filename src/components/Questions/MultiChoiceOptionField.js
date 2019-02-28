import React from 'react';

export default function MultiChoiceOptionField(props) {
  // console.log('optionField', props);
  const { content } = props;
  return (
    <div style={{ width: '40%', paddingLeft: '40%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <input
          type='radio'
          className=''
          value={content}
          // onChange={onChange}
          placeholder='Question Title Change'
        />
        {content}
      </div>
    </div>
  );
}
