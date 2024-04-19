import {useSelector} from "react-redux";
import {IImage} from "@src/types/image";
import React, {ReactElement} from "react";
import {AvatarUI} from "@src/UI/AvatarUI";
import {RootState} from "@src/modules/store";
import {TouchableOpacity} from "react-native";
import Toast from "react-native-toast-message";
import {ImageLibraryOptions, launchImageLibrary} from "react-native-image-picker";

interface IProps {
  image: string|undefined|null;
  chooseImage: (image: IImage) => void;
}

export function ImagePicker({image, chooseImage}: IProps): ReactElement {
  const profile = useSelector((state: RootState) => state.profile);

  const selectImage = async (): Promise<void> => {
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: "photo",
    };
    const {didCancel, assets} = await launchImageLibrary(options);

    if(!didCancel && assets) {
      const chosenImage = assets[0];
      if((chosenImage.height && chosenImage.width) && chosenImage.height > chosenImage.width) {
        Toast.show({
          type: "error",
          text1: "Warning",
          text2: "Image must be horizontal",
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
        Toast.show({
          type: "error",
          text1: "Image is too big",
          text2: "Must be less than 300KB",
        });
        return;
      }
    }
  };

  return (
    <TouchableOpacity onPress={selectImage}>
      <AvatarUI
        size="large"
        source={image}
        login={profile.data?.login || "a"}
      />
    </TouchableOpacity>
  );
}
