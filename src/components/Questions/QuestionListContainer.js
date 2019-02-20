import React from 'react';
import SingleLineText from './Qs/SingleLineText';
import Checkbox from './Qs/CheckBox';
import MultiLineText from './Qs/MultiLineText';
import Dropdown from './Qs/Dropdown';
import MultipleChoice from './Qs/MultipleChoice';
import EditDrowpdown from './EditQs/EditDropdown';

export default function QuestionListContainer(props) {
  // console.log('p', props);
  const { q_title, q_type, selectedQuestion, questions } = props;
  return (
    <div>
      <p>
        in here `(QuestionListCOntainer)` i need to render the question type
        componet depending on which type is selected based oin an ID... all the
        info from props needs to be passwed to the particular component. ... i
        need to bring in all 5 question type componnets.
      </p>
      <h3>
        thoughts---I am thinking i need to swith these components to the the
        Edit?? JK.. that is probably what the disabled feature is... and leave
        the input boxes in the the other compoennts without the dasbled
      </h3>
      {/* <h1>{q_title}</h1>
      <h6>{q_type}</h6>
      <h6>{selectedQuestion}</h6>
      <h3>{questions}</h3> */}
      <SingleLineText />
      <br />
      <Checkbox />
      <br />
      <MultiLineText />
      <br />
      <Dropdown />
      <br />
      <MultipleChoice />
      <br />
      <EditDrowpdown />
    </div>
  );
}
