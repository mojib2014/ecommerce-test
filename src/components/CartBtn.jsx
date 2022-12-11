import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


export default function CartBtn() {
  //we get a state of addItems
  //write the name of the file not the function
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span>Cart({state.length})
      </NavLink>
    </>
    // <div className="row">
    //   <div className="col-md-4">
    //     <img
    //       src={product.image}
    //       alt={product.title}
    //       height="200px"
    //       width="180px"
    //     />
    //   </div>
    //   <div className="col-md-4">
    //     <h3>{product.title}</h3>
    //     <p className="lead fw-bold">
    //       {product.qty} x ${product.price}=$
    //       {product.qty * product.price}
    //     </p>
    //     <button className='btn btn-outline-dark me-4' onClick={() => handleButton(product)}>
    //       <i className='fa fa-minus'></i>
    //     </button>
    //     <button className='btn btn-outline-dark ' onClick={() => handleButton(product)}>
    //       <i className='fa fa-plus'></i>
    //     </button>
    //   </div>
    // </div>
  );
}
