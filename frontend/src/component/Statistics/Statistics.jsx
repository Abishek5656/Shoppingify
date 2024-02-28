import "./statistics.css";
// import { topItems } from "../../constant/data";
import { topCategory } from "../../constant/data";
import CommonChart from "../CommonChart/CommonChart";
import { BASE_URL } from "../../constant/data.js";

// import Chart from "../Chart/Chart";
import { useEffect, useState } from "react";
const Statistics = () => {
    const [topItems, setTopItems] = useState(null);

    useEffect(() => {
        const fetchTopItems = async () => {
            const res = await fetch(`${BASE_URL}/product/topItems`);
            const data = await res.json();
            console.log(data.data);
            setTopItems(data.data);
        };
        fetchTopItems();
    }, []);
    return (
        <div className="statistics_container">
            <div className="statistics_container-content">
                <CommonChart data={topItems} name="Top Items" />
                <CommonChart data={topCategory} name="Top Category" />
            </div>

            {/* <Chart /> */}
        </div>
    );
};

export default Statistics;
