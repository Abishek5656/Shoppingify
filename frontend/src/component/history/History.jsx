import "./history.css";
import { PiCalendar } from "react-icons/pi";
import { RiArrowRightSLine } from "react-icons/ri";

const History = () => {
    return (
        <div className="history_container">
            <h1>Shopping history</h1>

            <div className="history">
                <p>August 2020</p>

                <div className="card">
                    <h5>Grocery List</h5>

                    <div className="card_container">
                        <div className="calendar_container">
                            <PiCalendar size={20} color="#C1C1C4" />
                            <span>Mon 27.8.2020</span>
                        </div>
                        <button className="completedbtn">completed</button>
                        <RiArrowRightSLine size={26} color="#F9A109"/>
                    </div>
                </div>

                <div className="card">
                    <h5>Eero’s farewell party</h5>

                    <div className="card_container">
                        <div className="calendar_container">
                            <PiCalendar size={20} color="#C1C1C4" />
                            <span>Mon 24.8.2020</span>
                        </div>
                        <button className="completedbtn">completed</button>
                        <RiArrowRightSLine size={26} color="#F9A109"/>
                    </div>
                </div>
            </div>

            <div className="history">
                <h4>July 2020 2020</h4>

                <div className="card">
                    <h5>Grocery List</h5>

                    <div className="card_container">
                        <div className="calendar_container">
                            <PiCalendar size={20} color="#C1C1C4" />
                            <span>Mon 16.7.2020</span>
                        </div>
                        <button className="cancelbtn">cancelled</button>
                        <RiArrowRightSLine size={26} color="#F9A109"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
