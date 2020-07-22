import axios from "axios";

export async function addToCart(userId, productId, quantity, itemname, price, image) {
  try {
    console.log("ATC is firing with", userId, productId, quantity, itemname, price, image)
    const { data } = await axios.post("/api/cart", { userId, productId, quantity, itemname, price, image });
    console.log("sending to shoppingcart.js")
    return data;
  } catch (error) {
    throw error;
  }
}

export async function removeFromCart(id) {
  try {
    const { data } = await axios.delete(`/api/cart/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

// export async function updateCartForUser() {
//   try {
//     console.log("UDC is firing")
//     const { data } = await axios.post("/api/cart/");
//     console.log(data)
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
