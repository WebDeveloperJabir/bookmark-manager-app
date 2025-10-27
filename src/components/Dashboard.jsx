import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import Bookmarks from "./Bookmarks";
import TopBar from "./TopBar";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, email } = location.state || {};
  const [sideNav, setSideNav] = useState(true);
  const tags = {
    ai: [0, "AI"],
    community: [0, "Community"],
    compatibility: [0, "Compatibility"],
    css: [0, "CSS"],
    design: [0, "Design"],
    framework: [0, "Framework"],
    git: [0, "Git"],
    html: [0, "HTML"],
    javascript: [0, "JavaScript"],
    layout: [0, "Layout"],
    learning: [0, "Learning"],
    performance: [0, "Performance"],
    practice: [0, "Practice"],
    reference: [0, "Reference"],
    tips: [0, "Tips"],
    tools: [0, "Tools"],
    tutorial: [0, "Tutorial"],
    others: [0, "Others"],
  };

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  function logOut() {
    navigate("/");
  }

  if (userData?.bookmarks) {
    userData.bookmarks.forEach((bookmark) => {
      bookmark.tags.forEach((tag) => {
        const lowerTag = tag.toLowerCase();
        if (tags.hasOwnProperty(lowerTag)) {
          tags[lowerTag][0] += 1;
        } else {
          tags[others][0] += 1;
        }
      });
    });
  }

  return (
    <div className='dashboard grid grid-cols-[minmax(200px,20%)_1fr] grid-rows-[60px_1fr] min-h-screen'>
      <SideNav tags={tags} sideNav={sideNav} setSideNav={setSideNav} />
      <TopBar avatar={userData?.image} name={userData?.name} email={userData?.email} logOut={logOut} sideNav={setSideNav} />
      <Bookmarks bookmarks={userData?.bookmarks} />
    </div>
  );
}
