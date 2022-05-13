import React from "react";
import "./Sidebar.css";
import {AiOutlinePieChart} from "react-icons/ai";
import {BiTrendingUp} from "react-icons/bi";
import {MdWeb} from "react-icons/md";
import {BsPersonPlus} from "react-icons/bs";
import {AiFillBell} from "react-icons/ai";
import {MdWebAsset,MdWebStories} from "react-icons/md";
const Sidebar=()=>{
    return(
        <div className="side__header">
            <div className="logo">
                <img src="https://miro.medium.com/proxy/0*xP4oOeTNLVrtSApx"/>
            </div>
            <div className="Assets">
                <AiOutlinePieChart/>
                <div className="Text">
                    Assets
                </div>
            </div>
            <div className="Assets">
                <BiTrendingUp/>
                <div className="Text">
                    Trade
                </div>
            </div>
            <div className="Assets">
                <MdWeb/>
                <div className="Text">
                    Pay
                </div>
            </div>
            <div className="Assets">
                <MdWebAsset/>
                <div className="Text">
                    For you
                </div>
            </div>
            <div className="Assets">
                <MdWebStories/>
                <div className="Text">
                    learn and earn
                </div>
            </div>
            <div className="Assets">
                <AiFillBell/>
                <div className="Text">
                    Notification
                </div>
            </div>
            <div className="Assets">
                <BsPersonPlus/>
                <div className="Text">
                    invite friends
                </div>
            </div>
        </div>
        

    )
};

export default Sidebar;