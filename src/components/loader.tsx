import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {QueryKeys} from "@src/config/queryKeys";
import {useIsFetching, useIsMutating} from "@tanstack/react-query";
import {StyleSheet, ActivityIndicator, View, Modal} from "react-native";

export function Loader(): ReactElement {
  const isContactUs = useIsMutating({mutationKey: [QueryKeys.ContactUs]});

  const isSignIn = useIsMutating({mutationKey: [QueryKeys.SignIn]});
  const isSignUp = useIsMutating({mutationKey: [QueryKeys.SignUp]});
  const isConfirmCode = useIsMutating({mutationKey: [QueryKeys.ConfirmCode]});
  const isResetPassword = useIsMutating({mutationKey: [QueryKeys.ResetPassword]});
  const isForgotPassword = useIsMutating({mutationKey: [QueryKeys.ForgotPassword]});

  const isGetingUser = useIsFetching({queryKey: [QueryKeys.GetUser]});
  const isDeletingUser = useIsMutating({mutationKey: [QueryKeys.DeleteUser]});
  const isUpdatingProfile = useIsMutating({mutationKey: [QueryKeys.UpdateProfile]});
  const isUpdatingSecurity = useIsMutating({mutationKey: [QueryKeys.UpdateSecurity]});
  const isDeletingUserAvatar = useIsMutating({mutationKey: [QueryKeys.DeleteUserAvatar]});

  const isGetingRecipe = useIsFetching({queryKey: [QueryKeys.GetRecipe]});
  const isCreatingRecipe = useIsMutating({mutationKey: [QueryKeys.CreateRecipe]});
  const isUpdatingRecipe = useIsMutating({mutationKey: [QueryKeys.UpdateRecipe]});
  const isDeletingRecipe = useIsMutating({mutationKey: [QueryKeys.DeleteRecipe]});
  const isSaveUnSaveRecipe = useIsMutating({mutationKey: [QueryKeys.SaveUnSaveRecipe]});
  const isUpdatingRecipeRate = useIsMutating({mutationKey: [QueryKeys.UpdateRecipeRate]});

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={!!(isSignIn || isGetingUser || isContactUs || isForgotPassword || isResetPassword || isConfirmCode || isDeletingUserAvatar || isGetingUser || isGetingRecipe || isUpdatingSecurity || isUpdatingRecipeRate || isDeletingUser || isSaveUnSaveRecipe || isDeletingRecipe || isUpdatingRecipe || isCreatingRecipe || isSignUp || isUpdatingProfile)}
    >
      <View style={styles.modalContainer}>
        <ActivityIndicator
          size="large"
          color={Neutral.Neutral0}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
