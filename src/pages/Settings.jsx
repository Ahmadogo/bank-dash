import React from "react";
import ActiveTab from "../components/ActiveTab";
import { useState } from "react";
import EditProfile from "../components/EditProfile";
import Preferences from "../components/Preferences";
import Security from "../components/Security";

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState("Edit Profile");

  const tabs = [
    { name: "Edit Profile" },
    { name: "Preferences" },
    { name: "Security" },
  ];

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <div>
      <ActiveTab
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      <div className="bg-white rounded-lg shadow-md ">
        {selectedTab === "Edit Profile" && <EditProfile />}
        {selectedTab === "Preferences" && <Preferences />}
        {selectedTab === "Security" && <Security />}
      </div>
    </div>
  );
};

export default Settings;
