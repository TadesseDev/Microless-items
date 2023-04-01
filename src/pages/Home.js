import React from "react";
import HomePage from "./styles/Home.styled";
import Item from "../components/Item";
import bag from "../resources/images/bag.jpg";
import laptop from "../resources/images/laptop.jpg";
import camera from "../resources/images/camera.jpg";
import pc from "../resources/images/pc.jpg";
import mac from "../resources/images/mac.jpg";
import phone from "../resources/images/phone.jpg";
export default function Home() {
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const itemsInStore = [
    {
      name: "This is Item one",
      capacity: random(5, 250),
      pcsInPallet: random(5, 250),
      stock: random(5, 250),
      netPrice: random(5, 250),
      additionalPrice: 0,
      localAdditionalPrice: 0,
      image: laptop,
      additionalPriceTotal: function () {
        return Number(this["netPrice"]) + Number(this["additionalPrice"]);
      },
      total: function () {
        return (
          Number(this["netPrice"]) +
          Number(this["additionalPrice"]) +
          Number(this["localAdditionalPrice"])
        );
      },
    },
    {
      name: "This is Item one",
      capacity: random(5, 250),
      pcsInPallet: random(5, 250),
      stock: random(5, 250),
      netPrice: random(5, 250),
      additionalPrice: 0,
      localAdditionalPrice: 0,
      image: camera,
      additionalPriceTotal: function () {
        return Number(this["netPrice"]) + Number(this["additionalPrice"]);
      },
      total: function () {
        return (
          Number(this["netPrice"]) +
          Number(this["additionalPrice"]) +
          Number(this["localAdditionalPrice"])
        );
      },
    },
    {
      name: "This is Item one",
      capacity: random(5, 250),
      pcsInPallet: random(5, 250),
      stock: random(5, 250),
      netPrice: random(5, 250),
      additionalPrice: 0,
      localAdditionalPrice: 0,
      image: mac,
      additionalPriceTotal: function () {
        return Number(this["netPrice"]) + Number(this["additionalPrice"]);
      },
      total: function () {
        return (
          Number(this["netPrice"]) +
          Number(this["additionalPrice"]) +
          Number(this["localAdditionalPrice"])
        );
      },
    },
    {
      name: "This is Item one",
      capacity: random(5, 250),
      pcsInPallet: random(5, 250),
      stock: random(5, 250),
      netPrice: random(5, 250),
      additionalPrice: 0,
      localAdditionalPrice: 0,
      image: bag,
      additionalPriceTotal: function () {
        return Number(this["netPrice"]) + Number(this["additionalPrice"]);
      },
      total: function () {
        return (
          Number(this["netPrice"]) +
          Number(this["additionalPrice"]) +
          Number(this["localAdditionalPrice"])
        );
      },
    },
    {
      name: "This is Item one",
      capacity: random(5, 250),
      pcsInPallet: random(5, 250),
      stock: random(5, 250),
      netPrice: random(5, 250),
      additionalPrice: 0,
      localAdditionalPrice: 0,
      image: pc,
      additionalPriceTotal: function () {
        return Number(this["netPrice"]) + Number(this["additionalPrice"]);
      },
      total: function () {
        return (
          Number(this["netPrice"]) +
          Number(this["additionalPrice"]) +
          Number(this["localAdditionalPrice"])
        );
      },
    },
    {
      name: "This is Item one",
      capacity: random(5, 250),
      pcsInPallet: random(5, 250),
      stock: random(5, 250),
      netPrice: random(5, 250),
      additionalPrice: 0,
      localAdditionalPrice: 0,
      image: phone,
      additionalPriceTotal: function () {
        return Number(this["netPrice"]) + Number(this["additionalPrice"]);
      },
      total: function () {
        return (
          Number(this["netPrice"]) +
          Number(this["additionalPrice"]) +
          Number(this["localAdditionalPrice"])
        );
      },
    },
    {
      name: "This is Item one",
      capacity: random(5, 250),
      pcsInPallet: random(5, 250),
      stock: random(5, 250),
      netPrice: random(5, 250),
      additionalPrice: 0,
      localAdditionalPrice: 0,
      image: camera,
      additionalPriceTotal: function () {
        return Number(this["netPrice"]) + Number(this["additionalPrice"]);
      },
      total: function () {
        return (
          Number(this["netPrice"]) +
          Number(this["additionalPrice"]) +
          Number(this["localAdditionalPrice"])
        );
      },
    },
    {
      name: "This is Item one",
      capacity: random(5, 250),
      pcsInPallet: random(5, 250),
      stock: random(5, 250),
      netPrice: random(5, 250),
      additionalPrice: 0,
      localAdditionalPrice: 0,
      image: laptop,
      additionalPriceTotal: function () {
        return Number(this["netPrice"]) + Number(this["additionalPrice"]);
      },
      total: function () {
        return (
          Number(this["netPrice"]) +
          Number(this["additionalPrice"]) +
          Number(this["localAdditionalPrice"])
        );
      },
    },
  ];

  return (
    <HomePage>
      {itemsInStore.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </HomePage>
  );
}
