import React from "react";
import { Button, Icon, Footer, FooterTab, Badge, Text } from "native-base";
import Friends from "../Friends";
import Home from "./index";
import Notifications from "../Notifications";
import Chat from "../Chat";
import Settings from "../Settings";
import { createBottomTabNavigator } from "react-navigation";
import styles from "./styles";

const HomeTabNavigation = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Friends: { screen: Friends },
    Chat: { screen: Chat },
    Notifications: { screen: Notifications },
    Settings: { screen: Settings }
  },
  {
    tabBarPosition: "bottom",
    lazy: true,
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button onPress={() => props.navigation.navigate("Home")}>
              <Icon
                name={
                  props.navigation.state.index === 0
                    ? "ios-calendar"
                    : "ios-calendar-outline"
                }
                style={
                  props.navigation.state.index === 0
                    ? styles.activeIcon
                    : undefined
                }
              />
            </Button>
            <Button onPress={() => props.navigation.navigate("Friends")}>
              <Icon
                name={
                  props.navigation.state.index === 1
                    ? "ios-people"
                    : "ios-people-outline"
                }
                style={
                  props.navigation.state.index === 1
                    ? styles.activeIcon
                    : undefined
                }
              />
            </Button>
            <Button onPress={() => props.navigation.navigate("Chat")}>
              <Icon
                name={
                  props.navigation.state.index === 2
                    ? "ios-chatboxes"
                    : "ios-chatboxes-outline"
                }
                style={
                  props.navigation.state.index === 2
                    ? styles.activeIcon
                    : undefined
                }
              />
            </Button>
            <Button
              badge
              vertical
              onPress={() => props.navigation.navigate("Notifications")}
            >
              <Badge>
                <Text>4</Text>
              </Badge>
              <Icon
                name={
                  props.navigation.state.index === 3
                    ? "ios-notifications"
                    : "ios-notifications-outline"
                }
                style={
                  props.navigation.state.index === 3
                    ? styles.activeIcon
                    : undefined
                }
              />
            </Button>
            <Button onPress={() => props.navigation.navigate("Settings")}>
              <Icon
                name={
                  props.navigation.state.index === 4
                    ? "ios-settings"
                    : "ios-settings-outline"
                }
                style={
                  props.navigation.state.index === 4
                    ? styles.activeIcon
                    : undefined
                }
              />
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

export default HomeTabNavigation;
