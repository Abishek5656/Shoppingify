import "./listmanager.css";
import bottle from "../../assets/source.svg";
import ShoppingCart from "../shoppingChart/ShoppingCart";
import { MdEdit } from "react-icons/md";
import PropTypes from "prop-types";


const ListManger = ({ openForm, setOpenForm }) => {
    

    return (
        <div className="listmanager_container">
            <div className="listmanager_image-container">
                <img src={bottle} alt="" />

                <div className="listmanager_image-content">
                    <p>Didn’t find what you need?</p>
                    <button onClick={() => setOpenForm(!openForm)}>
                        Add item
                    </button>
                </div>
            </div>
            <div className="shopping_heading">
                <h3 className="shoppingcart_title">Shopping list</h3>
                <MdEdit size={25} />
            </div>

            <ShoppingCart />
        </div>
    );
};

ListManger.propTypes = {
    setOpenForm: PropTypes.func,
    openForm: PropTypes.bool,
};

export default ListManger;
