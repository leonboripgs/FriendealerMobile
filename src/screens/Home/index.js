import React, { Component } from "react";
import { Image, View, TouchableOpacity, ListView } from "react-native";
import {
  Container,
  Content,
  Text,
  Thumbnail,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Header,
  Item,
  Input,
  Icon,
  Button
} from "native-base";
import data from "./data";
import styles from "./styles";

const chatContactsImg = require("../../../assets/chatcontacts.png");
const profileImg = require("../../../assets/contacts/sanket.png");
const notificationImg = require("../../../assets/notification.png");
const live = require("../../../assets/live.png");
const photo = require("../../../assets/cam.png");
const checkIn = require("../../../assets/checkin.png");

class Home extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Header searchBar>
          <Item style={{ borderRadius: 6, backgroundColor: "#293F68" }}>
            <Icon name="search" style={{ color: "#fff" }} />
            <Input
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              placeholder="Search"
            />
          </Item>

          <Button
            transparent
            style={styles.headerBtn}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={chatContactsImg} style={styles.sidebarIcon} />
          </Button>
        </Header>
        <Content style={styles.content}>
          <View style={styles.detailsBlockView}>
            <View style={styles.whatsOnMindView}>
              <Thumbnail square source={profileImg} style={styles.thumbnail} />
              <TouchableOpacity
                onPress={() => navigation.navigate("UpdatePost")}
              >
                <Text style={styles.nameText}>Whats on your mind?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navLinksView}>
              <TouchableOpacity style={styles.navLinkBtn}>
                <Image source={live} style={styles.navLinkIcons} />
                <Text style={styles.navLinkText}>Live</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.navLinkBtn,
                  ...{
                    borderRightWidth: 1,
                    borderLeftWidth: 1,
                    borderLeftColor: "rgba(0,0,0,0.1)",
                    borderRightColor: "rgba(0,0,0,0.1)"
                  }
                }}
              >
                <Image source={photo} style={styles.navLinkIcons} />
                <Text style={styles.navLinkText}>Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navLinkBtn}>
                <Image source={checkIn} style={styles.navLinkIcons} />
                <Text style={styles.navLinkText}>Check In</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listViewBlock}>
            <ListView
              removeClippedSubviews={false}
              dataSource={this.state.dataSource}
              style={{ margin: -3 }}
              renderRow={dataRow =>
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail
                        square
                        source={dataRow.thumbnail}
                        style={styles.thumbnail}
                      />
                      <Body>
                        <Text style={styles.userNameText}>
                          {dataRow.name}
                        </Text>
                        <View note style={{ flexDirection: "row" }}>
                          <Text style={styles.timeText}>
                            {dataRow.time}
                          </Text>
                          <Image
                            source={notificationImg}
                            style={styles.globeIcon}
                          />
                        </View>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem content bordered style={{ paddingTop: -10 }}>
                    <Text style={styles.postContentText}>
                      {dataRow.content}
                    </Text>
                  </CardItem>
                  <CardItem style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <Left>
                      <Button small transparent>
                        <Icon
                          name="ios-thumbs-up-outline"
                          style={styles.cardFooterIcons}
                        />
                        <Text style={styles.cardFooterText}>Like</Text>
                      </Button>
                    </Left>
                    <Body>
                      <View>
                        <Button small transparent>
                          <Icon
                            name="ios-chatboxes-outline"
                            style={styles.cardFooterIcons}
                          />
                          <Text style={styles.cardFooterText}>Comment</Text>
                        </Button>
                      </View>
                    </Body>
                    <Right>
                      <Button small transparent>
                        <Icon
                          name="ios-redo-outline"
                          style={styles.cardFooterIcons}
                        />
                        <Text style={styles.cardFooterText}>Share</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
