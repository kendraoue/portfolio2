import React from "react";
import { asset, publicAsset } from "../../../utils/assets";

export function InterestItem({ item, compact }) {
  return (
    <div className="interest" title={item.name}>
      <div className="interest-art">
        <img className="pixel-heart" src={asset("PixelHeart.png")} alt="" />
        <img className="interest-icon" src={publicAsset(item.image)} alt="" />
      </div>
      <strong>{item.name}</strong>
      {compact && <p>{item.description}</p>}
    </div>
  );
}
