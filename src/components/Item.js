import React from "react";
import ItemContainer from "./styles/Item.styled";
export default function Item({ item }) {
  const [detail, setDetails] = React.useState(item);

  const updateDetail = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...detail, [name]: value });
  }
  const updatePrice = (e) => {
    const name = e.target.parentNode.getElementsByTagName("input")[0].name;
    let value = e.target.parentNode.getElementsByTagName("input")[0].value;
    value = e.target.className === "plus" ? Number(value) + 1 : value - 1;
    value = value < 0 ? 0 : value;
    setDetails({ ...detail, [name]: value });
  }
  return (
    <ItemContainer>
      <div className="item">
        <h1>{detail.name}</h1>
        <div className="description">
          <span>
            <strong>Capacity: </strong>
            {detail.capacity}
          </span>
          <span>
            <strong>Pcs in pallet: </strong>
            {detail.pcsInPallet}
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
              value={detail.stock}
              onChange={updateDetail}
              placeholder="amount in stock"
            />
          </div>
          <div>
            <label htmlFor="netPrice">
              <strong>Net Price:</strong>
            </label>
            <input
              type="text"
              name="netPrice"
              id="netPrice"
              value={detail.netPrice}
              onChange={updateDetail}
              placeholder="Net Price"
            />
          </div>
          <div className="colum">
            <label htmlFor="additionalPrice">
              <strong>Additions on Price FZ:</strong>
            </label>
            <div className="input-container">
              <button type="button" className="plus" onClick={updatePrice}>
                +
              </button>
              <input
                type="number"
                name="additionalPrice"
                id="additionalPrice"
                value={detail.additionalPrice}
                onChange={updateDetail}
                placeholder="0.0"
              />
              <button type="button" className="minus" onClick={updatePrice}>
                -
              </button>
            </div>
            <span>
              <strong>total:</strong> {detail.additionalPriceTotal()}
            </span>
          </div>
          <div className="colum">
            <label htmlFor="localAdditionalPrice">
              <strong>Local Additions on FZ:</strong>
            </label>
            <div className="input-container">
              <button type="button" className="plus" onClick={updatePrice}>
                +
              </button>
              <input
                type="number"
                name="localAdditionalPrice"
                id="localAdditionalPrice"
                value={detail.localAdditionalPrice}
                onChange={updateDetail}
                placeholder="0.0"
              />
              <button type="button" className="minus" onClick={updatePrice}>
                -
              </button>
            </div>
            <span>
              <strong>total:</strong>
              {detail.total()}
            </span>
          </div>
        </form>
        <div className="item-picture">
          <img src={detail.image} alt="" />
        </div>
      </div>
    </ItemContainer>
  );
}
