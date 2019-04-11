import React, { Component } from "react";
import { Image, View, TouchableOpacity  } from "react-native";
import { connect } from "react-redux";
import StarRating from 'react-native-star-rating';
import {width, height, totalSize} from 'react-native-dimension';
import HtmlText from 'react-native-html-to-text';
import {
  Container,
  Header,
  Content,
  Text,
  Item,
  Button,
  Icon,
  Input,
  Thumbnail,
  Textarea,
  Left,
  Right,
  Body,
  Title,
  H2,
  Tab,
  Tabs
} from "native-base";
import styles from "./styles";
import api from '../../ApiConfig.js';
import moment from  "moment/moment.js";

const chatContactsImg = require("../../../assets/chatcontacts.png");
const workImg = require("../../../assets/work.png");
const academicsImg = require("../../../assets/academics.png");
const commonColor = require("../../theme/variables/commonColor");

class Profile extends Component {
 
  state = {
    profile: [],
    account: [],
    update_info: false,
  }

  componentDidMount() {
    api.post('/profile/getUserProfileById', {user_id: this.props.user.user_id}).then((res)=>{
      this.setState({profile: res.data.doc})
    })
    api.post('/auth/getAccountDataById', {_id: this.props.user.user_id}).then((res)=>{
      this.setState({account: res.data.doc});
    })
  }

  handleEditProfile = () => {
    const {update_info, profile} = this.state;
    if (update_info) {
      api.post('/profile/saveUserProfileById', {profile});
    }
    this.setState({update_info: !update_info});
  }

