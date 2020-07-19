export interface ChatMessage {
  content: string;
  origin_user: ChatUser;
}

export interface ChatUser {
  picture_url: string;
  name: string;
  role_title?: string;
}
