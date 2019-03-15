import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Thumbnail,
  Title,
  List,
  ListItem
} from "native-base";

import data from "./data";
import styles from "./styles";

const commonColor = require("../../theme/variables/commonColor");

class Friends extends Component {
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
          <Body style={{ flex: 1.5 }}>
            <Title>Friend Requests</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="md-add" />
            </Button>
          </Right>
        </Header>

        <Content style={styles.content}>
          <View style={styles.requestContainerOneView}>
            <Text>No New Requests</Text>
          </View>
          <View style={styles.requestContainerTwoView}>
            <Text style={styles.requestContainerTwoText}>
              PEOPLE YOU MAY KNOW
            </Text>
            <List
              removeClippedSubviews={false}
              dataArray={data}
              renderRow={dataRow =>
                <ListItem>
                  <View style={styles.requestContainerInnerView}>
                    <Thumbnail square large source={dataRow.thumbnail} />
                    <View style={{ marginLeft: 15 }}>
                      <Text style={styles.nameText}>
                        {dataRow.name}
                      </Text>
                      <Text style={styles.noOfMutualFriendsText}>
                        {dataRow.friendsCount}
                      </Text>
                      <View style={styles.actionButtonsBlock}>
                        <Button small style={{ marginRight: 7 }}>
                          <Text style={{ color: commonColor.inverseTextColor }}>
                            Add Friend
                          </Text>
                        </Button>
                        <Button small bordered light>
                          <Text style={{ color: commonColor.lightTextColor }}>
                            Remove
                          </Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                </ListItem>}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Friends;
