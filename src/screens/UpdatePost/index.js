import React, { Component } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
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
  ListItem,
  Grid,
  Col,
  Row
} from "native-base";
import data from "./data";
import styles from "./styles";

const profileImg = require("../../../assets/contacts/sanket.png");

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Whats on your mind?" };
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
          <Body>
            <Title>Update Status</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigation.goBack()}>
              <Text style={styles.headerBtnText}>Post</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          <TouchableOpacity style={styles.nameContainerLink}>
            <Thumbnail square source={profileImg} />
            <View style={{ marginTop: 8 }}>
              <Text style={styles.userNameText}>Sanket Sahu</Text>
              <Text style={styles.profileVisibilityText}>Public</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.textareaView}>
            <TextInput
              onChangeText={text => this.setState({ text })}
              placeholder={this.state.text}
              style={styles.textarea}
              editable
              multiline
              underlineColorAndroid="transparent"
              numberOfLines={10}
            />
          </View>

          <View style={styles.optionsView}>
            <Grid>
              <List
                dataArray={data}
                renderRow={dataRow =>
                  <ListItem
                    button
                    iconLeft
                    noBorder
                    style={{
                      paddingTop: 8,
                      paddingBottom: 4
                    }}
                  >
                    <Row>
                      <Col style={{ width: 40 }}>
                        <Icon
                          active
                          name={dataRow.icon}
                          style={{
                            ...styles.optionIcon,
                            ...{ color: dataRow.iconColor }
                          }}
                        />
                      </Col>
                      <Col>
                        <Text style={styles.optionText}>
                          {dataRow.text}
                        </Text>
                      </Col>
                    </Row>
                  </ListItem>}
              />
            </Grid>
          </View>
        </Content>
      </Container>
    );
  }
}

export default UpdatePost;
