import React from 'react';

type Props = {
  name: string,
  email: string,
  body: string,
};

const CommentInfo: React.FC<Props> = ({
  name,
  email,
  body,
}) => (
  <>
    <div className="post__commentator">
      <div className="post__commentator-name">
        {`Username: ${name}`}
      </div>

      <div className="post__commentator-email">
        {`Email: ${email}`}
      </div>
    </div>

    <div className="post__commentator-content">
      {body}
    </div>
  </>
);

export default CommentInfo;