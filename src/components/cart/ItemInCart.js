import React from "react";
function addOne(props) {
  {
    props.quantity++;
    window.location.reload(false);
  }
}

function ItemInCart(props) {
  return (
    <>
      <div className="layout-inline row">
        <div className="col col-pro layout-inline">
          {/*<img src={props.image} alt="/" />*/}
          <p>{props.itemname}</p>
        </div>

        <div className="col col-price col-numeric align-center ">
          <p>${props.price}</p>
        </div>

        <div className="col col-qty layout-inline">
          <a href="#" className="qty qty-minus">
            -
          </a>
          <input type="numeric" value={props.quantity} />
          <a href="#" className="qty qty-plus" onClick={addOne}>
            +
          </a>
        </div>

        <div className="col col-vat col-numeric">
          <p>7%</p>
        </div>
        <div className="col col-total col-numeric">
          <p>{Math.round(props.price * props.quantity * 1.07 * 100) / 100}</p>
        </div>
      </div>
    </>
  );
}

export default ItemInCart;
