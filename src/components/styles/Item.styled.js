import styled from "styled-components";

const ItemComponent = styled.div`
  background: #fff;
  width: max-content;
  min-width: 300px;
  max-width: 500px;
  border-radius: 10px;
  .item {
    h1 {
      margin: 0;
      padding: 10px;
      text-align: center;
    }
    .item-picture {
      height: 200px;
      margin: auto;
      img {
        height: 100%;
      }
    }
  }
`;

export default ItemComponent;
