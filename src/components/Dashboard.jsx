import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import Bookmarks from "./Bookmarks";
import TopBar from "./TopBar";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, email } = location.state || {};

  useEffect(() => {
    if (!userData) {
      navigate("/");
      return <p>Redirecting...</p>;
    }
  }, [userData, navigate]);

  function logOut() {
    navigate("/");
  }

  return (
    <div className='dashboard grid grid-cols-[300px_1fr] grid-rows-[60px_1fr] min-h-screen pb-[30px]'>
      <SideNav className='col-start-1 col-end-2 row-start-1 row-end-3' />
      <TopBar className='col-start-2 col-end-3 row-start-1 row-end-2' avatar={userData?.image} name={userData?.name} email={userData?.email} logOut={logOut} />
      <Bookmarks bookmarks={userData?.bookmarks} className='col-start-2 col-end-3 row-start-2 row-end-3' />
    </div>
  );
}
