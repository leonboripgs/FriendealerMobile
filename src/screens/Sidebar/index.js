import React, {Component} from "react";
import {View} from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  Icon,
  List,
  Left,
  Right,
  Body,
  ListItem,
  Thumbnail,
  Item,
  Input,
  Button,
  Badge
} from "native-base";
import PropTypes from "prop-types";
import {NavigationActions,StackActions} from "react-navigation";
import data from "./data";
import styles from "./style";

const menuItems = [
  {
    link: "Home",
    icon: "ios-calendar",
    text: "News Feed",
    bg: "#9acd32"
  },
  {
    link: "NearbyFriends",
    icon: "ios-pin",
    text: "Nearby Friends",
    bg: "#fc6c85"
  },
  {
    link: "Membership",
    icon: "ios-people",
    text: "Membership",
    bg: "#ffb66c"
  }
];

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: "Login"})]
});

class SideBar extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func
  };
  render() {
    const navigation = this.props.navigation;
    const {user} = this.props;
    const userData = [
      {
        thumbnail: user.avatar,
        name: user.user_name,
        description: "View your profile",
        link: "Profile"
      }
    ];
    return (
      <Container>
        <Content style={styles.drawerContent}>
          <View style={styles.headerView}>
            <View style={styles.searchBlockView}>
              <Item style={styles.sidebarSearch}>
                <Icon name="search" style={styles.searchIcon} />
                <Input
                  placeholder="Search"
                  placeholderTextColor={"rgba(255,255,255,0.5)"}
                  style={styles.searchPlaceholder}
                />
              </Item>
              <Button
                transparent
                style={{paddingTop: 0}}
                onPress={() => navigation.navigate("Settings")}
              >
                <Icon name="ios-settings" style={styles.settingsIcon} />
              </Button>
            </View>
          </View>
          <List
            dataArray={userData}
            renderRow={userDataRow =>
              <ListItem
                button
                thumbnail
                noBorder
                onPress={() => navigation.navigate(userDataRow.link)}
                style={styles.userDataListitem}
              >
                <Left>
                  <Thumbnail square source={{uri: userDataRow.thumbnail}} />
                </Left>
                <Body style={{borderBottomWidth: 0}}>
                  <Text style={styles.userDataNameText}>
                    {userDataRow.name}
                  </Text>
                  <Text style={styles.userDataDescriptionText}>
                    {userDataRow.description}
                  </Text>
                </Body>
                <Right style={{borderBottomWidth: 0, paddingLeft: 5}}>
                  <Icon
                    name="ios-arrow-forward"
                    style={styles.userDataArrowIcon}
                  />
                </Right>
              </ListItem>}
          />

          <View style={styles.menuHeadView}>
            <Text style={styles.menuHeaderText}>Favourites</Text>
            <List
              dataArray={menuItems}
              renderRow={menuItemRow =>
                <ListItem
                  button
                  iconLeft
                  noBorder
                  style={{paddingTop: 8, paddingBottom: 4}}
                  onPress={() => {
                    navigation.navigate(menuItemRow.link);
                  }}
                >
                  <View
                    style={{
                      ...styles.menuIconContainerView,
                      ...{backgroundColor: menuItemRow.bg}
                    }}
                  >
                    <Icon name={menuItemRow.icon} style={styles.menuIcon} />
                  </View>
                  <Text style={styles.menuItemText}>
                    {menuItemRow.text}
                  </Text>
                </ListItem>}
            />
            <ListItem
              button
              iconLeft
              noBorder
              style={{paddingTop: 5}}
              onPress={() => {
                navigation.dispatch(resetAction);
              }}
            >
              <View
                style={{
                  ...styles.menuIconContainerView,
                  ...{backgroundColor: "#c0c0c0"}
                }}
              >
                <Icon name="ios-log-out" style={styles.menuIcon} />
              </View>
              <Text style={styles.menuItemText}>Log Out</Text>
            </ListItem>
          </View>
          <View style={styles.contactListView}>
            <Text style={styles.menuHeaderText}>Recent Contacts</Text>
            <List
              removeClippedSubviews={false}
              dataArray={data}
              renderRow={dataRow =>
                <ListItem
                  thumbnail
                  noBorder
                  style={{paddingTop: 2, paddingBottom: 2}}
                >
                  <Left>
                    <Thumbnail small source={dataRow.thumbnail} />

                    <Text style={[styles.menuItemText, {marginLeft: -3}]}>
                      {dataRow.name}
                    </Text>
                  </Left>
                  <Body style={{borderBottomWidth: 0}} />
                  <Right style={{borderBottomWidth: 0, paddingLeft: 5}}>
                    <Badge success />
                  </Right>
                </ListItem>}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});
export default connect(mapStateToProps)(SideBar);
