import React from "react";
import ItemContainer from "./styles/Item.styled";
export default function item() {
  return (
    <ItemContainer>
      <div className="item">
        <h1>Item one</h1>
        <div className="description">
          <span>
            <strong>Capacity:</strong>100
          </span>
          <span>
            <strong>Pcs in pallet:</strong>100
          </span>
        </div>
        <form action="/" method="post">
          <div>
            <label htmlFor="stock">
              <strong> Stock:</strong>
            </label>
            <input
              type="text"
              name="stock"
              id="stock"
              placeholder="amount in stock"
            />
          </div>
          <div>
            <label htmlFor="net-price">
              <strong>Net Price:</strong>
            </label>
            <input
              type="text"
              name="net-price"
              id="net-price"
              placeholder="Net Price"
            />
          </div>
          <div>
            <label htmlFor="additional-price">
              <strong>Additions on Price FZ:</strong>
            </label>
            <div className="input-container">
              <button type="button">+</button>
              <input
                type="number"
                name="additional-price"
                id="additional-price"
                placeholder="Addition on price"
              />
              <button type="button">-</button>
            </div>
            <span>
              <strong>total:</strong>100
            </span>
          </div>
          <div>
            <label htmlFor="local-additional-price">
              <strong>Local Additions on FZ:</strong>
            </label>
            <div className="input-container">
              <button type="button">+</button>
              <input
                type="number"
                name="local-additional-price"
                id="local-additional-price"
                placeholder="local addition on price"
              />
              <button type="button">-</button>
            </div>
            <span>
              <strong>total:</strong>100
            </span>
          </div>
        </form>
        <div className="item-picture">
          <img src="" alt="" srcset="" />
        </div>
      </div>
    </ItemContainer>
  );
}
