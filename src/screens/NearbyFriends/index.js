import React, {Component} from "react";
import {Image, View, Switch, Text} from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Content,
  Button,
  Icon,
  Thumbnail,
  Title,
  List,
  Item,
  Input,
  ListItem
} from "native-base";
import PropTypes from "prop-types";
import styles from "./styles";
import dataNearByFriends from "./data1";
import dataFriendsTraveling from "./data2";

const commonColor = require("../../theme/variables/commonColor");

const chatContactsImg = require("../../../assets/chatcontacts.png");
const profileImg = require("../../../assets/contacts/sanket.png");

class NearByFriends extends Component {
  state: {
    locationSwitch: true
  };
  static propTypes = {
    openDrawer: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      locationSwitch: true
    };
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body style={{flex: 1.5}}>
            <Title>Nearby Friends</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => navigation.openDrawer()}
            >
              <Image source={chatContactsImg} style={styles.sidebarIcon} />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          <View style={styles.searchContainerView}>
            <View style={styles.searchView}>
              <Item style={{borderBottomWidth: 0}}>
                <Icon name="ios-search" style={styles.searchIcon} />
                <Input
                  placeholder="Search"
                  placeholderTextColor={commonColor.lightTextColor}
                  style={{color: "#000"}}
                />
              </Item>
            </View>
            <View style={styles.inviteBtnView}>
              <Button transparent>
                <Icon active name="person-add" style={styles.inviteIcon} />
                <Text style={styles.inviteBtnText}>Invite</Text>
              </Button>
            </View>
          </View>

          <View style={styles.userContainerView}>
            <Text style={styles.menuHeaderText}>My Location</Text>
            <ListItem button thumbnail noBorder>
              <Left>
                <Thumbnail circle source={profileImg} />
              </Left>
              <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.userNameText}>Sanket Sahu</Text>
                <Text style={styles.locationText}>JP Nagar, Bangalore</Text>
              </Body>
              <Right style={{borderBottomWidth: 0, paddingRight: 7}}>
                <Switch
                  onValueChange={value =>
                    this.setState({locationSwitch: value})}
                  onTintColor={"#a9bbdb"}
                  thumbTintColor={commonColor.brandPrimary}
                  tintColor={commonColor.brandPrimary}
                  value={this.state.locationSwitch}
                  style={styles.switch}
                />
              </Right>
            </ListItem>
          </View>

          <View style={styles.userContainerView}>
            <Text style={styles.menuHeaderText}>
              Near Bannerghatta, Bangalore
            </Text>
            <List
              dataArray={dataNearByFriends}
              renderRow={dataRow =>
                <ListItem button thumbnail noBorder>
                  <Left>
                    <Thumbnail circle source={dataRow.thumbnail} />
                  </Left>
                  <Body style={{borderBottomWidth: 0}}>
                    <Text style={styles.userNameText}>
                      {dataRow.name}
                    </Text>
                    <Text style={styles.locationText}>
                      {dataRow.location}
                    </Text>
                    <Text style={styles.distanceText}>
                      {dataRow.distance}
                    </Text>
                  </Body>
                  <Right style={{borderBottomWidth: 0}}>
                    <Icon
                      active
                      name="hand"
                      style={{
                        ...{color: dataRow.iconColor}
                      }}
                    />
                  </Right>
                </ListItem>}
            />
            <Button full transparent style={styles.seeMoreBtn}>
              <Text style={{color: commonColor.lightTextColor}}>See More</Text>
            </Button>
          </View>

          <View style={styles.userContainerView}>
            <Text style={styles.menuHeaderText}>Friends Traveling</Text>
            <List
              dataArray={dataFriendsTraveling}
              renderRow={dataRow =>
                <ListItem button thumbnail noBorder>
                  <Left>
                    <Thumbnail circle source={dataRow.thumbnail} />
                  </Left>
                  <Body style={{borderBottomWidth: 0}}>
                    <Text style={styles.userNameText}>
                      {dataRow.name}
                    </Text>
                    <Text style={styles.locationText}>
                      {dataRow.location}
                    </Text>
                    <Text style={styles.distanceText}>
                      {dataRow.distance}
                    </Text>
                  </Body>
                  <Right style={{borderBottomWidth: 0}}>
                    <Icon
                      active
                      name="chatbubbles"
                      style={{
                        ...{color: dataRow.iconColor}
                      }}
                    />
                  </Right>
                </ListItem>}
            />
            <Button full transparent style={styles.seeMoreBtn}>
              <Text style={{color: commonColor.lightTextColor}}>See More</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default NearByFriends;
