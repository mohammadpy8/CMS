import React from "react";
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";

import { Link, NavLink } from "react-router-dom";

import "./SideBar.css";

const SideBar = () => {
  
  return (
    <div className="sideBar">
      <h1 className="sideBar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sideBar-links">
        <NavLink to="/">
            <AiOutlineHome className="saidebar-icon"/>
            صفحه اصلی
        </NavLink>
        <NavLink to="/products">
            <MdProductionQuantityLimits className="saidebar-icon"/>
            محصولات
        </NavLink>
        <NavLink to="/comments">
            <BiCommentDetail className="saidebar-icon"/>
            کامنت ها
        </NavLink>
        <NavLink to="/users">
            <FiUsers className="saidebar-icon"/>
            کاربران
        </NavLink>
        <NavLink to="/orders">
            <BsBagCheck className="saidebar-icon"/>
            سفارشات
        </NavLink>
        <NavLink to="/offs">
            <AiOutlineDollar className="saidebar-icon"/>
            تخفیف ها
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
