import {TextUI} from "@src/UI/TextUI";
import {PopUpMenu} from "../popUpMenu";
import {InputUI} from "@src/UI/InputUI";
import {useDispatch} from "react-redux";
import {ButtonUI} from "@src/UI/ButtonUI";
import {Routes} from "@src/config/routes";
import FilterIcon from "@src/assets/icons/filters";
import MessageIcon from "@src/assets/icons/message";
import {Neutral, Primary} from "@src/config/themes";
import React, {ReactElement, useState} from "react";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import {AppDispatch, setFilter} from "@src/modules/store";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";

const ListDivider = (): ReactElement => <View style={styles.listDivider} />;

export function SearchHeader(): ReactElement {
  const dispatch: AppDispatch = useDispatch();
  const [menu, setMenu] = useState<boolean>(false);
  const {navigate} = useNavigation<ScreenRouteProp>();
  const [authorLogin, setAuthorLogin] = useState<string>("");
  const [rates, setRates] = useState<[number, number]>([1,5]);

  return (
    <>
      <TouchableOpacity
        style={styles.messageIcon}
        onPress={(): void => navigate(Routes.ContactUs)}
      >
        <MessageIcon width={28} height={28} color={Neutral.Neutral100} fill={Neutral.Neutral0}/>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.input}>
          <InputUI
            placeholder="Search recipe"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={(): void => setMenu(true)}
        >
          <FilterIcon
            width={24}
            height={24}
            color={Neutral.Neutral0}
          />
        </TouchableOpacity>
      </View>
      <PopUpMenu
        isVisible={menu}
        onClose={(): void => setMenu(false)}
      >
        <View style={styles.menu}>
          <View>
            <TextUI
              variant="p"
              style={styles.label}
            >Rates from</TextUI>
            <FlatList
              horizontal={true}
              data={[1,2,3,4,5]}
              contentContainerStyle={styles.list}
              ItemSeparatorComponent={ListDivider}
              renderItem={({item}: {item: number}): ReactElement => {
                return (
                  <ButtonUI
                    size="small"
                    onPress={(): void => {
                      setRates((state: [number, number]) => ([item, state[1]]));
                    }}
                    title={item.toString()}
                    style={styles.rateButton}
                    disabled={!(item <= rates[1])}
                    variant={(item === rates[0]) ? "primary" : "secondary"}
                  />
                );
              }}
              keyExtractor={(item: number): string => item.toString()}
            />
          </View>
          <View>
            <TextUI
              variant="p"
              style={styles.label}
            >Rates to</TextUI>
            <FlatList
              horizontal={true}
              data={[1,2,3,4,5]}
              contentContainerStyle={styles.list}
              ItemSeparatorComponent={ListDivider}
              renderItem={({item}: {item: number}): ReactElement => {
                return (
                  <ButtonUI
                    size="small"
                    onPress={(): void => {
                      setRates((state: [number, number]) => ([state[0], item]));
                    }}
                    title={item.toString()}
                    style={styles.rateButton}
                    disabled={!(item >= rates[0])}
                    variant={(item === rates[1]) ? "primary" : "secondary"}
                  />
                );
              }}
              keyExtractor={(item: number): string => item.toString()}
            />
          </View>
          <View>
            <TextUI
              variant="p"
              style={styles.label}
            >Author login</TextUI>
            <InputUI
              value={authorLogin}
              placeholder="Author login"
              onChangeText={(value: string): void => {
                setAuthorLogin(value);
              }}
            />
          </View>
          <ButtonUI
            size="large"
            title="Filter"
            variant="primary"
            onPress={(): void => {
              setMenu(false);
              dispatch(setFilter({
                authorLogin,
                rate: rates,
              }));
            }}
            style={styles.filterButton}
          />
        </View>
      </PopUpMenu>
    </>
  );
}

const styles = StyleSheet.create({
  messageIcon: {
    left: 25,
    marginTop: 5,
    position: "relative",
  },
  container: {
    paddingTop: 10,
    display: "flex",
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  input: {
    maxWidth: 255,
    width: "100%",
  },
  button: {
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Primary.Primary50,
  },
  menu: {
    gap: 10,
    padding: 10,
    zIndex: 100,
    width: "100%",
    maxWidth: 315,
    borderRadius: 8,
    backgroundColor: "white",
  },
  list: {
    paddingBottom: 10,
  },
  listDivider: {
    marginHorizontal: 5,
  },
  rateButton: {
    minWidth: 51,
    minHeight: 28,
  },
  label: {
    marginBottom: 10,
  },
  filterButton: {
    marginTop: 20,
  },
});
