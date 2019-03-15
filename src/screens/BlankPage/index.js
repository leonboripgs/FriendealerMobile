import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Title
} from "native-base";

class BlankPage extends Component {
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
            <Title>BlankPage</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content />
      </Container>
    );
  }
}

export default BlankPage;
