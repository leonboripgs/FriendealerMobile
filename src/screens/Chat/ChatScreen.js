import { GiftedChat } from "react-native-gifted-chat";
import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Right,
  Body,
  Content
} from "native-base";
import styles from "./styles";
import api from '../../ApiConfig.js';
import socket from '../../SocketConfig.js';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isLoadingEarlier: false,
      currentChat: "",
      loadEarlier: true,
      typingText: "",
      tab: "chat"
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
    const navigation = this.props.navigation;
    api.post('/chat/getChatByUserId', {eventId: navigation.state.params.eventId,
      contactId: navigation.state.params.contactId,
      userId: navigation.state.params.userId})
      .then((res)=>{
      var dialog = [];
      res.data.doc.dialog.map((cursor)=>{
        dialog.push({
          _id: Math.round(Math.random() * 1000000),
          text: cursor.message,
          createdAt: cursor.time,
          user: {
            _id: (navigation.state.params.userId === cursor.who ? 1 : 2),
            name: (navigation.state.params.userId === cursor.who ? '' : navigation.state.params.contactName),
            avatar: (navigation.state.params.userId === cursor.who ? '' : navigation.state.params.contactAvatar),
          }        
        })
      })
      this.setState({
        messages: dialog
      })
    })
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
    const navigation = this.props.navigation;
    const msg = {
      'event_id' : navigation.state.params.eventId,
      'contactId' : navigation.state.params.contactId,
      'who'    : navigation.state.params.userId,
      'message': messages[0].text,
      'message_type' : 'text',
      'time'   : new Date()
    };

    const request = api.post('/chat/sendMessage', {
        message: msg
    });

    request.then(()=>{
      socket.emit("send:message", {
        event_id : navigation.state.params.eventId,
        contactId : navigation.state.params.contactId,
        user_id : navigation.state.params.userId,
        message : messages[0].text,
      });
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
      }));
    })
  }

  onReceive(text) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, {
        _id: Math.round(Math.random() * 1000000),
        text,
        createdAt: new Date(),
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

  renderFooter(props) {
    if (this.state.typingText !== "") {
      return (
        <View style={styles.chatFooterView}>
          <Text style={styles.chatFooterText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    const navigation = this.props.navigation;
    const {messages} = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>
              {navigation.state.params.eventName}
            </Title>
          </Body>
          <Right />
        </Header>
        <Content
          scrollEnabled={false}
          extraScrollHeight={-13}
          contentContainerStyle={styles.contentChatView}
        >
          <GiftedChat
            messages={messages}
            onSend={this.onSend}
            loadEarlier={this.state.loadEarlier}
            onLoadEarlier={this.onLoadEarlier}
            isLoadingEarlier={this.state.isLoadingEarlier}
            renderFooter={this.renderFooter}
            user={{
              _id: 1
            }}
            bottomOffset={50}
          />
        </Content>
      </Container>
    );
  }
}

export default ChatScreen;
