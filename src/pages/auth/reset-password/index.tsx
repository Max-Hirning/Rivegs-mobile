import {TextUI} from "@src/UI/TextUI";
import React, {ReactElement} from "react";
import {Routes} from "@src/config/routes";
import {Primary} from "@src/config/themes";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import {ResetPasswordForm} from "@src/modules/authForm";
import {PageScroll} from "@src/components/wrappers/pageScroll";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export default function Page(): ReactElement {
  const {navigate} = useNavigation<ScreenRouteProp>();

  return (
    <PageScroll listStyle={styles.list}>
      <>
        <View style={styles.titleContainer}>
          <TextUI
            variant="h4"
            isBold={true}
          >Reset your password,</TextUI>
          <TextUI variant="p">Let’s reset your password, it won’t take long.</TextUI>
        </View>
        <ResetPasswordForm/>
        <TouchableOpacity
          style={styles.link}
          onPress={(): void => navigate(Routes.SignIn)}
        >
          <TextUI
            isBold={true}
            variant="label"
            style={styles.linkText}
          >Go back?</TextUI>
        </TouchableOpacity>
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
  link: {
    marginTop: 20,
    marginLeft: 10,
  },
  linkText: {
    color: Primary.Primary50,
  },
});
