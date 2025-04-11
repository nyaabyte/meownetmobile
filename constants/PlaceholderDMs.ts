export interface Message {
  id: string;
  text: string;
  sender: 'me' | 'other';
  timestamp: string;
}

export interface Conversation {
  id: string;
  otherUserName: string;
  lastMessage: string;
  timestamp: string;
  avatarUrl?: string;
}

export const DMS_CONVERSATIONS: Conversation[] = [
  {
    id: 'chat001',
    otherUserName: 'Lycanea',
    lastMessage: 'Haiii :3',
    timestamp: '10:30',
    avatarUrl: 'https://lycanea.dev/avatar.png',
  },
  {
    id: 'chat002',
    otherUserName: 'Altie',
    lastMessage: 'some other example message... I got lazy.',
    timestamp: '13:34',
    avatarUrl: 'https://cdn.nyabyte.dev/Altie.png',
  },
  {
    id: 'chat003',
    otherUserName: 'Zastix',
    lastMessage: ':3',
    timestamp: 'Mon',
    avatarUrl: 'https://zastix.club/pfp.png',
  },
  {
    id: 'chat004',
    otherUserName: 'geodebreaker',
    lastMessage: 'goop',
    timestamp: 'Tue',
    avatarUrl: 'https://cdn.nyabyte.dev/gb.png',
  },
];

export const CHAT_MESSAGES: { [key: string]: Message[] } = {
  chat001: [
    {
      id: 'm1-1',
      text: 'Hai :3',
      sender: 'other',
      timestamp: '10:30',
    },
    {
      id: 'm1-2',
      text: 'Haiiii :3',
      sender: 'me',
      timestamp: '10:31',
    },
    { id: 'm1-3', text: ':3', sender: 'other', timestamp: '10:32' },
  ],
  chat002: [
    {
      id: 'm2-1',
      text: 'Hiii',
      sender: 'other',
      timestamp: '13:34',
    },
    {
      id: 'm2-2',
      text: 'Hiii',
      sender: 'me',
      timestamp: '13:35',
    },
    {
      id: 'm2-3',
      text: 'some other example message... I got lazy.',
      sender: 'other',
      timestamp: '13:36',
    },
  ],
  chat003: [
    {
      id: 'm3-1',
      text: 'Example1',
      sender: 'other',
      timestamp: 'Mon',
    },
    {
      id: 'm3-2',
      text: 'Example2',
      sender: 'me',
      timestamp: 'Mon',
    },
    {
      id: 'm3-3',
      text: ':3',
      sender: 'other',
      timestamp: 'Mon',
    },
  ],
  chat004: [
    {
      id: 'm3-1',
      text: 'Woah',
      sender: 'other',
      timestamp: 'Mon',
    },
    {
      id: 'm3-2',
      text: 'Woah',
      sender: 'me',
      timestamp: 'Mon',
    },
    {
      id: 'm3-3',
      text: ':3',
      sender: 'other',
      timestamp: 'Mon',
    },
  ],
};
