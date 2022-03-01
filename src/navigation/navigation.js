import React from 'react';
import {useWindowDimensions, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from '../constants/screenNames';
import Initial from '../screens/Initial';
import QRScan from '../screens/QRScan';

const MainStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

export const MainStackScreen = () => (
  <NavigationContainer independent={true}>
    <MainStack.Navigator>
      <MainStack.Screen
        name={screenNames.initial}
        component={Initial}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={screenNames.qrScan}
        component={QRScan}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={screenNames.home}
        component={TabsScreen}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

const TabsScreen = () => {
  return (
    <SafeAreaProvider>
      <BottomTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <BottomTabs.Screen
          name={screenNames.home}
          component={home}
          options={{
            tabBarIcon: function tabIcon({focused}) {
              return (
                <View>
                  <Text>Icon</Text>
                </View>
              );
            },
          }}
        />
        <BottomTabs.Screen
          name={screenNames.home}
          component={home}
          options={{
            tabBarIcon: function tabIcon({focused}) {
              return (
                <View>
                  <Text>Icon</Text>
                </View>
              );
            },
          }}
        />
        <BottomTabs.Screen
          name={screenNames.home}
          component={home}
          options={{
            tabBarIcon: function tabIcon({focused}) {
              return (
                <View>
                  <Text>Icon</Text>
                </View>
              );
            },
          }}
        />
      </BottomTabs.Navigator>
    </SafeAreaProvider>
  );
};
