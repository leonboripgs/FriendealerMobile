import React, { Component } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Text,
  Item,
  Button,
  Icon,
  Footer,
  Input,
  Thumbnail,
  Textarea,
  Left,
  Right,
  Card,
  CardItem, 
  Body,
  Title,
  H2,
  Tab,
  Tabs,
  Toast
} from "native-base";
import styles from "./styles";
import api from '../../ApiConfig.js';

const chatContactsImg = require("../../../assets/chatcontacts.png");
const commonColor = require("../../theme/variables/commonColor");

class ChangePwd extends Component {
 
  state = {
    account: [],
    cur_pwd: '',
    new_pwd: '',
    re_pwd: '',
  }

  componentDidMount() {
    api.post('/auth/getAccountDataById', {_id: this.props.user.user_id}).then((res)=>{
      this.setState({account: res.data.doc});
    })
  }

  handlePress = () => {
    const {cur_pwd, new_pwd, re_pwd} = this.state;
    const {user} = this.props;
    if (new_pwd !== re_pwd) {
      Toast.show({
        text: "New password is not matched!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
    else {
      api.post('/auth/changePassword', {oldpassword: cur_pwd, password: new_pwd, accountId: user.user_id}).then(()=>{
        Toast.show({
          text: "Successfully changed!",
          duration: 2500,
          position: "top",
          textStyle: { textAlign: "center" }
        });
        this.setState({cur_pwd: '', new_pwd: '', re_pwd: ''});
      }).catch(error => {
        Toast.show({
          text: "Old password is not correct!",
          duration: 2500,
          position: "top",
          textStyle: { textAlign: "center" }
        });
      })
    }
  }

  render() {
    const {account, cur_pwd, new_pwd, re_pwd} = this.state;
    const navigation = this.props.navigation;

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body style={{flex: 1.5}}>
            <Title>Change Password</Title>
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

          <View style={styles.infoBlockView}>
            <Icon name="ios-key" style={{color: 'orange'}} />
            <Input 
              placeholderTextColor={commonColor.lightTextColor}
              placeholder="Enter current password"
              style={styles.input_area}
              secureTextEntry={true}
              onChangeText={(value)=>this.setState({cur_pwd: value})}
              value={cur_pwd}
            />
          </View>
          <View style={styles.infoBlockView}>
            <Icon name="ios-key" style={{color: '#2874F0'}} />
            <Input
              placeholderTextColor={commonColor.lightTextColor}
              placeholder="New password"
              style={styles.input_area}
              secureTextEntry={true}
              onChangeText={(value)=>this.setState({new_pwd: value})}
              value={new_pwd}
            />
          </View>
          <View style={styles.infoBlockView}>
            <Icon name="ios-key" style={{color: 'green'}} />
            <Input
              placeholderTextColor={commonColor.lightTextColor}
              placeholder="Re-enter password"
              style={styles.input_area}
              secureTextEntry={true}
              onChangeText={(value)=>this.setState({re_pwd: value})}
              value={re_pwd}
            />
          </View>
          <Footer style={{backgroundColor: '#fff'}}>
            <Button style={{alignItems: 'center'}} onPress={()=>{
              this.handlePress();
            }} ><Text style={{color: 'white', fontSize: 18}}>Change Password</Text></Button>
          </Footer>

        </Content>

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});
export default connect(mapStateToProps)(ChangePwd);