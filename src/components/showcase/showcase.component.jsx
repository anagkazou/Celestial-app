import React, { useState, useEffect } from "react";
import "./showcase.styles.scss";
import { Link } from "react-router-dom";

import ShopItem from "../shop-item/shop-item.component";

import SHOP_DATA from "../../pages/shop/shop.data";

import { shopFilterAnimation, ShopScrollAnimation } from "../../js/animations";
import { get } from "jquery";

const ItemsShowcase = ({ filtered, category }) => {
  const [furniture, setFurniture] = useState(SHOP_DATA);

  useEffect(() => {
    shopFilterAnimation();
    ShopScrollAnimation();
  });

  //improve this declarations
  let categoryToShow = furniture[category];
  let allItemsInShop = [];
  let shopCategories = [];
  let isFiltered = filtered ? true : false;
  (function getShopCategories() {
    for (const itemCat in furniture) {
      shopCategories.push(itemCat);
    }
    return shopCategories;
  })();
  //self invoking function to populate allStoreItems array.

  (function getAllItems() {
    for (const itemCat in furniture) {
      allItemsInShop.unshift(...furniture[itemCat].items);
    }
    return allItemsInShop;
  })();

  if (!isFiltered) {
    return (
      <>
        <div className="filter">
          <div className="filter__hide">&#10005;</div>
          <div className="title">Browse Collections</div>
          <ul>
            <li>
              <Link to="/collections">Everything</Link>
            </li>
            {shopCategories.map((category) => (
              <li>
                <Link to={`/category/${category.toLowerCase()}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="showcase-container">
          <div className="showcase">
            {allItemsInShop.map((el) => {
              return (
                <ShopItem
                  key={el.id}
                  category={el.category}
                  item={el}
                ></ShopItem>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="filter">
          <div className="filter__hide">&#10005;</div>
          <div className="title">Browse Collections</div>
          <ul>
            <li>
              <Link to="/collections">Everything</Link>
            </li>
            {shopCategories.map((category) => (
              <li>
                {" "}
                <Link to={`/category/${category.toLowerCase()}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="showcase-container">
          <div className="showcase">
            {categoryToShow.items.map((item) => {
              return (
                <ShopItem
                  key={item.id}
                  category={categoryToShow.category}
                  item={item}
                ></ShopItem>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default ItemsShowcase;
