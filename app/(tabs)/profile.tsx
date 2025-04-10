// app/(tabs)/profile.tsx

import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable, // Use Pressable for better button styling and feedback
  ScrollView, // Use ScrollView for potentially long bios or many badges
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/ProfileScreen.styles'; // Adjust path if necessary
import { User } from '../../types'; // Import User type
import Colors from '../../constants/Colors'; // Import color constants
// --- Import Badges ---
import { AVAILABLE_BADGES, BadgeInfo } from '../../constants/Badges'; // Adjust path if necessary
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For badge icons
// --- End Import Badges ---

// --- Example Profile Data (Replace with fetched data later) ---
// This represents the user data you might fetch from your backend
const initialUserProfile: User = {
  id: 'user001',
  username: 'Wurdle',
  avatarUrl: 'https://cdn.nyabyte.dev/wurdleturtle.png', // Use the main logo as placeholder
  bio: 'Some description.',
  badges: ['dev', 'early', 'mod', 'artist', 'contributer', 'tester'], // Example initial badges (IDs from AVAILABLE_BADGES)
};
// --- End Example Data ---

// Helper function to find badge information based on its ID
const getBadgeInfo = (id: string): BadgeInfo | undefined => {
  return AVAILABLE_BADGES.find((badge) => badge.id === id);
};

export default function ProfileScreen() {
  const themeColors = Colors.dark; // Use dark theme colors

  // State to track if the user is currently editing their profile
  const [isEditing, setIsEditing] = useState(false);

  // State to hold the currently displayed/saved profile information
  const [profile, setProfile] = useState<User>(initialUserProfile);

  // Temporary state variables to hold changes during editing
  // This allows the user to cancel edits without affecting the main 'profile' state
  const [tempUsername, setTempUsername] = useState(profile.username);
  const [tempBio, setTempBio] = useState(profile.bio || '');
  const [tempBadges, setTempBadges] = useState<string[]>(profile.badges || []);

  // Function to enter edit mode
  const handleEdit = () => {
    // Initialize temporary fields with current profile values
    setTempUsername(profile.username);
    setTempBio(profile.bio || '');
    setTempBadges(profile.badges || []);
    setIsEditing(true); // Set editing mode to true
  };

  // Function to save the changes made during editing
  const handleSave = () => {
    // Update the main 'profile' state with the temporary values
    setProfile({
      ...profile, // Keep existing fields like id, avatarUrl
      username: tempUsername,
      bio: tempBio,
      badges: tempBadges, // Update badges
    });
    setIsEditing(false); // Exit editing mode
  };

  // Function to cancel editing and discard temporary changes
  const handleCancel = () => {
    // Simply exit editing mode; temporary states are automatically discarded on next edit
    setIsEditing(false);
  };

  // Function to handle selecting or deselecting a badge in edit mode
  const handleToggleBadge = (badgeId: string) => {
    setTempBadges((currentBadges) => {
      // Check if the badge is already selected
      if (currentBadges.includes(badgeId)) {
        // If selected, remove it from the array
        return currentBadges.filter((id) => id !== badgeId);
      } else {
        // If not selected, add it to the array
        return [...currentBadges, badgeId];
      }
    });
  };

  // Helper function to render the user's currently assigned badges in display mode
  const renderDisplayedBadges = () => {
    // Don't render anything if the user has no badges
    if (!profile.badges || profile.badges.length === 0) {
      return null;
    }
    return (
      <View style={styles.badgesContainer}>
        {/* Map through the user's badge IDs */}
        {profile.badges.map((badgeId) => {
          // Find the full badge information using the ID
          const badgeInfo = getBadgeInfo(badgeId);
          // Skip if badge info isn't found (data mismatch safeguard)
          if (!badgeInfo) return null;
          // Render each badge item
          return (
            <View key={badgeId} style={styles.badgeItem}>
              <MaterialCommunityIcons
                name={badgeInfo.icon}
                size={16} // Size for displayed badge icon
                color={badgeInfo.color || themeColors.subtleText} // Use badge color or fallback
                style={styles.badgeIcon}
              />
              <Text style={styles.badgeText}>{badgeInfo.name}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  // Main component render
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Avatar Section */}
          <View style={styles.avatarContainer}>
            {profile.avatarUrl ? (
              <Image
                source={{ uri: profile.avatarUrl }}
                style={styles.avatar}
              />
            ) : (
              // Placeholder if no avatar URL
              <View style={[styles.avatar, styles.avatarPlaceholder]} />
            )}
          </View>

          {/* Conditional Rendering: Display Mode vs Edit Mode */}
          {!isEditing ? (
            // --- Display Mode ---
            <>
              <Text style={styles.username}>{profile.username}</Text>
              {renderDisplayedBadges()} {/* Render the displayed badges */}
              <Text style={styles.bio}>{profile.bio || 'No bio yet.'}</Text>
              {/* Edit Button */}
              <Pressable style={styles.button} onPress={handleEdit}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </Pressable>
            </>
          ) : (
            // --- Edit Mode ---
            <>
              {/* Username Input */}
              <TextInput
                style={styles.input}
                value={tempUsername}
                onChangeText={setTempUsername}
                placeholder="Username"
                placeholderTextColor={themeColors.subtleText}
                maxLength={30} // Example length limit
              />
              {/* Bio Input */}
              <TextInput
                style={[styles.input, styles.bioInput]} // Apply base and specific styles
                value={tempBio}
                onChangeText={setTempBio}
                placeholder="Tell us about yourself..."
                placeholderTextColor={themeColors.subtleText}
                multiline={true} // Enable multiline input
                numberOfLines={4} // Suggest initial height (Android only)
                maxLength={150} // Example length limit
              />

              {/* --- Badge Selection Section --- */}
              <Text style={styles.editSectionHeader}>Select Badges</Text>
              <View style={styles.badgeSelectionContainer}>
                {/* Map through all available badges */}
                {AVAILABLE_BADGES.map((badge) => {
                  // Check if the current badge is selected in the temporary state
                  const isSelected = tempBadges.includes(badge.id);
                  return (
                    // Use Pressable for each badge to handle taps
                    <Pressable
                      key={badge.id}
                      // Apply base style and conditional selected style
                      style={[
                        styles.badgeSelectItem,
                        isSelected && styles.badgeSelectItem_selected,
                      ]}
                      onPress={() => handleToggleBadge(badge.id)} // Toggle selection on press
                    >
                      <MaterialCommunityIcons
                        name={badge.icon}
                        size={20} // Size for selectable badge icon
                        // Use badge color or white if selected, otherwise subtle grey
                        color={
                          isSelected
                            ? badge.color || themeColors.text
                            : themeColors.subtleText
                        }
                        style={styles.badgeSelectIcon}
                      />
                      <Text
                        // Apply base style and conditional deselected style
                        style={[
                          styles.badgeSelectName,
                          !isSelected && styles.badgeSelectName_deselected,
                        ]}
                      >
                        {badge.name}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
              {/* --- End Badge Selection Section --- */}

              {/* Action Buttons Row */}
              <View style={styles.buttonRow}>
                {/* Cancel Button */}
                <Pressable
                  style={[styles.button, styles.cancelButton]}
                  onPress={handleCancel}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                {/* Save Button */}
                <Pressable
                  style={[styles.button, styles.saveButton]}
                  onPress={handleSave}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </Pressable>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
