import React, { Component } from "react";
import {
  Alert,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { style } from "../styles";
import Svg, { Path } from "react-native-svg";
import { FontAwesome5 } from "@expo/vector-icons";
import { G, Defs, Rect, ClipPath } from "react-native-svg";
import { useState } from "react";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={style.Backgrounds}>
      <View style={style.loginTop}>
        <Text style={style.loginTextStyle}>Welcome To</Text>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <View>
            <Svg
              width="91"
              height="91"
              viewBox="0 0 91 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1826 0.57901H43.15H48.1405C56.5588 0.57901 58.5751 2.59537 62.1541 6.12399L84.1324 27.9006C87.9131 31.6309 90.2823 34.0001 90.2823 42.6704V47.6609V80.0234L75.5629 65.4048V30.9756L62.507 18.0709L45.1159 35.3107L10.1826 0.57901ZM82.0152 90.8613L62.0533 71.0506V37.4279L45.1159 54.2645L28.1786 37.4279V73.8231L14.7194 60.4648V24.0695L0 9.45097V43.7794V48.7699C0 57.4402 2.36922 59.759 6.14988 63.5397L28.1282 85.3163C31.7072 88.8449 33.7235 90.8613 42.1418 90.8613H47.1323H82.0152ZM20.7685 90.8613L0 70.2441V90.8613H20.7685ZM69.4634 0.57901L90.2319 21.1962V0.57901H69.4634Z"
                fill="white"
              />
            </Svg>
          </View>
          <View style={{ marginLeft: 6 }}>
            <Svg
              width="204"
              height="78"
              viewBox="0 0 204 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5218 20.0627L0.382812 0V36.3448L7.23842 33.3707V17.996L17.5218 30.0437L27.8052 17.996V33.3707L34.6609 36.3448V0L17.5218 20.0627ZM7.54087 40.5791L0.685269 43.5533V77.2768C8.49865 77.2768 16.2616 77.2768 24.075 77.2768V68.4553L21.0505 70.4212H7.54087V40.5791ZM85.7251 77.3272V60.5915H76.9035L78.8694 63.616V68.2032C77.0547 69.8667 74.5847 70.8749 71.9634 70.8749C66.2168 70.8749 61.5792 66.2373 61.5792 60.4907C61.5792 54.744 66.2168 50.1064 71.9634 50.1064C75.2904 50.1064 78.2141 51.6691 80.1297 54.0887L85.2714 50.2072C82.1964 46.2249 77.3572 43.6541 71.9634 43.6541C62.6882 43.6541 55.1269 51.165 55.1269 60.4907C55.1269 69.7659 62.6378 77.3272 71.9634 77.3272C75.24 77.3272 78.2645 76.4199 80.8354 74.8068L85.7251 77.3272ZM187.753 49.6527C191.634 48.6446 198.389 50.3081 202.926 53.4334V43.6541L199.901 45.62C192.995 43.6037 187.652 43.2004 184.325 45.2672C181.25 47.1323 179.032 49.0982 179.536 53.5342C179.939 57.0628 180.443 58.928 185.736 61.2972C188.458 62.507 191.281 63.4648 194.003 64.5738C199.851 66.6405 198.49 70.7741 192.541 70.9757C187.601 71.1773 183.115 69.7155 178.931 67.4471V77.2264L181.956 75.2605C186.492 76.1174 190.828 77.5289 194.759 76.8735C198.843 76.2182 203.732 73.6978 203.984 68.4553C204.287 62.6582 200.153 60.0874 194.659 58.2727C192.037 57.4157 189.265 56.5084 187.047 54.8953C184.779 53.2822 185.585 50.2072 187.753 49.6527ZM87.2877 43.6541L89.2537 46.6786V74.2523L87.2877 77.2768H114.307V69.0098L111.282 70.9757H96.1597V63.616H109.518V57.3149H96.1597V49.9552H111.282L114.307 51.9211V43.6541C105.284 43.6541 96.2605 43.6541 87.2877 43.6541ZM26.0913 43.6541L28.0573 46.6786V74.2523L26.0913 77.2768H53.1105V69.0098L50.086 70.9757H34.9633V63.616H48.3217V57.3149H34.9633V49.9552H50.086L53.1105 51.9211V43.6541C44.0873 43.6541 35.1145 43.6541 26.0913 43.6541ZM123.431 5.89784L125.397 2.87331H114.609L116.575 5.89784V37.0505C124.389 37.0505 132.152 37.0505 139.965 37.0505V28.229L136.94 30.1949H123.431V5.89784ZM142.032 2.87331L143.998 5.89784V33.9756L142.032 37.0001H169.051V28.229L166.026 30.1949H150.904V23.3897H164.262V16.5341H150.904V9.6785H166.026L169.051 11.6445V2.87331C160.028 2.87331 151.005 2.87331 142.032 2.87331ZM143.393 77.3272V46.6786L145.258 43.7045C141.83 43.7045 138.453 43.7045 135.025 43.7045L136.89 46.6786V61.146L118.138 43.7045V74.3531L116.273 77.3272C119.701 77.3272 123.078 77.3272 126.506 77.3272L124.641 74.3531V59.8857L143.393 77.3272ZM146.77 43.6541L148.736 46.6282V74.2523L146.77 77.2264C151.408 77.2264 156.045 77.2264 160.683 77.2264C167.236 77.2264 175.453 70.4716 175.453 63.1623V56.962C175.453 49.6527 167.69 43.6541 161.137 43.6541C156.348 43.6541 151.559 43.6541 146.77 43.6541ZM155.289 50.1568H160.633C165.119 50.1568 168.799 53.8367 168.799 58.3231V62.1541C168.799 66.6405 164.665 70.7741 160.179 70.7741H155.289V50.1568ZM111.434 5.89784L113.4 2.87331C109.82 2.87331 106.191 2.87331 102.612 2.87331L104.578 5.89784V33.9756L102.612 37.0001C106.191 37.0001 109.82 37.0001 113.4 37.0001L111.434 33.9756V5.89784ZM73.5765 37.0505L75.5424 34.026V5.89784L73.5765 2.87331H88.8504C94.6474 2.87331 99.3354 7.00683 99.3354 12.0477C99.3354 14.4169 98.6297 16.5845 97.2687 18.1976C99.7891 20.1635 101.15 23.1377 101.15 26.4647C101.15 32.3121 95.9581 37.0505 89.5561 37.0505H73.5765ZM82.3476 31.6568H89.8586C92.3286 31.6568 94.345 29.2876 94.345 26.4143C94.345 23.5409 92.3286 21.1717 89.8586 21.1717H82.3476V31.6568ZM82.3476 15.8284H88.7496C90.8668 15.8284 92.5807 14.1145 92.5807 11.9973C92.5807 9.88014 90.8668 8.16624 88.7496 8.16624H82.3476V15.8284ZM55.0765 2.87331C64.5029 2.87331 72.1651 10.5355 72.1651 19.9619C72.1651 29.3884 64.5029 37.0505 55.0765 37.0505C45.65 37.0505 37.9878 29.3884 37.9878 19.9619C37.9878 10.485 45.65 2.87331 55.0765 2.87331ZM51.0437 19.9619L55.0765 24.8516L59.1092 19.9619L55.0765 15.0723L51.0437 19.9619ZM55.0765 9.6281C49.3803 9.6281 44.7426 14.2657 44.7426 19.9619C44.7426 25.6581 49.3803 30.2957 55.0765 30.2957C60.7727 30.2957 65.4103 25.6581 65.4103 19.9619C65.4103 14.2153 60.8231 9.6281 55.0765 9.6281Z"
                fill="white"
              />
            </Svg>
            <Svg
              width="168"
              height="13"
              viewBox="0 0 168 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.68457 0.872167H5.62464C6.58241 0.872167 7.33854 0.922582 7.79222 0.972991C8.29631 1.0234 8.69958 1.17462 9.10285 1.42667C9.50612 1.67871 9.80857 1.98117 10.0606 2.33403C10.3127 2.7373 10.4639 3.14057 10.4639 3.59425C10.4639 4.09834 10.3127 4.60243 10.0102 5.0057C9.70776 5.45938 9.25408 5.76183 8.74999 5.96347C9.50612 6.1651 10.0606 6.46756 10.4639 6.97164C10.8672 7.42532 11.0688 7.97982 11.0688 8.63514C11.0688 9.13923 10.9176 9.64331 10.6655 10.097C10.4135 10.5507 10.0606 10.9539 9.60694 11.206C9.15326 11.5084 8.59876 11.6597 7.94345 11.7101C7.54017 11.7605 6.532 11.7605 4.91891 11.7605H0.68457V0.872167ZM161.287 7.62696V5.91305H167.135C167.135 7.37491 166.883 8.38309 166.479 9.34086C166.127 10.097 165.32 11.0044 164.413 11.3572C163.455 11.7101 162.396 11.8613 161.388 11.8613C160.077 11.8613 158.968 11.6093 158.011 11.1556C157.053 10.6515 156.347 9.99618 155.843 9.08882C155.339 8.18146 155.137 7.22369 155.137 6.1651C155.137 5.0057 155.389 3.99752 155.944 3.09016C156.498 2.1828 157.255 1.52748 158.313 1.0234C159.12 0.670533 160.077 0.468903 161.287 0.468903C162.8 0.468903 164.009 0.771354 164.866 1.32585C165.723 1.88035 166.429 2.98934 166.53 4.14874L164.06 4.09834C163.657 2.83812 162.497 2.23321 161.287 2.33403C159.422 2.48526 158.918 4.70325 158.918 6.01388C158.918 7.42533 159.725 9.18963 161.237 9.18963C163.253 9.18963 163.556 8.28228 163.556 7.62696H161.287ZM64.4518 7.82859V6.1147H70.2488C70.2488 7.57655 69.9968 8.58473 69.5935 9.5425C69.2406 10.2986 68.4341 11.206 67.5267 11.5589C66.569 11.9117 65.5104 12.0629 64.5022 12.0629C63.1916 12.0629 62.0826 11.8109 61.1248 11.3572C60.1671 10.8531 59.4613 10.1978 58.9572 9.29046C58.4531 8.3831 58.2515 7.42533 58.2515 6.36674C58.2515 5.20734 58.5036 4.19915 59.0581 3.2918C59.6126 2.38444 60.3687 1.72912 61.4273 1.22504C62.2338 0.872174 63.1916 0.670535 64.4014 0.670535C65.9137 0.670535 67.1235 0.972987 67.9804 1.52748C68.8374 2.08198 69.5431 3.19098 69.6439 4.35038L67.1739 4.29997C66.7706 3.03975 65.6112 2.43484 64.4014 2.53566C62.5363 2.68689 62.0322 4.90488 62.0322 6.21551C62.0322 7.62696 62.8387 9.39127 64.351 9.39127C66.3673 9.39127 66.6698 8.48391 66.6698 7.82859H64.4518ZM136.889 11.8613V0.872167H139.309L144.4 8.23187V0.872167H146.719V11.8613H144.199L139.208 4.65283V11.8613H136.889ZM40.0539 11.8613V0.872167H42.4735L47.5648 8.23187V0.872167H49.8836V11.8613H47.3632L42.3727 4.65283V11.8613H40.0539ZM127.816 11.8613H125.396L124.438 9.34086H119.952L119.045 11.8613H116.625L120.96 0.872167H123.38L127.816 11.8613ZM123.682 7.47573L122.12 3.39261L120.607 7.47573H123.682ZM30.9803 11.8613H28.5103L27.5525 9.34086H23.0661L22.1587 11.8613H19.7391L24.0743 0.872167H26.4939L30.9803 11.8613ZM26.7964 7.47573L25.2337 3.39261L23.7214 7.47573H26.7964ZM97.52 0.872167H102.46C103.418 0.872167 104.174 0.922582 104.628 0.972991C105.132 1.0234 105.535 1.17462 105.938 1.42667C106.342 1.67871 106.644 1.98117 106.896 2.33403C107.148 2.7373 107.299 3.14057 107.299 3.59425C107.299 4.09834 107.148 4.60243 106.846 5.0057C106.543 5.45938 106.09 5.76183 105.585 5.96347C106.342 6.1651 106.896 6.46756 107.299 6.97164C107.703 7.42532 107.904 7.97982 107.904 8.63514C107.904 9.13923 107.753 9.64331 107.501 10.097C107.249 10.5507 106.896 10.9539 106.442 11.206C105.989 11.5084 105.434 11.6597 104.779 11.7101C104.376 11.7605 103.367 11.7605 101.754 11.7605H97.52V0.872167ZM100.04 2.68689V5.20733H101.654C102.611 5.20733 103.216 5.20733 103.468 5.15692C103.872 5.10651 104.224 5.0057 104.476 4.75366C104.729 4.55202 104.829 4.24956 104.829 3.8967C104.829 3.54384 104.728 3.2918 104.527 3.09016C104.325 2.88853 104.023 2.7373 103.569 2.68689C103.317 2.63648 102.611 2.63648 101.452 2.63648H100.04V2.68689ZM100.04 7.07246V9.99618H102.359C103.267 9.99618 103.821 9.99617 104.073 9.94577C104.426 9.89536 104.729 9.74413 104.981 9.49209C105.233 9.24004 105.333 8.93759 105.333 8.53432C105.333 8.18146 105.233 7.92941 105.081 7.67737C104.88 7.42532 104.628 7.27409 104.325 7.17328C103.972 7.07246 103.267 7.02206 102.107 7.02206H100.04V7.07246ZM3.20501 2.68689V5.20733H4.8181C5.77587 5.20733 6.38078 5.20733 6.63282 5.15692C7.03609 5.10651 7.38895 5.0057 7.641 4.75366C7.89304 4.55202 7.99386 4.24956 7.99386 3.8967C7.99386 3.54384 7.89304 3.2918 7.6914 3.09016C7.48977 2.88853 7.18732 2.7373 6.73364 2.68689C6.48159 2.63648 5.77587 2.63648 4.61646 2.63648H3.20501V2.68689ZM3.20501 7.07246V9.99618H5.52382C6.43118 9.99618 6.98568 9.99617 7.23772 9.94577C7.59059 9.89536 7.89304 9.74413 8.14509 9.49209C8.39713 9.24004 8.49795 8.93759 8.49795 8.53432C8.49795 8.18146 8.39713 7.92941 8.2459 7.67737C8.04427 7.42532 7.79222 7.27409 7.48977 7.17328C7.13691 7.07246 6.43118 7.02206 5.27177 7.02206H3.20501V7.07246Z"
                fill="white"
              />
            </Svg>
          </View>
        </View>
        <View style={style.loginArea}>
          <Text style={style.loginAreaText}>Username</Text>

          <TextInput
            style={style.loginAreaInput}
            placeholder="username@gmail.com"
            placeholderTextColor="white"
            onChangeText={setUsername}
            underlineColorAndroid="transparent"
          >
            {username}
          </TextInput>
          <Text style={style.loginAreaText}>Password</Text>
          <TextInput
            style={style.loginAreaInput}
            placeholder="* * * * * * *"
            onChangeText={setPassword}
            placeholderTextColor="white"
          >
            {password}
          </TextInput>
          <Text style={{ alignSelf: "flex-end", color: "white" }}>
            Forgot password?
          </Text>
        </View>
        <View style={{ alignItems: "center", marginLeft: 20 }}>
          <TouchableOpacity
            style={style.loginButton}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={style.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>You don't have an account? </Text>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "In developing...",
                "Maybe, I even do it right now :)"
              )
            }
          >
            <Text style={{ color: "#29C9FC" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={style.poweredBy}>Powered By</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginHorizontal: 100,
          }}
        >
          <Svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M11.9976 10.8657H22.8633V0H11.9976V10.8657Z"
              fill="#999999"
            />
            <Path
              d="M-0.000372887 10.8657H10.8662V0H0.000542641V10.8657H-0.000372887Z"
              fill="#999999"
            />
            <Path
              d="M11.9976 22.8673H22.8633V12.0017H11.9976V22.8673Z"
              fill="#999999"
            />
            <Path
              d="M-0.000372887 22.8673H10.8662V12.0017H0.000542641V22.8673H-0.000372887Z"
              fill="#999999"
            />
          </Svg>

          <Svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <G clip-path="url(#clip0)">
              <Path
                d="M23.1548 11.7588C23.1548 11.0017 23.0877 10.2829 22.9727 9.58334H12.1436V13.9054H18.344C18.0661 15.3238 17.2515 16.5217 16.044 17.3363V20.2113H19.7431C21.909 18.2083 23.1548 15.2567 23.1548 11.7588Z"
                fill="#999999"
              />
              <Path
                d="M12.1436 23C15.2486 23 17.8457 21.965 19.7432 20.2112L16.0441 17.3362C15.0091 18.0262 13.6961 18.4479 12.1436 18.4479C9.14405 18.4479 6.60447 16.4258 5.69405 13.6946H1.87988V16.6558C3.7678 20.4125 7.64905 23 12.1436 23Z"
                fill="#999999"
              />
              <Path
                d="M5.69397 13.6946C5.45439 13.0046 5.3298 12.2667 5.3298 11.5C5.3298 10.7333 5.46397 9.99543 5.69397 9.30543V6.34418H1.8798C1.09397 7.89668 0.643555 9.64084 0.643555 11.5C0.643555 13.3592 1.09397 15.1033 1.8798 16.6558L5.69397 13.6946Z"
                fill="#999999"
              />
              <Path
                d="M12.1436 4.55208C13.8399 4.55208 15.354 5.13667 16.552 6.27709L19.8295 2.99958C17.8457 1.14042 15.2486 0 12.1436 0C7.64905 0 3.7678 2.5875 1.87988 6.34417L5.69405 9.30542C6.60447 6.57417 9.14405 4.55208 12.1436 4.55208Z"
                fill="#999999"
              />
            </G>
            <Defs>
              <ClipPath id="clip0">
                <Rect
                  width="23"
                  height="23"
                  fill="white"
                  transform="translate(0.399414)"
                />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
      </View>
    </View>
  );
}
