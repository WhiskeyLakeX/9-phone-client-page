import React from "react";
import SearchSection from "@/component/Layout/TopNavigationBar/SearchSection";
import WebsiteLogo from "@/component/Layout/TopNavigationBar/WebsiteLogo";
import UserAccountManipulation from "@/component/Layout/TopNavigationBar/UserAccountManipulation";

const TopNavigationBar = () => {
  return (
    <div className="flex w-full justify-between items-center flex-row px-12 py-3">
      <WebsiteLogo />
      <SearchSection />
      <UserAccountManipulation />
    </div>
  );
};

export default TopNavigationBar;
