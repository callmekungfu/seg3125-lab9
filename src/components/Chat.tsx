import React from 'react';
import { Comment, Avatar, Typography, Input, Button } from 'antd';
import { ChatData } from '../data/chat';

const { TextArea } = Input;

const ChatComponent = () => {
  return (
    <div className="chat-container">
      <Typography.Title level={2}>Live Support</Typography.Title>
      <div className="chat-comments">
        {ChatData.map((chat) => (
          <Comment
            author={`${chat.origin_user.name} (${chat.origin_user.role_title})`}
            avatar={<Avatar src={chat.origin_user.picture_url} alt="" />}
            content={<p>{chat.content}</p>}
          ></Comment>
        ))}
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
