import React, {ReactElement} from "react";
import {TextUI} from "../../../UI/TextUI";
import {Routes} from "../../../config/routes";
import {Primary} from "../../../config/themes";
import {SignInForm} from "../../../modules/authForm";
import {useNavigation} from "@react-navigation/native";
import {AuthRouteProp} from "../../../types/navigation";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {PageScroll} from "../../../components/wrappers/pageScroll";

export default function Page(): ReactElement {
  const {navigate} = useNavigation<AuthRouteProp>();

  return (
    <PageScroll listStyle={styles.list}>
      <>
        <View style={styles.titleContainer}>
          <TextUI
            variant="h2"
            isBold={true}
          >Hello,</TextUI>
          <TextUI variant="h4">Welcome Back!</TextUI>
        </View>
        <SignInForm/>
        <View style={styles.linkContainer}>
          <TextUI variant="label">Don’t have an account?</TextUI>
          <TouchableOpacity
            style={styles.link}
            onPress={(): void => navigate(Routes.SignUp)}
          >
            <TextUI
              isBold={true}
              variant="label"
              style={styles.linkText}
            >Sign up</TextUI>
          </TouchableOpacity>
        </View>
      </>
    </PageScroll>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  titleContainer: {
    width: "100%",
    maxWidth: 360,
    marginBottom: 40,
  },
  linkContainer: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  link: {
    marginLeft: 10,
  },
  linkText: {
    color: Primary.Primary50,
  },
});
