// types/index.ts

export interface User {
  id: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  badges?: string[];
}

export interface Post {
  id: string;
  user: User;
  title: string;
  data: string;
  date: number;
  parent?: string;
  replies: string[]; // List of reply IDs
  up: string[];
  down: string[];
  score: number;
  note?: string;
  tags: string[];
}

// --- ADD REPLY TYPE ---
export interface Reply {
  id: string;
  user: User;
  data: string;
  date: number;
  postId: string; // ID of the post this reply belongs to
  // Add score etc. later if needed
}
// --- END REPLY TYPE ---
