import { GiftedChat } from "react-native-gifted-chat";
import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Right,
  Body,
  List,
  ListItem
} from "native-base";
import { NavigationActions } from "react-navigation";
import styles from "./styles";
import api from '../../ApiConfig.js';
import TimeAgo from 'react-native-timeago';

const chatContactsImg = require("../../../assets/chatcontacts.png");
const navigateAction = (dataRow, userId) =>
  NavigationActions.navigate({
    routeName: "ChatScreen",
    params: { eventId: dataRow.event_id, contactId: dataRow.contact_id,
       contactName: dataRow.name, eventName: dataRow.event_name, userId: userId,
      contactAvatar: dataRow.avatar }
  });

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChat: false,
      messages: [],
      isLoadingEarlier: false,
      currentChat: "",
      loadEarlier: true,
      typingText: "",
      tab: "chat",
      contactData: [],
    };
    this._isMounted = false;
    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    if (this.props.user.user_id && this._isMounted) { 
      api.post('/chat/getContactByUserId', {user_id: this.props.user.user_id}).then((res)=>{
        this.setState({contactData: res.data.doc})
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const navigation = this.props.navigation;
    const {contactData} = this.state;
    contactData.sort(function(a,b){return (a.lastMessageTime - b.lastMessageTime)})
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Chat</Title>
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
          <List
            removeClippedSubviews={false}
            dataArray={contactData}
            renderRow={dataRow =>{
              return (
                <ListItem
                  onPress={() =>
                    navigation.dispatch(navigateAction(dataRow, this.props.user.user_id))}
                  button
                  thumbnail
                >
                  <Left>
                    <Thumbnail round source={{uri: dataRow.avatar}} />
                  </Left>
                  <Body>
                    <Text style={styles.userNameText}>
                      {dataRow.name}
                    </Text>
                    <Text style={styles.messageText}>
                      {dataRow.mood}
                    </Text>
                  </Body>
                  <Right
                    style={{ flexDirection: "row", alignItems: "flex-start" }}
                  >
                    <Text style={styles.timeText}>
                      <TimeAgo time={dataRow.lastMessageTime} />
                    </Text>
                  </Right>
                </ListItem>
              )}}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});
export default connect(mapStateToProps)(Chat);
