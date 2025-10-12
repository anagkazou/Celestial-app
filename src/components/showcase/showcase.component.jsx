import React, { useState, useEffect } from "react";
import "./showcase.styles.scss";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ShopItem from "../shop-item/shop-item.component";

import { selectCollections, selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import { shopFilterAnimation, ShopScrollAnimation } from "../../js/animations";
import { get } from "jquery";

const ItemsShowcase = ({ filtered, category, location, collections, isFetching }) => {

  useEffect(() => {
    shopFilterAnimation();
    ShopScrollAnimation();
  });

  const isActiveCategory = (categoryName) => {
    const currentPath = location.pathname;
    if (currentPath === '/collections') {
      return categoryName === 'Everything';
    }
    if (currentPath.startsWith('/category/')) {
      const activeCategory = currentPath.split('/category/')[1];
      return categoryName.toLowerCase() === activeCategory;
    }
    return false;
  };





  let categoryToShow = collections?.[category];
  let allItemsInShop = [];
  let shopCategories = [];
  let isFiltered = filtered ? true : false;


  (function getShopCategories() {
    for (const itemCat in collections) {
      shopCategories.push(itemCat);
    }
    return shopCategories;
  })();
  //self invoking function to populate allStoreItems array.

  (function getAllItems() {
    for (const itemCat in collections) {
      allItemsInShop.unshift(...collections[itemCat].items);
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
              <Link to="/collections" style={{
                fontStyle: isActiveCategory('Everything') ? 'italic' : 'normal',
                color: isActiveCategory('Everything') ? '#6c4f23' : 'inherit'
              }}>
                Everything
              </Link>
            </li>
            {shopCategories.map((category) => (
              <li key={category}>
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  style={{
                    fontStyle: isActiveCategory(category) ? 'italic' : 'normal',
                    color: isActiveCategory(category) ? '#6c4f23' : 'inherit'
                  }}
                >
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
            {isFetching && <div className="loading-spinner">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="spinner"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#6c4f23"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="60"
                  strokeDashoffset="60"
                />
              </svg>
            </div>}
            {isFiltered && (!categoryToShow || !categoryToShow?.items) && (

              <div className="showcase-container">
                <div className="showcase">
                  <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
                    Category "{category}" not found
                  </div>
                </div>
              </div>
            )}
  
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
              <Link to="/collections" style={{
                fontStyle: isActiveCategory('Everything') ? 'italic' : 'normal',
                color: isActiveCategory('Everything') ? '#6c4f23' : 'inherit'
              }}>
                Everything
              </Link>
            </li>
            {shopCategories.map((category) => (
              <li key={category}>
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  style={{
                    fontStyle: isActiveCategory(category) ? 'italic' : 'normal',
                    color: isActiveCategory(category) ? '#6c4f23' : 'inherit'
                  }}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="showcase-container">
          <div className="showcase">
            {categoryToShow?.items?.map((item) => {
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

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  isFetching: selectIsCollectionFetching,
});

export default connect(mapStateToProps)(withRouter(ItemsShowcase));
