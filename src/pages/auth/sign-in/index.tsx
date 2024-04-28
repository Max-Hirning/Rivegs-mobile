import {TextUI} from "@src/UI/TextUI";
import React, {ReactElement} from "react";
import {Routes} from "@src/config/routes";
import {Primary} from "@src/config/themes";
import {SignInForm} from "@src/modules/authForm";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import {PageScroll} from "@src/components/wrappers/pageScroll";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export default function Page(): ReactElement {
  const {navigate} = useNavigation<ScreenRouteProp>();

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
        <View style={styles.linksContainer}>
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
          <TouchableOpacity onPress={(): void => navigate(Routes.Home)}>
            <TextUI
              isBold={true}
              variant="label"
              style={styles.linkText}
            >Go back</TextUI>
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
  linksContainer: {
    gap: 15,
    alignItems: "center",
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
