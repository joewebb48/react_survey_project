import React from 'react';
import SingleLineText from './Qs/SingleLineText';
import Checkbox from './Qs/CheckBox';
import MultiLineText from './Qs/MultiLineText';
import Dropdown from './Qs/Dropdown';
import MultipleChoice from './Qs/MultipleChoice';
import EditDrowpdown from './EditQs/EditDropdown';

export default function QuestionListContainer(props) {
  // console.log('p', props);
  const { q_title, q_type, questions } = props;
  const { selectedQuestion } = props;

  const questionType = (type, question, i) => {
    switch (type) {
      case 2:
        return (
          <SingleLineText
            type={type}
            selectedQuestion={selectedQuestion}
            question={question}
            key={i}
          />
        );

      case 3:
        return (
          <MultiLineText
            type={type}
            selectedQuestion={selectedQuestion}
            question={question}
            key={i}
          />
        );

      case 4:
        return (
          <MultipleChoice
            type={type}
            selectedQuestion={selectedQuestion}
            options={question.options}
            question={question}
            key={i}
          />
        );

      case 5:
        return (
          <Checkbox
            type={type}
            selectedQuestion={selectedQuestion}
            options={question.options}
            question={question}
            key={i}
          />
        );

      case 1:
        return (
          <Dropdown
            type={type}
            selectedQuestion={selectedQuestion}
            options={question.options}
            question={question}
            key={i}
          />
        );

      default:
        break;
    }
  };

  const mappedQuestions = questions.map((question, i) => {
    return questionType(question.type_id, question, i);
  });
  return <div>{mappedQuestions}</div>;
}
