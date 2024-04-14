import React, {ReactElement} from "react";
import {TabsNavigation} from "../../components/tabsNavigation";
import {PageScroll} from "../../components/wrappers/pageScroll";
import {SecurityForm, SettingsForm} from "../../modules/profile";

export default function Page(): ReactElement {
  return (
    <PageScroll>
      <TabsNavigation
        tabs={[
          {
            label: "Settings",
            content: <SettingsForm/>,
          },
          {
            label: "Security",
            content: <SecurityForm/>,
          },
        ]}
      />
    </PageScroll>
  );
}
