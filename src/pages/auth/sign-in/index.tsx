import {TextUI} from "@src/UI/TextUI";
import React, {ReactElement} from "react";
import {Routes} from "@src/config/routes";
import {Primary} from "@src/config/themes";
import {SignInForm} from "@src/modules/authForm";
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
