import {ButtonUI} from "../UI/ButtonUI";
import {View, StyleSheet} from "react-native";
import React, {ReactNode, ReactElement, useState} from "react";

interface Tab {
  label: string;
  content: ReactNode;
}
interface IProps {
  tabs: Tab[];
}

export function TabsNavigation({tabs}: IProps): ReactElement {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabPress = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <ButtonUI
            key={index}
            size="small"
            title={tab.label}
            style={styles.tabButton}
            onPress={(): void => handleTabPress(index)}
            variant={activeTab === index ? "primary" : "secondary"}
          />
        ))}
      </View>
      <View style={styles.contentContainer}>{tabs[activeTab].content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 25,
  },
  tabContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  tabButton: {
    marginHorizontal: 15,
  },
  contentContainer: {
    width: "100%",
    marginTop: 30,
    paddingBottom: 10,
  },
});
