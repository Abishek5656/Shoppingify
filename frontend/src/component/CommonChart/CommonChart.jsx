import "./commonchart.css";
import PropTypes from "prop-types";

const CommonChart = ({ data, name }) => {
    return (
        <div className="common_container">
            <h4 className="common_title">{name}</h4>
            {data.map((data, index) => (
                <div key={index} className="common_container-list">
                    <div className="list_container">
                        {/*item_container-content */}
                        <div className="list_container-content">
                            <p className="list_name">{data?.items_name}</p>
                            <p className="list_percentage">
                                {data?.percentage}%
                            </p>
                        </div>
                        <div className="outermostDiv">
                            <div
                                className="innermostdiv"
                                style={{ width: "50px" }}
                            ></div>
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
