import React from "react";
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";

import {Link} from "react-router-dom"

import "./SideBar.css";

const SideBar = () => {
  
  return (
    <div className="sideBar">
      <h1 className="sideBar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sideBar-links">
        <li>
          <Link to="/products">
            <AiOutlineHome className="saidebar-icon"/>
            صفحه اصلی
          </Link>
        </li>
        <li className="active">
          <Link to="/products">
            <MdProductionQuantityLimits className="saidebar-icon"/>
            محصولات
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <BiCommentDetail className="saidebar-icon"/>
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FiUsers className="saidebar-icon"/>
            کاربران
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <BsBagCheck className="saidebar-icon"/>
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="/offs">
            <AiOutlineDollar className="saidebar-icon"/>
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
