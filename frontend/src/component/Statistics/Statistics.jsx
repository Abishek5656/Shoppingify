import "./statistics.css";
import { topItems } from "../../constant/data";
import { topCategory } from "../../constant/data";
import CommonChart from "../CommonChart/CommonChart";
// import Chart from "../Chart/Chart";

const Statistics = () => {
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
