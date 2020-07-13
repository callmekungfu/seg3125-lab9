import React from 'react';
import { Comment, Avatar, Typography, Input, Button } from 'antd';

const { TextArea } = Input;

const ChatComponent = () => {
  return (
    <div className="chat-container">
      <Typography.Title level={2}>Live Support</Typography.Title>
      <div className="chat-comments">
        <Comment
          author={'Jacob Owens (Rental Staff)'}
          avatar={
            <Avatar
              src="https://source.unsplash.com/DQPP9rVLYGQ/200x200"
              alt="Jacob"
            />
          }
          content={<p>Hello Emma, how can I be of assistance today?</p>}
        ></Comment>
        <Comment
          author={'Emma Liang (You)'}
          avatar={
            <Avatar
              src="https://source.unsplash.com/AGy0SxTzqr8/200x200"
              alt="Emma"
            />
          }
          content={
            <p>
              Hi Jacob! Just wondering if the Canon 5D mark iii is available
              this weekend?
            </p>
          }
        ></Comment>
      </div>
      <div className="chat-response">
        <Comment
          avatar={
            <Avatar
              src="https://source.unsplash.com/AGy0SxTzqr8/200x200"
              alt="Emma"
            />
          }
          content={
            <div>
              <TextArea
                className="mb-15"
                placeholder="Say something nice..."
                autoSize={{ minRows: 2, maxRows: 4 }}
              />

              <Button loading={false} type="primary">
                Send
              </Button>
            </div>
          }
        ></Comment>
      </div>
    </div>
  );
};

export default ChatComponent;
