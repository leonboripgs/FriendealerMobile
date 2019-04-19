import React, { Component } from "react";
import { Text, Image } from "react-native";
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
import styles from "./styles";

const chatContactsImg = require("../../../assets/chatcontacts.png");

class PostEvent extends Component {
  render() {
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
            <Title>Post an Activity</Title>
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

        </Content>
      </Container>
    );
  }
}

export default PostEvent;
