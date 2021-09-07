import {
    FDATA, T_SHOWN_MUGS, T_SHOWN_SHIRTS, 
     FILTERED,  FILTEREN, PAGE_NAV, FILTER_TAGS_BY_NAME, FIL_TAG,
    BASKET_TO, ADD_BASKET, REMOVE_BASKET, HANDLE_SORT,
} from "./act";


function reducer(state, action) {
    console.log("state & action", { state, action })
    const filterProducts = (brandFilters, tagFilters, mugIsShown) => {
        let filteredProducts = mugIsShown ? (state.mugs) : (state.shirts);
        if (brandFilters.length) {
            filteredProducts = filteredProducts.filter((item) => {
                return (
                    brandFilters.includes(item.manufacturer)
                )
            });
        }
        if (tagFilters.length) {
            filteredProducts = filteredProducts.filter((item) => {
                const tagsOfCurrentItem = [...item.tags];
                let tagFound = false;
                for (let i = 0; i < tagsOfCurrentItem.length; i++) {
                    if (tagFilters.includes(tagsOfCurrentItem[i])) {
                        tagFound = true;
                    }
                }
                return tagFound;
            })
        }
        return filteredProducts;
    }
    if (action.type === FDATA) {
        const tempMugArray = action.payload.items.filter((item) => {
            return item.itemType === "mug";
        });
        const tempShirtArray = action.payload.items.filter((item) => {
            return item.itemType === "shirt";
        });;
        const tempDisplayArray = tempMugArray.sort(function (a, b) { return a.price - b.price });
        const tempEditedMugArray = tempMugArray.sort(function (a, b) { return a.price - b.price });
        const tempEditedShirtArray = tempShirtArray.sort(function (a, b) { return a.price - b.price });
        const tempBrandArray = action.payload.companies.sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });

        let tempTagsArray = [];
        for (let i = 0; i < action.payload.items.length; i++) {
            tempTagsArray = new Set([...tempTagsArray, ...action.payload.items[i].tags]);
        }
        const tempEditedTags = Array.from(tempTagsArray).sort((a, b) => a.localeCompare(b));
        return {
            ...state,
            displayArray: tempDisplayArray,
            shirts: tempShirtArray,
            mugs: tempMugArray,
            brands: tempBrandArray,
            editedShirts: tempEditedShirtArray,
            editedMugs: tempEditedMugArray,
            editedBrands: tempBrandArray,
            tags: tempEditedTags,
            editedTags: tempEditedTags,
        };
    }
    if (action.type === T_SHOWN_SHIRTS) {
        const tempDisplayArray = filterProducts(state.filters, state.selectedTags, false);
        return {
            ...state,
            displayArray: tempDisplayArray,
            isMug: false,
            displayedPage: 1
        }
    }
    if (action.type === T_SHOWN_MUGS) {
        const tempDisplayArray = filterProducts(state.filters, state.selectedTags, true);
        return {
            ...state,
            displayArray: tempDisplayArray,
            isMug: true,
            displayedPage: 1
        }
    }
    if (action.type === HANDLE_SORT) {
        if (action.payload.eventValue === "lowToHigh") {
            const tempShirtArray = state.shirts.sort(function (a, b) { return a.price - b.price });
            const tempMugArray = state.mugs.sort(function (a, b) { return a.price - b.price });
            const tempEditedShirtArray = state.editedShirts.sort(function (a, b) { return a.price - b.price });
            const tempEditedMugArray = state.editedMugs.sort(function (a, b) { return a.price - b.price });
            const tempDisplayArray = state.displayArray.sort(function (a, b) { return a.price - b.price });
            return {
                ...state,
                displayArray: tempDisplayArray,
                sortingType: action.payload.eventValue,
                editedShirts: tempEditedShirtArray,
                editedMugs: tempEditedMugArray,
                mugs: tempMugArray,
                shirts: tempShirtArray,
                displayedPage: 1
            }
        }
        if (action.payload.eventValue === "highToLow") {
            const tempShirtArray = state.shirts.sort(function (a, b) { return b.price - a.price });
            const tempMugArray = state.mugs.sort(function (a, b) { return b.price - a.price });
            const tempEditedShirtArray = state.editedShirts.sort(function (a, b) { return b.price - a.price });
            const tempEditedMugArray = state.editedMugs.sort(function (a, b) { return b.price - a.price });
            const tempDisplayArray = state.displayArray.sort(function (a, b) { return b.price - a.price });
            return {
                ...state,
                displayArray: tempDisplayArray,
                sortingType: action.payload.eventValue,
                editedShirts: tempEditedShirtArray,
                editedMugs: tempEditedMugArray,
                mugs: tempMugArray,
                shirts: tempShirtArray,
                displayedPage: 1
            }
        }
        if (action.payload.eventValue === "newToOld") {
            const tempShirtArray = state.shirts.sort(function (a, b) { return a.id - b.id });
            const tempMugArray = state.mugs.sort(function (a, b) { return a.id - b.id });
            const tempEditedShirtArray = state.editedShirts.sort(function (a, b) { return a.id - b.id });
            const tempEditedMugArray = state.editedMugs.sort(function (a, b) { return a.id - b.id });
            const tempDisplayArray = state.displayArray.sort(function (a, b) { return a.id - b.id });
            return {
                ...state,
                displayArray: tempDisplayArray,
                sortingType: action.payload.eventValue,
                editedShirts: tempEditedShirtArray,
                editedMugs: tempEditedMugArray,
                mugs: tempMugArray,
                shirts: tempShirtArray,
                displayedPage: 1
            }
        }
        if (action.payload.eventValue === "oldToNew") {
            const tempShirtArray = state.shirts.sort(function (a, b) { return b.id - a.id });
            const tempMugArray = state.mugs.sort(function (a, b) { return b.id - a.id });
            const tempEditedShirtArray = state.editedShirts.sort(function (a, b) { return b.id - a.id });
            const tempEditedMugArray = state.editedMugs.sort(function (a, b) { return b.id - a.id });
            const tempDisplayArray = state.displayArray.sort(function (a, b) { return b.id - a.id });
            return {
                ...state,
                displayArray: tempDisplayArray,
                sortingType: action.payload.eventValue,
                editedShirts: tempEditedShirtArray,
                editedMugs: tempEditedMugArray,
                mugs: tempMugArray,
                shirts: tempShirtArray,
                displayedPage: 1
            }
        }
        return state;
    }
    if (action.type ===  FILTERED) {
        if (action.payload.eventType) {
            const tempFilters = [...state.filters, action.payload.eventValue];
            const tempDisplayArray = filterProducts(tempFilters, state.selectedTags, state.isMug);
            return {
                ...state,
                filters: tempFilters,
                displayArray: tempDisplayArray,
                displayedPage: 1
            }
        }
        else {
            const tempFilters = state.filters.filter((filter) => {
                return filter !== action.payload.eventValue;
            });
            const tempDisplayArray = filterProducts(tempFilters, state.selectedTags, state.isMug);
            return {
                ...state,
                filters: tempFilters,
                displayArray: tempDisplayArray,
                displayedPage: 1
            }
        }
    }
    if (action.type === FIL_TAG) {
        if (action.payload.eventType) {
            const tempSelectedTags = [...state.selectedTags, action.payload.eventValue];
            const tempDisplayArray = filterProducts(state.filters, tempSelectedTags, state.isMug);
            return {
                ...state,
                selectedTags: tempSelectedTags,
                displayArray: tempDisplayArray,
                displayedPage: 1
            }
        }
        else {
            const tempSelectedTags = state.selectedTags.filter((tag) => {
                return tag !== action.payload.eventValue;
            });
            const tempDisplayArray = filterProducts(state.filters, tempSelectedTags, state.isMug);
            return {
                ...state,
                selectedTags: tempSelectedTags,
                displayArray: tempDisplayArray,
                displayedPage: 1
            }
        }
    }
    if (action.type ===  FILTEREN) {
        if (action.payload.eventValue === "") {
            return {
                ...state,
                editedBrands: state.brands
            }
        }
        else {
            const tempEditedBrands = state.brands.filter(function (brand) { return brand.name.toLowerCase().includes(action.payload.eventValue); })
            return {
                ...state,
                editedBrands: tempEditedBrands
            }
        }
    }
    if (action.type === FILTER_TAGS_BY_NAME) {
        if (action.payload.eventValue === "") {
            return {
                ...state,
                editedTags: state.tags
            }
        }
        else {
            const tempEditedTags = state.tags.filter(function (tag) { return tag.toLowerCase().includes(action.payload.eventValue); })
            return {
                ...state,
                editedTags: tempEditedTags
            }
        }
    }
    if (action.type === PAGE_NAV) {
        return {
            ...state,
            displayedPage: action.payload.value
        }
    }
    if (action.type === BASKET_TO) {
        if (state. basketboolean) {
            return {
                ...state,
                 basketboolean: false,
            }
        }
        else {
            return {
                ...state,
                basketboolean: true,
            }
        }
    }
    if (action.type === ADD_BASKET) {
        let alreadyInBasket = false;
        let theIndex = -1;
        for (let i = 0; i < state.basket.length; i++) {
            if (state.basket[i].id === action.payload.item.id) {
                alreadyInBasket = true;
                theIndex = i;
            }
        }
        if (alreadyInBasket) {
            const tempBasketArray = state.basket;
            tempBasketArray[theIndex].amount = tempBasketArray[theIndex].amount + 1;
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload.item.price,
                basket: tempBasketArray,
            };
        }
        else {
            console.log(action.payload.item.name);
            const tempBasketArray = [...state.basket, { name: action.payload.item.name, price: action.payload.item.price, id: action.payload.item.id, amount: 1 }];
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload.item.price,
                basket: tempBasketArray,
                showAlert: true
            };
        }
    }
    if (action.type === REMOVE_BASKET) {
        let tempBasketArray = state.basket;
        let theIndex = -1;
        for (let i = 0; i < state.basket.length; i++) {
            if (state.basket[i].id === action.payload.item.id) {
                theIndex = i;
                tempBasketArray[i].amount = tempBasketArray[i].amount - 1;
            }
        }
        if (tempBasketArray[theIndex].amount === 0) {
            tempBasketArray = tempBasketArray.filter((item) => {
                return item.id !== action.payload.item.id;
            });
        }
        return {
            ...state,
            totalPrice: state.totalPrice - action.payload.item.price,
            basket: tempBasketArray,
        }
    }
   
    console.log("No matching action type");
    return state;
}

export default reducer;