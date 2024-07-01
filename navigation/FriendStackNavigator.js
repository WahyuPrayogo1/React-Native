import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FriendListScreen from '../screens/FriendListScreen';
import FriendDetailScreen from '../screens/FriendDetailScreen';

const Stack = createStackNavigator();

const FriendStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FriendList">
      <Stack.Screen name="FriendList" component={FriendListScreen} options={{ title: '' }} />
      <Stack.Screen name="FriendDetail" component={FriendDetailScreen} options={{ title: 'Detail Teman' }} />
    </Stack.Navigator>
  );
};

export default FriendStackNavigator;
