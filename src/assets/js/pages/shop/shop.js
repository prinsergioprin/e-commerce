import "./shop.css";
import { resetMain } from "../../utils/helpers.js";
import { renderProducts } from "../../components/products/products.js";

export function renderShop() {
  resetMain();
  renderProducts();
}
