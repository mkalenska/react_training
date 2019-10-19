import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Nick"
          content="Totally agree"
          timestamp="Today at 4:45pm"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author="John"
        content="The best I've ever seen"
        timestamp="Today at 2:00pm"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Kate"
        content="Not bad blog"
        timestamp="Yesterday at 1:00am"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
