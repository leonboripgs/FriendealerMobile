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
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    if (this.props.user.user_id) { 
      api.post('/chat/getContactByUserId', {user_id: this.props.user.user_id}).then((res)=>{
        this.setState({contactData: res.data.doc})
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState(previousState => ({
      isLoadingEarlier: true
    }));

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState(previousState => ({
          messages: GiftedChat.prepend(
            previousState.messages,
            require("./oldmessages")
          ),
          loadEarlier: false,
          isLoadingEarlier: false
        }));
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  onReceive(text) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, {
        _id: Math.round(Math.random() * 1000000),
        text,
        createdAt: Date.now(),
        user: {
          _id: 2,
          name: "React Native"
          // avatar: 'https://facebook.github.io/react/img/logo_og.png',
        }
      })
    }));
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if (messages[0].image || messages[0].location || !this._isAlright) {
        this.setState(previousState => ({
          typingText: "React Native is typing"
        }));
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive("Nice picture!");
          } else if (messages[0].location) {
            this.onReceive("My favorite place");
          } else if (!this._isAlright) {
            this._isAlright = true;
            this.onReceive("Alright");
          }
        }
      }

      this.setState(previousState => ({
        typingText: ""
      }));
    }, 1000);
  }

  _toggleRenderChat(personName) {
    this.setState({
      showChat: !this.state.showChat,
      currentChat: personName
    });
  }

  renderFooter(props) {
    if (this.state.typingText !== "") {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    const navigation = this.props.navigation;
    const {contactData} = this.state;
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
                      {dataRow.event_name}
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
