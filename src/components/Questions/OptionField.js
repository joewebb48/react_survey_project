import React from 'react';

export default function OptionField() {
  return (
    <div>
      <input
        type='checkbox'
        className=''
        value={`content`}
        // onChange={onChange}
        placeholder='Question Title Change'
      />
      {`option content`}
      <div>{/* <button>
          <span />
        </button> */}</div>
    </div>
  );
}
