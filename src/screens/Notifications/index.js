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
import data from "./data";
import styles from "./styles";

const chatContactsImg = require("../../../assets/chatcontacts.png");

class Notifications extends Component {
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
            <Title>Notifications</Title>
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
            dataArray={data}
            renderRow={dataRow =>
              <ListItem
                button
                thumbnail
                style={{
                  ...styles.listItem,
                  ...{ backgroundColor: dataRow.bg }
                }}
              >
                <Left>
                  <Thumbnail square source={dataRow.thumbnail} />
                </Left>
                <Body>
                  <Text style={styles.nameText}>
                    {dataRow.post}
                  </Text>
                  <Text style={styles.timeText}>
                    {dataRow.time}
                  </Text>
                </Body>
                <Right />
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default Notifications;
