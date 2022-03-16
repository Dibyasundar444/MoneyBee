import React from "react";
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TextInput, 
    StyleSheet, 
    Animated, 
    Dimensions, 
    Vibration, 
    Alert, 
    KeyboardAvoidingView, 
    Platform
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { image_Logo_link2, image_Pic1_link2, image_Pic_link2 } from './assets/imageLinks.js';

const WelcomePage2  = ({navigation}) => {

	return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
                <View style = {noneModeStyles._page25}    >
                    <View style = {noneModeStyles._Rectangle_16}    >
                    </View>
                    <View style = {noneModeStyles._Start_Button}    >
                        <View style = {noneModeStyles._Rectangle_10}    >
                        </View>
                        <Text style = {noneModeStyles._GET_STARTED}   >
                            GET STARTED
                        </Text>
                        <View style = {noneModeStyles._Group_1786}    >
                            <View style = {noneModeStyles.style6}    >
                                <View style = {noneModeStyles.style7}   >
                                    <Svg style={{height: 40, width: 45}} viewBox = "0 0 45 40">
                                        <Path fill = {"#FFBD00"}     d = "M5 40C18.3723 33.6008 23.3898 29.9918 26 23.5C31.0033 12.1075 35.3574 6.21116 45 5.3905e-05C33.0124 2.31804 27.6713 8.21553 21.5 23.5C16.1048 30.923 11.0331 34.4167 0 40H5Z"/>
                                    </Svg>
                                </View>
                            </View>
                            <View style = {noneModeStyles.style8}    >
                                <View style = {noneModeStyles.style9}   >
                                    <Svg style={{height: 40, width: 61}} viewBox = "0 0 61 40">
                                        <Path fill = {"#660EB1"}     d = "M40 0C67 1 66.3776 39.5446 40 40H0C9.68525 36.4508 14.6655 33.8947 20.5 25.5C25.7568 13.9127 29.0124 7.62908 40 0Z"/>
                                    </Svg>
                                </View>
                            </View>
                        </View>
                        <View style = {noneModeStyles.style10}    >
                            <View style = {noneModeStyles.style11}   >
                                <Svg style={{height: 19, width: 13}} viewBox = "0 0 13 19">
                                    <Path fill = {"none"}   stroke = {"white"} strokeWidth = {3} d = "M1.07265 1.13584L10.4461 9.98858L1.07265 17.7998"/>
                                </Svg>
                            </View>
                        </View>
                    </View>
                    <Text style = {noneModeStyles._Main_Text}   >
                        LOAN OF ANY AMOUNT FROM
                    </Text>
                    <Text style = {noneModeStyles._Sub_Text}   >
                        ₹50,000 - ₹2,00,000
                    </Text>
                    <View style = {noneModeStyles._Logo_container}    >
                        <View style = {noneModeStyles._Logo}   >
                            <Image style={{height: "100%", width: "100%"}} source = {{uri: image_Logo_link2}}/>
                        </View>
                    </View>
                    <View style = {noneModeStyles._Pic_container}    >
                        <View style = {noneModeStyles._Pic}   >
                            <Image style={{height: "100%", width: "100%"}} source = {{uri: image_Pic_link2}}/>
                        </View>
                    </View>
                    <View style = {noneModeStyles._Pic1_container}    >
                        <View style = {noneModeStyles._Pic1}   >
                            <Image style={{height: "100%", width: "100%"}} source = {{uri: image_Pic1_link2}}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
export default WelcomePage2;

const noneModeStyles = StyleSheet.create({
_page25: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(0, 0, 0, 0)",
	},
_Rectangle_16: {
	width: 360,
	height: 223,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 417,
	},
_Start_Button: {
	width: 300.94,
	height: 40.0668,
	position: "absolute",
	left: 30,
	top: 563,
	},
_Rectangle_10: {
	width: 300,
	height: 40,
	backgroundColor: "rgb(131, 44, 204)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 50,
	},
_GET_STARTED: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 115,
	top: 12,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Roboto",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_1786: {
	width: 64.9398,
	height: 40.0668,
	position: "absolute",
	left: 236,
	top: 0,
	},
style6: {
	width: 64.9398,
	height: 40.0668,
	position: "absolute",
	left: 0,
	top: 0,
	},
style7: {
	},
style8: {
	width: 60.0173,
	height: 40,
	position: "absolute",
	left: 4,
	top: 0,
	},
style9: {
	},
style10: {
	width: 9,
	height: 16,
	position: "absolute",
	left: 276,
	top: 12,
	},
style11: {
	},
_Main_Text: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 73,
	top: 440,
	color: "rgb(250, 22, 32)",
	fontSize: 16,
	fontWeight: "700",
	fontFamily: "Roboto",
	letterSpacing: -0.16,
	textAlign: "left",
	},
_Sub_Text: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 62,
	top: 459,
	color: "rgb(131, 44, 204)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Roboto",
	letterSpacing: 1.2,
	textAlign: "center",
	},
_Logo_container: {
	width: 219,
	height: 130.721,
	position: "absolute",
	left: 71,
	top: 25,
	},
_Logo: {
	width: "100%",
	height: "100%",
	},
_Pic_container: {
	width: 271.25,
	height: 217,
	position: "absolute",
	left: 45,
	top: 198,
	},
_Pic: {
	width: "100%",
	height: "100%",
	},
_Pic1_container: {
	width: 297.65,
	height: 32.53,
	position: "absolute",
	left: 31,
	top: 508,
	},
_Pic1: {
	width: "100%",
	height: "100%",
	},
})

