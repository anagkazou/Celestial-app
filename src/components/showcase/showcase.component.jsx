import React, {useState, useEffect} from "react";
import "./showcase.styles.scss";
import { Link } from "react-router-dom";

import ShopItem from "../shop-item/shop-item.component";

import SHOP_DATA from "../../pages/shop/shop.data";

import { shopFilterAnimation, ShopScrollAnimation } from "../../js/animations";

const ItemsShowcase =(props)=> {
   
    const [furniture, setFurniture] = useState(SHOP_DATA);

  useEffect(()=> {
    shopFilterAnimation();
    ShopScrollAnimation();
  })

     //improve this declarations
    let itemsToRender =  props.itemsToRender;
     let isFiltered =  props.filtered;
    let category = furniture.find((x) => x.id === itemsToRender);

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
              {furniture.map(({ category }) => (
                <li>
                  {" "}
                  <Link
                    key={category.id}
                    to={`/category/${category.toLowerCase()}`}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="showcase-container">
            <div className="showcase">
              {  furniture.map((el) =>
                el.items.map((item) => {
                  return (
                    <ShopItem
                      key={item.id}
                      category={el.category}
                      item={item}
                    ></ShopItem>
                  );
                })
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
                <Link to="/collections">Everything</Link>
              </li>
              {  furniture.map(({ category }) => (
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
              {category.items.map((item) => {
                return (
                  <ShopItem
                    key={item.id}
                    category={category.category}
                    item={item}
                  ></ShopItem>
                );
              })}
            </div>
          </div>
        </>
      );
    }
  }
 
export default ItemsShowcase;