  _renderProfile = () => {
    const {profile, account, update_info} = this.state;
    const {user} = this.props;

    return (
      <View style={{marginTop: 20}}>
        <View style={styles.infoContainerView}>
          <View style={styles.infoBlockView}>
            <Image source={workImg} style={styles.infoIcon} />
            {update_info === false &&
            <Text style={styles.infoText}>{profile.first_name + ' ' + profile.last_name}</Text>}
            {update_info === true &&
              <View style={styles.infoBlockView}>
                <Input
                  name="first_name"
                  style={{ color: commonColor.contentTextColor, borderBottomWidth: 1, borderBottomColor: '#888', marginLeft: 16 }}
                  placeholderTextColor={commonColor.lightTextColor}
                  placeholder="First Name"
                  onChangeText={(data)=>{
                    var tmp = profile;
                    tmp.first_name = data;
                    this.setState({profile: tmp});
                  }}
                  value={profile.first_name}
                />
                <Input
                  name="last_name"
                  style={{ color: commonColor.contentTextColor, borderBottomWidth: 1, borderBottomColor: '#888', marginLeft: 16, marginRight: 8 }}
                  placeholderTextColor={commonColor.lightTextColor}
                  placeholder="Last Name"
                  onChangeText={(data)=>{
                    var tmp = profile;
                    tmp.last_name = data;
                    this.setState({profile: tmp});
                  }}
                  value={profile.last_name}
                />
              </View>
            }
          </View>
          <View style={styles.infoBlockView}>
            <Icon name="ios-contact" style={{fontSize: 24, color: '#555'}}></Icon>
            <Text style={styles.infoText}>{'Lives in ' + profile.location}</Text>
          </View>
          <View style={styles.infoBlockView}>
            <Image source={academicsImg} style={styles.infoIcon} />
            <Text style={styles.infoText}>{'Member since ' + moment(profile.created_at).format("MMMM DD, YYYY")}</Text>
          </View>
          <View style={styles.infoBlockView}>
            <Icon name='ios-trophy' style={{fontSize: 24, color: '#555', marginRight: 16}} />
            <StarRating
              starStyle={{fontSize: 24}}
              disabled={true}
              maxStars={5}
              rating={account.rating}
              fullStarColor={'orange'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              emptyStar={'ios-star-outline'}
            />
            <Text style={styles.infoText}>{account.rating !== undefined && account.rating.toFixed(1)}</Text>
          </View>
          <View style={styles.infoBlockView}>
            <Icon name='ios-bonfire' style={{fontSize: 24, color: '#555', marginRight: 16}} />
            <StarRating
              starStyle={{width: 8, height: 22, marginRight: 1}}
              disabled={true}
              maxStars={10}
              rating={account.earning}
              fullStarColor={'#3B5A94'}
              fullStar={'ios-square'}
              iconSet={'Ionicons'}
              emptyStar={'ios-square-outline'}
            />
            <Text style={styles.infoText}>{account.earning !== undefined && account.earning.toFixed(1)}</Text>
          </View>
          <View style={styles.infoBlockView}>
            <Icon name='logo-usd' style={{fontSize: 24, color: '#555', marginRight: 8}} />
            {update_info === false &&
            <Text style={styles.infoText}>{profile.hourly_rate + ' USD/hr'}</Text>}
            {update_info === true && 
                <Input
                  name="hourly_rate"
                  style={{ color: commonColor.contentTextColor, borderBottomWidth: 1, borderBottomColor: '#888', marginLeft: 16 }}
                  placeholderTextColor={commonColor.lightTextColor}
                  placeholder="Hourly"
                  onChangeText={(data)=>{
                    var tmp = profile;
                    tmp.hourly_rate = data;
                    this.setState({profile: tmp});
                  }}
                  value={profile.hourly_rate.toString()}
                />
            }
          </View>
          <View style={{borderBottomWidth: 1, marginBottom: 16, marginTop: 16}}>
          </View>
          <View style={styles.infoBlockView}>
            {update_info === false &&
              <Text style={styles.headline_text}>
                {profile.headline}
              </Text>}
            {update_info === true &&
              <Textarea rowSpan={3} bordered placeholder="Headline"
                style={{marginLeft: 16}}
                onChangeText={(data)=>{
                  var tmp = profile;
                  tmp.headline = data;
                  this.setState({profile: tmp});
                }}
                value={profile.headline}
              />
            }
          </View>
          <View style={{borderBottomWidth: 1, width: width(85), marginLeft: width(3), marginBottom: 16}}>
          </View>
          <View style={styles.infoBlockView}>
            {update_info === false && profile.description &&
              <HtmlText style={styles.description_text} html={profile.description}></HtmlText>
              // <Text style={styles.description_text}>
              //   {profile.description}
              // </Text>
            }
            {update_info === true &&
              <Textarea rowSpan={15} bordered placeholder="Description"
                style={{marginLeft: 16}}
                onChangeText={(data)=>{
                  var tmp = profile;
                  tmp.description = data;
                  this.setState({profile: tmp});
                }}
                value={profile.description}
              />
            }

          </View>
        </View>
      </View>
    )
  }

  _renderReviews = () => {
    const {profile} = this.state;
    return (
      <View style={{marginTop: 20}}>
        {
          profile.provide_feedback !== undefined && profile.provide_feedback.map((cursor)=>(
            <View style={styles.reviewBlockView} key={cursor._id}>
              <Text style={styles.feedback_text}>{'"' + cursor.feedback + '"'}</Text>
              <View style={styles.infoBlockView}>
                <Text style={styles.rating_num}>{((cursor.rating_quality + cursor.rating_communication + cursor.rating_expertise + cursor.rating_professionalism + cursor.rating_hire_again) / 5).toFixed(1)}</Text>
                <StarRating
                  starStyle={{fontSize: 20}}
                  disabled={true}
                  maxStars={5}
                  rating={(cursor.rating_quality + cursor.rating_communication + cursor.rating_expertise + cursor.rating_professionalism + cursor.rating_hire_again) / 5}
                  fullStarColor={'orange'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  emptyStar={'ios-star-outline'}
                    />
              </View>
              <View style={styles.infoBlockView}>
                <Thumbnail square source={{uri: cursor.joiner_avatar}} style={{borderRadius: 4, borderWidth: 1, borderColor: '#aaa'}} />
                <View style={{ marginTop: 8 }}>
                  <Text style={{color: '#888', marginLeft: 8, fontSize: 13}}>by <Text style={{color: '#333', fontWeight: 'bold'}}>{cursor.joiner_name}</Text></Text>
                  <Text style={styles.timeText}>{moment(cursor.created_at).format("MMMM DD, YYYY")}</Text>
                </View>
              </View>
            </View>
          ))
        }

        {
          profile.receive_feedback !== undefined && profile.receive_feedback.map((cursor)=>(
            <View style={styles.reviewBlockView} key={cursor._id}>
              <Text style={styles.feedback_text}>{'"' + cursor.feedback + '"'}</Text>
              <View style={styles.infoBlockView}>
                <Text style={styles.rating_num}>{((cursor.rating_clarity + cursor.rating_communication + cursor.rating_payment + cursor.rating_professionalism + cursor.rating_work_again) / 5).toFixed(1)}</Text>
                <StarRating
                  starStyle={{fontSize: 20}}
                  disabled={true}
                  maxStars={5}
                  rating={(cursor.rating_clarity + cursor.rating_communication + cursor.rating_payment + cursor.rating_professionalism + cursor.rating_work_again) / 5}
                  fullStarColor={'orange'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  emptyStar={'ios-star-outline'}
                    />
              </View>
              <View style={styles.infoBlockView}>
                <Thumbnail square source={{uri: cursor.joiner_avatar}} />
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.userName2Text}>{'By ' + cursor.joiner_name + ' in ' + cursor.joiner_country}</Text>
                  <Text style={styles.timeText}>{moment(cursor.created_at).format("MMMM DD, YYYY")}</Text>
                </View>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
  
  render() {
    const {update_info, account} = this.state;
    const {user} = this.props;
    const navigation = this.props.navigation;
    console.log(user);
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body style={{flex: 1.5}}>
            <Title>User Profile</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => navigation.openDrawer()}
            >
              <Image source={chatContactsImg} style={styles.sidebarIcon} />
            </Button>
          </Right>
        </Header>

        <Content style={{ backgroundColor: "#fff" }}>
          <View style={styles.coverBlock}>
            <Image source={{uri: account.background_url}} style={styles.coverImage} />
          </View>

          <View>
            <View style={styles.profileImgInnerView}>
              <Image source={{uri: user.avatar}} style={styles.profileImg} />
              <TouchableOpacity>
                <View style={styles.profileImgEditView}>
                  <Icon name="videocam" style={styles.editCamIcon} />
                  <Text style={{ fontSize: 15 }}>Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.profileNameContainerView}>
            <H2 style={{ alignSelf: "center" }}>{user.user_name}</H2>
            <Text style={styles.userNameText}>{user.email}</Text>
            <Text style={styles.pendingPostText}>{user.membership}</Text>
          </View>

          <TouchableOpacity transparent style={styles.optionBtn} onPress={()=>{this.handleEditProfile()}} >
            <Text style={styles.optionText}>{update_info ? 'Save Profile' : 'Edit Profile'}</Text>
          </TouchableOpacity>

          <Container>

            <Tabs tabBarUnderlineStyle={{backgroundColor: '#3B5A94'}}>

              <Tab heading="Profile" tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'white'}} textStyle={{color: '#888'}} activeTextStyle={{color: '#3B5A94'}} >
                
                {this._renderProfile()}
                
              </Tab>

              <Tab heading="Review" tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'white'}} textStyle={{color: '#888'}} activeTextStyle={{color: '#3B5A94'}} >
                {
                  this._renderReviews()
                }
              </Tab>

            </Tabs>


          </Container>

        </Content>

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});
export default connect(mapStateToProps)(Profile);