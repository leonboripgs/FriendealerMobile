import React, {Component} from "react";
import {Image} from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  View,
  ListItem,
  Radio,
  Toast
} from "native-base";
import {Grid, Col} from "react-native-easy-grid";
import styles from "./styles";
import api from '../../ApiConfig.js';

const commonColor = require("../../theme/variables/commonColor");
const logo = require("../../../assets/logo.png");

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      reenterpassword: "",
      password: "",
      itemSelected: "Hire"
    };
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate() {
    const navigation = this.props.navigation;
    const {username, email, reenterpassword, password, itemSelected} = this.state;

    if (username === '') {
      Toast.show({
        text: "Please enter username!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
    else if (email === '') {
      Toast.show({
        text: "Please enter email!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
    else if (password !== reenterpassword) {
      Toast.show({
        text: "Password and re-enter password are not matched!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
    else {
      api.post('/auth/register', {user_name: username, email: email, password: password, accountType: itemSelected});
      navigation.navigate("Login");
    }
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={styles.background}>
        <Content>
          <View style={styles.logoContainerView}>
            <Image source={logo} style={styles.imageShadow} />
          </View>
          <View style={styles.formContainerView}>
            <Grid>
              <Col style={{paddingRight: 10}}>
                <Item borderType="underline" style={styles.inputGrp}>
                  <Input
                    placeholder="Username"
                    placeholderTextColor={commonColor.lightTextColor}
                    onChangeText={username => this.setState({username})}
                    style={{color: "#000"}}
                  />
                </Item>
              </Col>
              <Col style={{paddingLeft: 10}}>
              </Col>
            </Grid>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Email address"
                placeholderTextColor={commonColor.lightTextColor}
                onChangeText={email => this.setState({email})}
                style={{color: "#000"}}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="New password"
                placeholderTextColor={commonColor.lightTextColor}
                secureTextEntry
                onChangeText={password => this.setState({password})}
                style={{color: "#000"}}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Re-enter password"
                placeholderTextColor={commonColor.lightTextColor}
                onChangeText={reenterpassword =>
                  this.setState({reenterpassword})}
                style={{color: "#000"}}
              />
            </Item>
            <Grid style={{marginVertical: 2}}>
              <Col>
                <ListItem
                  style={{
                    paddingRight: 15,
                    marginLeft: 0,
                    borderBottomWidth: 0
                  }}
                >
                  <Radio selected={this.state.itemSelected === "Work"} />
                  <Text
                    onPress={() => this.setState({itemSelected: "Work"})}
                    style={{
                      marginLeft: 5,
                      color: commonColor.contentTextColor
                    }}
                  >
                    Work
                  </Text>
                </ListItem>
              </Col>
              <Col>
                <ListItem
                  style={{
                    paddingLeft: 15,
                    marginLeft: 0,
                    borderBottomWidth: 0
                  }}
                >
                  <Radio selected={this.state.itemSelected === "Hire"} />
                  <Text
                    style={{
                      marginLeft: 5,
                      color: commonColor.contentTextColor
                    }}
                    onPress={() => this.setState({itemSelected: "Hire"})}
                  >
                    Hire
                  </Text>
                </ListItem>
              </Col>
            </Grid>
            <Button
              block
              style={styles.createBtn}
              onPress={() => {
                this.handleCreate();
              }}
            >
              <Text style={{lineHeight: 16, fontWeight: "bold"}}>CREATE</Text>
            </Button>
          </View>
          <View style={styles.footerView}>
            <Button
              transparent
              style={styles.signInBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.signInBtnText}>
                Have an Account already? Sign In
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SignUp;
