import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const WelcomeScreens = ({navigation}) => {
  return (
    <LinearGradient
      style={styles.main}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={styles.main}>
        <View>
          <Image
            source={require("../assets/hero1.jpg")}
            style={styles.imgOne}
          />
          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.imgTwo}
          />
          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.imgThree}
          />
          <Image
            source={require("../assets/hero2.jpg")}
            style={styles.imgFour}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.textOne}>Let's Get</Text>
          <Text style={styles.textTwo}>Started</Text>
          <View style={styles.connect}>
            <Text style={styles.connectText}>
              Connect with each other with chatting
            </Text>
            <Text style={styles.calling}>
              Calling, Enjoy Safe and private texting
            </Text>
          </View>
          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Signup")}
            style={styles.button}
          />
          <View style={styles.ask}>
            <Text style={styles.askText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreens;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imgOne: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  imgTwo: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: -30,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },
  imgThree: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 130,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  imgFour: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 110,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  content: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 400,
    width: "100%",
  },
  textOne: {
    fontSize: 50,
    fontWeight: "800",
    color: COLORS.white,
  },
  textTwo: {
    fontSize: 46,
    fontWeight: "800",
    color: COLORS.white,
  },
  connect: {
    marginVertical: 22,
  },
  connectText: {
    fontSize: 16,
    color: COLORS.white,
    marginVertical: 4,
  },
  calling: {
    fontSize: 16,
    color: COLORS.white,
  },
  button: {
    marginTop: 22,
    width: "100%",
  },
  ask: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  askText: {
    fontSize: 16,
    color: COLORS.white,
  },
  loginText:{
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: 4
  }
});