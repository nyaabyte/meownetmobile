import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/ProfileScreen.styles';
import { User } from '../../types';
import Colors from '../../constants/Colors';

import { AVAILABLE_BADGES, BadgeInfo } from '../../constants/Badges';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const initialUserProfile: User = {
  id: 'user001',
  username: 'Wurdle',
  avatarUrl: 'https://cdn.nyabyte.dev/wurdleturtle.png',
  bio: 'Cool guy :3',
  badges: ['dev', 'early'],
};

const getBadgeInfo = (id: string): BadgeInfo | undefined => {
  return AVAILABLE_BADGES.find((badge) => badge.id === id);
};

export default function ProfileScreen() {
  const themeColors = Colors.dark;

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<User>(initialUserProfile);
  const [tempUsername, setTempUsername] = useState(profile.username);
  const [tempBio, setTempBio] = useState(profile.bio || '');
  const [tempBadges, setTempBadges] = useState<string[]>(profile.badges || []);

  const handleEdit = () => {
    setTempUsername(profile.username);
    setTempBio(profile.bio || '');
    setTempBadges(profile.badges || []);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile({
      ...profile,
      username: tempUsername,
      bio: tempBio,
      badges: tempBadges,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleToggleBadge = (badgeId: string) => {
    setTempBadges((currentBadges) => {
      if (currentBadges.includes(badgeId)) {
        return currentBadges.filter((id) => id !== badgeId);
      } else {
        return [...currentBadges, badgeId];
      }
    });
  };

  const renderDisplayedBadges = () => {
    if (!profile.badges || profile.badges.length === 0) {
      return null;
    }
    return (
      <View style={styles.badgesContainer}>
        {profile.badges.map((badgeId) => {
          const badgeInfo = getBadgeInfo(badgeId);
          if (!badgeInfo) return null;
          return (
            <View key={badgeId} style={styles.badgeItem}>
              <MaterialCommunityIcons
                name={badgeInfo.icon}
                size={16}
                color={badgeInfo.color || themeColors.subtleText}
                style={styles.badgeIcon}
              />
              <Text style={styles.badgeText}>{badgeInfo.name}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            {profile.avatarUrl ? (
              <Image
                source={{ uri: profile.avatarUrl }}
                style={styles.avatar}
              />
            ) : (
              <View style={[styles.avatar, styles.avatarPlaceholder]} />
            )}
          </View>

          {!isEditing ? (
            <>
              <Text style={styles.username}>{profile.username}</Text>
              {renderDisplayedBadges()}
              <Text style={styles.bio}>{profile.bio || 'No bio yet.'}</Text>
              <Pressable style={styles.button} onPress={handleEdit}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </Pressable>
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                value={tempUsername}
                onChangeText={setTempUsername}
                placeholder="Username"
                placeholderTextColor={themeColors.subtleText}
                maxLength={30}
              />
              <TextInput
                style={[styles.input, styles.bioInput]}
                value={tempBio}
                onChangeText={setTempBio}
                placeholder="Tell us about yourself..."
                placeholderTextColor={themeColors.subtleText}
                multiline={true}
                numberOfLines={4}
                maxLength={150}
              />

              <Text style={styles.editSectionHeader}>Select Badges</Text>
              <View style={styles.badgeSelectionContainer}>
                {AVAILABLE_BADGES.map((badge) => {
                  const isSelected = tempBadges.includes(badge.id);
                  return (
                    <Pressable
                      key={badge.id}
                      style={[
                        styles.badgeSelectItem,
                        isSelected && styles.badgeSelectItem_selected,
                      ]}
                      onPress={() => handleToggleBadge(badge.id)}
                    >
                      <MaterialCommunityIcons
                        name={badge.icon}
                        size={20}
                        color={
                          isSelected
                            ? badge.color || themeColors.text
                            : themeColors.subtleText
                        }
                        style={styles.badgeSelectIcon}
                      />
                      <Text
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

              <View style={styles.buttonRow}>
                <Pressable
                  style={[styles.button, styles.cancelButton]}
                  onPress={handleCancel}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
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
