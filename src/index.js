import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Great post 👍🏾"
          image={faker.image.animals()}
        />
      </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2:00AM"
        content="Wow! This was a fantastic read! Thank you"
        image={faker.image.animals()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 5:00PM"
        content="Great read!"
        image={faker.image.animals()}
      />
    </ApprovalCard>

    </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))
