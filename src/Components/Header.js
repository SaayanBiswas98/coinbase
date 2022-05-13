import React from "react";
import "./Header.css";
import Image from "../images/etherium.jpeg";
import polygon from "../images/polygon.png";
import bitcoin from "../images/bitcoin.png";
import soloana from "../images/soloana.jpeg";

const Header=()=>{
    return(
        <div className="Assets1">
        <div className="header">
            <div className="header__left">
               Assets
            </div>
            <div className="header__right">
                <div className="address">
                <h2>Wallet connected</h2>
                <h2>000uhfbbb.....</h2>
                </div>
                <button className="btn1">Buy/Sell</button>
                <button className="send">
                    SEND
                </button>
            </div>
        </div>
        <div className="graph">
            <img src="https://www.1daydude.com/wp-content/uploads/2018/08/Coinbase-Pro-Default-Charts.jpg"/>
        </div>
        <div className="Assets">
            <h2>Your Assets</h2>
        </div>
        <div class="types">
        <div className="Name">Name</div>
        <div className="Name">Balance </div>
        <div className="Name">Price</div>
        <div className="Name">Allocation</div>
        </div>
        <div className="Bitcoin">
            <img src={Image}/>
            <div display="flex"flex-direction="column">
            <span>Etherium
            </span>
            <h2>ETH</h2>
            </div>
            <div className="Balance">
            $340.90
            <h2>3.55666 ETH</h2>
            </div>
            <div className="Balance">
                $4.77888
                <h2>-7.67%</h2>
            </div>
            <div className="Balance">
                41.98%
            </div>
        </div>
        <div className="Bitcoin">
            <img src={polygon}/>
            <div display="flex"flex-direction="column">
            <span>polygon
            </span>
            <h2>Poly</h2>
            </div>
            <div className="Balance">
            $677.90
            <h2>8.34566 ETH</h2>
            </div>
            <div className="Balance">
               $8.998888
                <h2>-7.67%</h2>
            </div>
            <div className="Balance">
                38.98%
            </div>
        </div>
        <div className="Bitcoin">
            <img src={bitcoin}/>
            <div display="flex"flex-direction="column">
            <span>Bitcoin
            </span>
            <h2>BTC</h2>
            </div>
            <div className="Balance">
            $900.90
            <h2>6.34566 ETH</h2>
            </div>
            <div className="Balance">
               $8.998888
                <h2>-6.67%</h2>
            </div>
            <div className="Balance">
                56.78%
            </div>
        </div>
        <div className="Bitcoin">
            <img src={soloana}/>
            <div display="flex"flex-direction="column">
            <span>soloana
            </span>
            <h2>Poly</h2>
            </div>
            <div className="Balance">
            $377.90
            <h2>3.34566 ETH</h2>
            </div>
            <div className="Balance">
               $2.998888
                <h2>+5.67%</h2>
            </div>
            <div className="Balance">
                67.54%
            </div>
        </div>
        </div>
        
    )
};
export default Header;
