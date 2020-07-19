import { ChatMessage, ChatUser } from '../types/Chat';

export const JacobUser: ChatUser = {
  name: 'Jacob Owens',
  picture_url: 'https://source.unsplash.com/DQPP9rVLYGQ/200x200',
  role_title: 'Rental Staff',
};

export const EmmaUser: ChatUser = {
  name: 'Emma Liang',
  picture_url: 'https://source.unsplash.com/AGy0SxTzqr8/200x200',
  role_title: 'You',
};

export const ChatData: ChatMessage[] = [
  {
    content: 'Hello Emma, how can I be of assistance today?',
    origin_user: JacobUser,
  },
  {
    content:
      'Hello! Just wondering if the Canon 5D Mark III is available this weekend?',
    origin_user: EmmaUser,
  },
  {
    content: 'Yes it is Emma!',
    origin_user: JacobUser,
  },
];
