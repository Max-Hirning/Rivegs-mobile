import {TextUI} from "@src/UI/TextUI";
import React, {ReactElement} from "react";
import {Routes} from "@src/config/routes";
import {Primary} from "@src/config/themes";
import {SignUpForm} from "@src/modules/authForm";
import {AuthRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import {PageScroll} from "@src/components/wrappers/pageScroll";
import {StyleSheet, TouchableOpacity, View} from "react-native";

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
