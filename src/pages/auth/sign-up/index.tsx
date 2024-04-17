import React, {ReactElement} from "react";
import {TextUI} from "../../../UI/TextUI";
import {Routes} from "../../../config/routes";
import {Primary} from "../../../config/themes";
import {SignUpForm} from "../../../modules/authForm";
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
            variant="h4"
            isBold={true}
          >Create an account</TextUI>
          <TextUI variant="p">Let’s help you set up your account, it won’t take long.</TextUI>
        </View>
        <SignUpForm/>
        <View style={styles.linkContainer}>
          <TextUI variant="label">Already a member?</TextUI>
          <TouchableOpacity
            style={styles.link}
            onPress={(): void => navigate(Routes.SignIn)}
          >
            <TextUI
              isBold={true}
              variant="label"
              style={styles.linkText}
            >Sign In</TextUI>
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
