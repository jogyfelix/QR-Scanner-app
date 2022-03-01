import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from '../constants/screenNames';
import Initial from '../screens/Initial';
import QRScan from '../screens/QRScan';
import Home from '../screens/home/Home';
import RequestTests from '../screens/RequestTests';
import Orders from '../screens/Orders';
import Icon from 'react-native-remix-icon';
import icons from '../constants/icons';
import colors from '../constants/colors';

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
        name={screenNames.tabScreens}
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
        initialRouteName={screenNames.home}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarItemStyle: {backgroundColor: colors.appPrimary},
        }}>
        <BottomTabs.Screen
          name={screenNames.requestTest}
          component={RequestTests}
          options={{
            tabBarIcon: function tabIcon({focused}) {
              return focused ? (
                <View style={{alignItems: 'center'}}>
                  <Icon
                    name={icons.upload_fill}
                    size="24"
                    color={colors.white}
                  />
                  <Text style={{color: colors.white, fontSize: 10}}>
                    {screenNames.requestTest}
                  </Text>
                </View>
              ) : (
                <View style={{alignItems: 'center'}}>
                  <Icon
                    name={icons.upload_line}
                    size="24"
                    color={colors.grey}
                  />
                  <Text style={{color: colors.grey, fontSize: 10}}>
                    {screenNames.requestTest}
                  </Text>
                </View>
              );
            },
          }}
        />
        <BottomTabs.Screen
          name={screenNames.home}
          component={Home}
          options={{
            tabBarIcon: function tabIcon({focused}) {
              return focused ? (
                <View style={{alignItems: 'center'}}>
                  <Icon
                    name={icons.session_fill}
                    size="24"
                    color={colors.white}
                  />
                  <Text style={{color: colors.white, fontSize: 10}}>
                    {screenNames.home}
                  </Text>
                </View>
              ) : (
                <View style={{alignItems: 'center'}}>
                  <Icon
                    name={icons.session_line}
                    size="24"
                    color={colors.grey}
                  />
                  <Text style={{color: colors.grey, fontSize: 10}}>
                    {screenNames.home}
                  </Text>
                </View>
              );
            },
          }}
        />
        <BottomTabs.Screen
          name={screenNames.orders}
          component={Orders}
          options={{
            tabBarIcon: function tabIcon({focused}) {
              return focused ? (
                <View style={{alignItems: 'center'}}>
                  <Icon
                    name={icons.upload_fill}
                    size="24"
                    color={colors.white}
                  />
                  <Text style={{color: colors.white, fontSize: 10}}>
                    {screenNames.orders}
                  </Text>
                </View>
              ) : (
                <View style={{alignItems: 'center'}}>
                  <Icon
                    name={icons.upload_line}
                    size="24"
                    color={colors.grey}
                  />
                  <Text style={{color: colors.grey, fontSize: 10}}>
                    {screenNames.orders}
                  </Text>
                </View>
              );
            },
          }}
        />
      </BottomTabs.Navigator>
    </SafeAreaProvider>
  );
};
