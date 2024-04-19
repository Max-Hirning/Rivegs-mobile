import {TextUI} from "@src/UI/TextUI";
import {ButtonUI} from "@src/UI/ButtonUI";
import {Rating} from "@src/config/themes";
import StarIcon from "@src/assets/icons/star";
import {PopUpMenu} from "@src/components/popUpMenu";
import React, {ReactElement, useEffect, useState} from "react";
import {useUpdateRecipeRate} from "../hooks/updateRecipeRate";
import {StyleSheet, TouchableOpacity, View} from "react-native";

interface IProps {
  menu: boolean;
  initialRate: number;
  closeMenu: () => void;
}

export function RateModal({menu, closeMenu, initialRate}: IProps): ReactElement {
  const {mutate} = useUpdateRecipeRate();
  const [rate, setRate] = useState<number>(initialRate);

  useEffect(() => {
    setRate(initialRate);
  }, [initialRate]);

  return (
    <PopUpMenu
      isVisible={menu}
      onClose={closeMenu}
    >
      <View style={styles.menu}>
        <TextUI variant="h4">Rate recipe</TextUI>
        <View style={styles.stars}>
          {
            [1,2,3,4,5].map((el: number): ReactElement => {
              return (
                <TouchableOpacity
                  key={el}
                  onPress={(): void => {
                    setRate(el);
                  }}
                >
                  <StarIcon
                    width={24}
                    height={24}
                    color={Rating.Rating100}
                  />
                </TouchableOpacity>
              );
            })
          }
        </View>
        <ButtonUI
          title="Rate"
          size="small"
          variant="primary"
          onPress={(): void => {
            mutate(rate);
            closeMenu();
          }}
          style={styles.button}
        />
      </View>
    </PopUpMenu>
  );
}

const styles = StyleSheet.create({
  menu: {
    gap: 20,
    zIndex: 100,
    padding: 10,
    maxWidth: 300,
    width: "100%",
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  stars: {
    gap: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderColor: Rating.Rating100,
    backgroundColor: Rating.Rating100,
  },
});
