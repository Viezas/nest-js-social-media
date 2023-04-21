export interface CommentInterface {
  id: number;
  user_id: number;
  post_id: number;
  body: string;
  created_at: Date;
  updated_at: Date;
}
