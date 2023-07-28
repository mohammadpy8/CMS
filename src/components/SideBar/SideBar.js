import React from "react";
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <h1 className="sideBar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sideBar-links">
        <li>
          <a href="#">
            <AiOutlineHome className="saidebar-icon"/>
            صفحه اصلی
          </a>
        </li>
        <li className="active">
          <a href="#">
            <MdProductionQuantityLimits className="saidebar-icon"/>
            محصولات
          </a>
        </li>
        <li>
          <a href="#">
            <BiCommentDetail className="saidebar-icon"/>
            کامنت ها
          </a>
        </li>
        <li>
          <a href="#">
            <FiUsers className="saidebar-icon"/>
            کاربران
          </a>
        </li>
        <li>
          <a href="#">
            <BsBagCheck className="saidebar-icon"/>
            سفارشات
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineDollar className="saidebar-icon"/>
            تخفیف ها
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
