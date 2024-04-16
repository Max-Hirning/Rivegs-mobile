import React, {ReactElement} from "react";
import {Modal, StyleSheet, Pressable} from "react-native";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactElement;
}

export function PopUpMenu({isVisible, children, onClose}: IProps): ReactElement {
  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        onPress={onClose}
        style={styles.container}
      >
        {children}
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
