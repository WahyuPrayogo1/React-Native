import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FriendListScreen from '../screens/FriendListScreen';
import FriendDetailScreen from '../screens/FriendDetailScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FriendList">
      <Stack.Screen name="FriendList" component={FriendListScreen} options={{ title: 'Friends List' }} />
      <Stack.Screen name="FriendDetail" component={FriendDetailScreen} options={{ title: 'Friend Detail' }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
