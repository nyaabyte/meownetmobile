// constants/Badges.ts
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Or your preferred icon set

export interface BadgeInfo {
  id: string; // Unique identifier
  name: string; // Display name
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name']; // Icon name
  color?: string; // Optional color for the badge/icon
}

// Define all available badges your app will have
export const AVAILABLE_BADGES: BadgeInfo[] = [
  { id: 'dev', name: 'Developer', icon: 'code-braces', color: '#61DAFB' },
  {
    id: 'tester',
    name: 'Beta Tester',
    icon: 'flask-outline',
    color: '#9CCC65',
  },
  {
    id: 'early',
    name: 'Early User',
    icon: 'star-circle-outline',
    color: '#FFCA28',
  },
  {
    id: 'mod',
    name: 'Moderator',
    icon: 'shield-crown-outline',
    color: '#BA68C8',
  },
  { id: 'artist', name: 'Artist', icon: 'palette-outline', color: '#F06292' },
  {
    id: 'contributor',
    name: 'Contributor',
    icon: 'source-commit',
    color: '#B0BEC5',
  },
];
