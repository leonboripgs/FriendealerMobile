import React, { Component } from "react";
import { Image, View } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  Left,
  Right,
  Body,
  Title,
  Tab,
  Tabs
} from "native-base";
import styles from "./styles";
import api from '../../ApiConfig.js';

const chatContactsImg = require("../../../assets/chatcontacts.png");

class Membership extends Component {
 
  state = {
    account: [],
    membership: [],
  }

  componentDidMount() {
    api.post('/auth/getAccountDataById', {_id: this.props.user.user_id}).then((res)=>{
      this.setState({account: res.data.doc});
    })
    api.post('/base/getAllMemberships', {}).then((res)=>{
      this.setState({membership: res.data.doc});
    })
  }

  handlePress = (membership) => {
    var account = this.state.account;
    account.membership = membership;
    account.membership_date = Date.now();
    api.post('/auth/updateAccountData', {user: account});
    this.setState({account});
  }

  _renderMembership = (cursor) => {
    const {account} = this.state;

    return (
      <View style={styles.full_height}>
        <Text style={styles.header_text}>{cursor.name}</Text>
        <View style={styles.membership_content}>
            <View style={styles.infoBlockView}>
              <Text>{cursor.photos_per_acts + ' photos per Activity'}</Text>
            </View>
            <View style={styles.infoBlockView}>
              <Text>{cursor.free_list_cnt + ' free listing per month'}</Text>
            </View>
            <View style={styles.infoBlockView}>
              <Text>{'$ ' + cursor.insertion_list_fee + ' insertion fees per listing after free allotment'}</Text>
            </View>
            <View style={styles.infoBlockView}>
              <Text>{cursor.fee_paid_acts + '% of insertion fees for paid activity'}</Text>
            </View>
        </View>
        <Footer style={styles.bottom_but}>
        {cursor.name === account.membership &&
          <Text style={styles.white_text}>You are currently on this plan</Text>}
        {cursor.name !== account.membership &&
          <Button style={styles.plan_but} onPress={()=>{
            this.handlePress(cursor.name)
          }}><Text style={{textAlign: 'center', color: 'white', fontSize: 20, marginTop: 8}}>Get this plan</Text></Button>}
        </Footer>
      </View>
    )
  }

  render() {
    const {membership, account} = this.state;
    const navigation = this.props.navigation;
    var membership_name = [];

    membership && membership.map((cursor)=>{
      membership_name[cursor._id] = cursor.name;
    })

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body style={{flex: 1.5}}>
            <Title>Membership</Title>
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

          <Tabs>
            {membership && membership.map((cursor)=>(
              <Tab heading={cursor.name} key={cursor._id}>
                {
                  this._renderMembership(cursor)
                }
              </Tab>
            ))}
          </Tabs>

        </Content>

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});
export default connect(mapStateToProps)(Membership);