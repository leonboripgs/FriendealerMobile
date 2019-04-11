import React, { Component } from "react";
import { Image, View, TouchableOpacity, ListView } from "react-native";
import { connect } from "react-redux";
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
  Title,
  Item,
  Input,
  Icon,
  Button
} from "native-base";
import styles from "./styles";
import api from '../../ApiConfig.js';
import moment from  "moment/moment.js";

const chatContactsImg = require("../../../assets/chatcontacts.png");
const notificationImg = require("../../../assets/notification.png");
const live = require("../../../assets/live.png");
const photo = require("../../../assets/cam.png");
const checkIn = require("../../../assets/checkin.png");

class Home extends Component {
  state = {
    eventSource: [],
    bidSource: [],
    selected_event: null
  }
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    api.post('/events/getEventsByEmployerId', {employer_id: this.props.user.user_id}).then((res)=>{
      this.setState({eventSource: res.data.doc, bidSource: res.data.bid_events})
    })
  }

  handlePress = (id) => {
    console.log(id)
  }

  _renderActivity = (dataRow) => {
    return (
      <Card key={dataRow._id} onPress={()=>this.setState({selected_event: dataRow._id})} onPress={this.handlePress(dataRow._id)}>
        <CardItem>
          <Left>
            <Body>
              <Text style={styles.userNameText}>
                {dataRow.name}
              </Text>
              <View note style={{ flexDirection: "row" }}>
                <Text style={styles.timeText}>
                  {moment(dataRow.start_time).format('MMMM d, YYYY hh:mm') + ' ~ ' + moment(dataRow.end_time).format('MMMM d, YYYY hh:mm')}
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
            {dataRow.description.slice(0, 200) + ' ...'}
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
      </Card>
    )
  }

  render() {
    const navigation = this.props.navigation;
    const {eventSource, bidSource} = this.state;
    const {user} = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>My Activities</Title>
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
          <View style={styles.detailsBlockView}>
            <View style={styles.whatsOnMindView}>
              <Thumbnail square source={{uri: user.avatar}} style={styles.thumbnail} />
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
              {eventSource && eventSource.length > 0 && eventSource.map(dataRow => {
                return this._renderActivity(dataRow)
              })}
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});
export default connect(mapStateToProps)(Home);