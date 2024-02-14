import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shoppingCart: [],
};

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const { item_category, item_categoryId } = action.payload;

            if (state.shoppingCart.length === 0) {
                state.shoppingCart.push({
                    category_name: item_category,
                    category_id: item_categoryId,
                    orderList: [{ ...action.payload, item_quantity: 1 }],
                });
            } else {
                const existingCategoryIndex = state.shoppingCart.findIndex(
                    (category) => category.category_id === item_categoryId
                );

                if (existingCategoryIndex !== -1) {
                    state.shoppingCart[existingCategoryIndex].orderList.push({
                        ...action.payload,
                        item_quantity: 1,
                    });
                } else {
                    state.shoppingCart.push({
                        category_name: item_category,
                        category_id: item_categoryId,
                        orderList: [{ ...action.payload, item_quantity: 1 }],
                    });
                }
            }
        },

        incrementItem(state, action) {
            const { item_categoryId, item_id } = action.payload;

            const existingCategory = state.shoppingCart.find(
                (category) => category.category_id === item_categoryId
            );
            if (existingCategory) {
                const product = existingCategory.orderList.find(
                    (item) => item.item_id === item_id
                );

                if (product) {
                    product.item_quantity++;
                }
            }
        },

        decrementItem(state, action) {
            const { item_categoryId, item_id } = action.payload;

            const existingCategory = state.shoppingCart.find(
                (category) => category.category_id === item_categoryId
            );

            if (existingCategory) {
                const product = existingCategory.orderList.find(
                    (item) => item.item_id === item_id
                );

                if (product && product.item_quantity > 0) {
                    product.item_quantity--;
                }
            }
        },

        removeItemFromCart(state, action) {
            const { item_categoryId, item_id } = action.payload;

            const existingCategory = state.shoppingCart.find(
                (category) => category.category_id === item_categoryId
            );

            if (existingCategory) {
                existingCategory.orderList = existingCategory.orderList.filter(
                    (item) => item.item_id !== item_id
                );
            }
        },
        emptyItemList(state,action) {
            return []
        }
    },
});

export const selectAllShoppingCart = (state) => state.shoppingCart.shoppingCart;

export const {
    addItemToCart,
    removeItemFromCart,
    incrementItem,
    decrementItem,
    emptyItemList
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
