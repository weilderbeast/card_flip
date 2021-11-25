import "../css/Card.css"
import {useRef, useState} from "react";

function Card() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="main" style={{background: isOpen ? "gray" : "transparent"}}>
            <div className="card" onClick={() => {
                setOpen(!isOpen);
            }}>
                <div className="card-inside" style={{transform: isOpen ? 'rotateY(180deg)' : 'rotateY(0deg)'}}>
                    <div className="card-face1" style={{display: isOpen ? "none" : 'flex'}}>
                        First face
                    </div>
                    <div className="card-face2" style={
                        {
                            display: isOpen ? "flex" : 'none',
                            width: isOpen ? "150%" : "100%",
                            height: isOpen ? "150%" : "100%"
                        }}>
                        Second face
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;