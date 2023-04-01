import styled from "styled-components";

const ItemComponent = styled.div`
  background: #fff;
  width: 30vw;
  min-width: 370px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px #cdc4c461;
  overflow: hidden;
  margin: 20px;
  .item {
    margin: 10px;
    padding: 10px;
    h1 {
      margin: 10px;
      padding: 10px;
      text-align: center;
    }
    .item-picture {
      height: 200px;
      img {
        height: 100%;
        display: block;
        margin: auto;
      }
    }

    form > div {
      font-size: 1.2rem;
      display: grid;
      align-items: center;
      gap: 5px;
      margin: 25px;
      overflow: hidden;
      label {
        min-width: 20%;
      }
      .input-container {
        display: flex;
      }
      input {
        outline: none;
        min-height: 20px;
        border: solid 1px #ccc;
        border-radius: 5px;
        padding: 5px;
      }
    }

    form {
      .colum {
        display: flex;
        flex-direction: column;
        .input-container {
          position: relative;
          width: 100%;
          input {
            width: 100%;
            padding: 5px;
            padding-left: 35px;
          }
          button {
            position: absolute;
            width: 30px;
            height: 100%;
            border: none;
            color: #fff;
            background: rgb(239 98 98);
            border-radius: 5px;
            font-size: 1.3rem;
          }
          .plus {
            left: 100%;
            transform: translateX(-100%);
            background: rgb(8 211 8);
          }
        }
      }
    }
  }
  .description {
    display: flex;
    justify-content: space-around;
  }
`;

export default ItemComponent;
