import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, StatusBar, Platform } from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  View,
  Toast,
  Icon
} from "native-base";
import { Field, reduxForm } from "redux-form";
import { setUserToken } from "../../actions";
import styles from "./styles";
import api from '../../ApiConfig.js';
import socket from '../../SocketConfig.js';

const commonColor = require("../../theme/variables/commonColor");
const logo = require("../../../assets/logo.png");

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength4 = minLength(4);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

declare type Any = any;

class LoginForm extends Component {
  textInput: Any;
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  state = {
    email: "admin@admin.com",
    password: "123456"
  };

  handleChangeEmail(value) {
    this.setState({email: value})
  }

  handleChangePassword(value) {
    this.setState({password: value})
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} style={styles.inputGrp}>
          <Icon
            active
            name={
              input.name === "email" ? "ios-mail-outline" : "ios-unlock-outline"
            }
            style={{ color: commonColor.contentTextColor }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor={commonColor.lightTextColor}
            style={{ color: commonColor.contentTextColor }}
            placeholder={input.name === "email" ? "Email or Phone" : "Password"}
            secureTextEntry={input.name === "password" ? true : false}
            onChangeText={(data)=>{
              input.onChange(data);
            }}
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={styles.formErrorIcon}
                onPress={() => this.textInput._root.clear()}
                name="close"
              />
            : <Text />}
        </Item>
        {touched && error
          ? <Text style={styles.formErrorText1}>
              {error}
            </Text>
          : <Text style={styles.formErrorText2}>error here</Text>}
      </View>
    );
  }

  login() {
    if (this.props.valid) {
      api.post('/auth/login', {
        'email': this.state.email,
        'password' : this.state.password
      }).then(response => {
        if (response.data.decodedToken) {
          this.props.setUserToken(response.data.decodedToken);
          socket.emit('login', response.data.decodedToken);
          this.props.navigation.navigate("Drawer");
        }
      }).catch(error => {
        Toast.show({
          text: "Incorrect Username or Password provided!",
          duration: 2500,
          position: "top",
          textStyle: { textAlign: "center" }
        });
      })
    } else {
      Toast.show({
        text: "Enter Valid Username & Password!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  handleChangeEmail = (data) => {
    this.setState({"email": data });
  }

  handleChangePassword = (data) => {
      this.setState({"password": data});
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={styles.backgroundContainer}>
        <StatusBar
          backgroundColor={
            Platform.OS === "android"
              ? commonColor.statusBarColor
              : "transparent"
          }
          barStyle="light-content"
        />
        <Content>
          <View style={styles.logoContainerView}>
            <Image source={logo} style={styles.imageShadow} />
          </View>
          <View style={styles.formContainerView}>
            <View style={styles.formView}>
              <Field
                name="email"
                component={this.renderInput}
                type="email"
                validate={[email, required]}
                onChange={(data)=>this.handleChangeEmail(data)}
              />
              <Field
                name="password"
                component={this.renderInput}
                type="password"
                validate={[alphaNumeric, minLength4, maxLength15, required]}
                onChange={(data)=>this.handleChangePassword(data)}
              />
              <Button
                block
                style={styles.loginBtn}
                onPress={() => this.login()}
              >
                <Text style={{ lineHeight: 16, fontWeight: "bold" }}>
                  LOG IN
                </Text>
              </Button>
              <Button
                transparent
                style={{ alignSelf: "center" }}
                onPress={() => navigation.navigate("Drawer")}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </Button>
            </View>
          </View>
          <View style={styles.footerView}>
            <Button
              bordered
              block
              style={styles.createAccountBtn}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.createAccountBtnTxt}>
                CREATE NEW FRIENDEALER
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const Login = reduxForm({
  form: "login"
})(LoginForm);

function bindAction(dispatch) {
  return {
    setUserToken: url => dispatch(setUserToken(url))
  };
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});
export default connect(mapStateToProps, bindAction)(Login);