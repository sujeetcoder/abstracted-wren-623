import React from "react";
import DropdownData from "./Dropdown.json";
import "./Dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { dataUrl } from "../../../Utils/AllUrls";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../Redux/Auth/action";

const Dropdown = React.forwardRef(({ style }, ref) => {
  const fName = useSelector((store)=>store.Auth.userData.fName)
  const email = useSelector((store)=>store.Auth.userData.email)
  const role = useSelector((store)=>store.Auth.userData.role)
  const adminCheck = role === "admin"
  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()
  console.log(fName)
  const logOutHandler= () => {
      dispatch(logOut({email:email},toast,navigate))
  }
  
  return (
  <div className="dropdown" style={style} ref={ref}>
    <p className="dropdown__msg">Your Bag is empty.</p>
    <div className="dropdown__items">
      {DropdownData.map((item, idx) => (
        <a href={item.link} key={`dropdown-items-item-${item.name}-${idx}`}>
          <div className="dropdown__items__item">
            <img
              className="dropdown__items__item__icon"
              src={item.icon}
              alt=""
            />
            <div className="dropdown__items__item__label">{item.name}</div>
          </div>
        </a>
      ))}
     {fName!=="" ||  <><a href={"/login"} key={`dropdown-items-item-Sign-5`}>
          <div className="dropdown__items__item">
            <img
              className="dropdown__items__item__icon"
              src={"https://www.apple.com/ac/globalnav/7/en_US/assets/ac-store/signIn.svg"}
              alt=""
            />
            <div className="dropdown__items__item__label">Sign In</div>
          </div>
        </a> </> }

        {adminCheck &&  <><a href={"/admin"} key={`dropdown-items-item-admin-6`}>
          <div className="dropdown__items__item">
            <img
              className="dropdown__items__item__icon"
              src={"https://www.apple.com/ac/globalnav/7/en_US/assets/ac-store/signIn.svg"}
              alt=""
            />
            <div className="dropdown__items__item__label">Admin</div>
          </div>
        </a> </> }

        {fName!=="" &&  <>
          <div className="dropdown__items__item" onClick={logOutHandler}>
            <img
              className="dropdown__items__item__icon"
              src={"https://www.apple.com/ac/globalnav/7/en_US/assets/ac-store/signIn.svg"}
              alt=""
            />
            <div className="dropdown__items__item__label">Sign Out {fName}</div>
          </div>
       </> }
    </div>
  </div>
)});

export default Dropdown;
