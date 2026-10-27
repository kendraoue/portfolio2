import { site } from "../config/site";

export const asset = (name) =>
  `${site.assetBase}${encodeURIComponent(name)}`;

export const publicAsset = (name) =>
  `${site.publicBase}${encodeURIComponent(name)}`;
