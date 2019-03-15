import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Icon,
  ListItem,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Thumbnail
} from "native-base";
import { itemsFetchData } from "../../actions";
import datas from "./data.json";
import styles from "./styles";

const chatContactsImg = require("../../../assets/chatcontacts.png");
const profileImg = require("../../../assets/contacts/sanket.png");

class Settings extends Component {
  componentDidMount() {
    this.props.fetchData(datas);
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.settingsContainerView}>
        <ListItem style={{ marginTop: 7 }} icon onPress={() => this.props.navigation.navigate(item.url)}>
          <Left>
            <View
              style={{
                ...styles.iconContainerView,
                ...{ backgroundColor: item.bg }
              }}
            >
              <Icon
                name={item.icon}
                style={{
                  ...styles.optionIcon,
                  left: item.last ? 8 : item.divider ? 3 : undefined
                }}
              />
            </View>
          </Left>
          <Body>
            <Text>
              {item.name}
            </Text>
          </Body>
          <Right />
        </ListItem>
      </View>
    );
  };
  render() {
    const user = this.props.user;
    const navigation = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => navigation.openDrawer()}
            >
              <Image source={chatContactsImg} style={styles.headerIcon} />
            </Button>
          </Right>
        </Header>

        <Content style={styles.content}>
          <TouchableOpacity
            style={styles.nameContainerBtn}
            onPress={() => navigation.navigate("Profile")}
          >
            <Thumbnail circle source={{uri: user.avatar}} />
            <View style={styles.nameContainerView}>
              <Text style={styles.userNameText}>{user.user_name}</Text>
              <Text style={styles.viewProfileText}>View your Profile</Text>
            </View>
            <Icon name="arrow-forward" style={styles.arrowForwardIcon} />
          </TouchableOpacity>
          <FlatList
            data={this.props.items}
            renderItem={this._renderItem}
            keyExtractor={item => item.id}
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
}

const mapStateToProps = state => ({
  items: state.settingsReducer.items,
  hasErrored: state.settingsReducer.hasErrored,
  isLoading: state.settingsReducer.isLoading,
  user: state.userReducer.user
});
export default connect(mapStateToProps, bindAction)(Settings);
