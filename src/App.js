import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./screens/Login/";
import SignUp from "./screens/SignUp/";
import HomeTabNavigation from "./screens/Home/tabNavigation";
import SideBar from "./screens/Sidebar/";
import UpdatePost from "./screens/UpdatePost/";
import ChatScreen from "./screens/Chat/ChatScreen";
import Profile from "./screens/Profile";
import Membership from "./screens/Membership";
import ChangePwd from "./screens/ChangePwd";
import NearbyFriends from "./screens/NearbyFriends";
import BlankPage from "./screens/BlankPage";

const Drawer = createDrawerNavigator(
  {
    HomeTabNavigation: { screen: HomeTabNavigation },
    Profile: { screen: Profile },
    Membership: { screen: Membership },
    ChangePwd: { screen: ChangePwd },
    NearbyFriends: { screen: NearbyFriends },
    BlankPage: { screen: BlankPage }
  },
  {
    initialRouteName: "HomeTabNavigation",
    contentComponent: props => <SideBar {...props} />
  }
);

const App = createStackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Drawer: { screen: Drawer },
    UpdatePost: { screen: UpdatePost },
    ChatScreen: { screen: ChatScreen }
  },
  {
    index: 0,
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
