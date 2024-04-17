import React, {ReactElement} from "react";
import {IImage} from "../../../types/image";
import {ButtonUI} from "../../../UI/ButtonUI";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {ImageLibraryOptions, launchImageLibrary} from "react-native-image-picker";

interface IProps {
  image: string|undefined|null;
  chooseImage: (image: IImage) => void;
}

export function ImagePicker({image, chooseImage}: IProps): ReactElement {
  const selectImage = async (): Promise<void> => {
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: "photo",
    };
    const {didCancel, assets} = await launchImageLibrary(options);

    if(!didCancel && assets) {
      const chosenImage = assets[0];
      if((chosenImage.height && chosenImage.width) && chosenImage.height > chosenImage.width) {
        console.log({
          type: "warning",
          message: "Image must be horizontal",
        });
        return;
      }
      if(chosenImage?.fileSize && chosenImage?.fileSize <= 310000 && chosenImage.uri && chosenImage.type) {
        chooseImage({
          uri: chosenImage.uri,
          type: chosenImage.type,
          name: (Date.now()).toString(),
        });
      } else {
        console.log({
          type: "warning",
          message: "Image is too big",
          description: "Must be less than 300KB",
        });
        return;
      }
    }
  };

  if(image) {
    return (
      <TouchableOpacity onPress={selectImage}>
        <Image
          style={styles.image}
          source={{uri: image}}
        />
      </TouchableOpacity>
    );
  }

  return (
    <ButtonUI
      size="large"
      variant="primary"
      title="Select image"
      onPress={selectImage}
      style={styles.selectBtn}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 225,
    width: "100%",
    borderRadius: 10,
    marginBottom: 16,
  },
  selectBtn: {
    height: 223,
    width: "100%",
    borderRadius: 12,
  },
});
