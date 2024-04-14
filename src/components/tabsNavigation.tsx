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
    <View>
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <ButtonUI
            key={index}
            size="small"
            title={tab.label}
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
  tabContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingBottom: 10,
  },
});
