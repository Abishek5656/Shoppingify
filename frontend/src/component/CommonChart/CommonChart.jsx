import "./commonchart.css";
import PropTypes from "prop-types";

const CommonChart = ({ data, name }) => {
    // console.log("in the common chart")
    // console.log(data)
    return (
        <div className="common_container">
            <h4 className="common_title">{name}</h4>
            {data && data?.map((data, index) => (

            <div key={index} className="common_container-list">
                <div className="list_container">
                    {/*item_container-content */}
                    <div className="list_container-content">
                        <p className="list_name">{data?.item_name}</p>
                        <p className="list_percentage">
                            {data?.percentage}%
                        </p>
                    </div>
                    <div className="outermostDiv">
                        <input type="range" min={0} max={100}
                            className="innermostdiv"
                            value={data?.percentage}
                        ></input>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
};

CommonChart.propTypes = {
    name: PropTypes.string,
    data: PropTypes.array,
};
export default CommonChart;
