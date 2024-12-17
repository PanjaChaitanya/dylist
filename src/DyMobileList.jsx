import React, { useState } from 'react';
import './Dylist.css';

function Dylist() {
    const [mobile, setMobile] = useState(["Samsung", "Black Berry", "iPhone"]);
    const [removedMobiles, setRemovedMobiles] = useState([]);

    let removeMobile = () => {
        if (mobile.length > 0) {
            const lastMobile = mobile.at(-1);
            setMobile(mobile.slice(0, -1));
            setRemovedMobiles([...removedMobiles, lastMobile]);
        }
    };

    let addMobile = () => {
        let carr = document.getElementById('input3').value;
        if (carr === '') {
            alert('Enter Mobile name');
        } else {
            setMobile([...mobile, carr]);
            document.getElementById('input3').value = '';
        }
    };

    return (
        <>
            <div className="container">
                <div className="imageContainer">
                    <img src="/mobilehead.jpg" width='200px' alt="Mobile Header" />
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="Enter Mobile Name" id="input3" />
                </div>
                <div className="buttonContainer">
                    <button id="green" onClick={addMobile}>
                        Set 📱
                    </button>
                    <button id="red" onClick={removeMobile}>
                        <img src="https://cdn-icons-png.freepik.com/256/4556/4556942.png?uid=R117028257&ga=GA1.1.1665732723.1704781657&semt=ais_hybrid"
                            width="25px"
                            alt="deleteimage"
                        />
                    </button>
                </div>
                <div className="listContainer">
                    <h2>Available Mobiles:</h2>
                    {
                        (() => {
                            if (mobile.length > 0) {
                                return (
                                    <ul>
                                        {mobile.map((x, index) => (
                                            <li key={index}>📱 {x}</li>
                                        ))}
                                    </ul>
                                );
                            } else {
                                return <p>No Mobiles Left</p>;
                            }
                        })()
                    }
                </div>
                <div className="deletedContainer">
                    <h2>Removed Mobiles:</h2>
                    {removedMobiles.map((x, index) => (<li key={index}>🗑️ {x}</li>))}
                </div>
            </div>
        </>
    );
}

export default Dylist;