import "./listmanager.css";
import bottle from "../../assets/source.svg";
import ShoppingCart from "../shoppingChart/ShoppingCart";
import { MdEdit } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";

const ListManger = ({ openForm, setOpenForm }) => {
    const [name, setName] = useState("");

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
            </div>

            <ShoppingCart />

            <div className="saveOrder">
                <div className="div">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter a name"
                        className="inputContainer"
                    />
                    <button className="save_btn">Save</button>
                </div>
            </div>
        </div>
    );
};

ListManger.propTypes = {
    setOpenForm: PropTypes.func,
    openForm: PropTypes.bool,
};

export default ListManger;
