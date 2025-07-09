import { axiosMock } from "./axiosInstance";

function getProducts() {
  return axiosMock.get("/produk").then((res) => res.data);
}

function getProductById(id) {
  return axiosMock.get(`/produk/${id}`).then((res) => res.data);
}

function createProduct(product) {
  return axiosMock.post("/produk", product).then((res) => res.data);
}

function updateProductStock(id, newStock) {
  return axiosMock
    .put(`/produk/${id}`, { stock: newStock })
    .then((res) => res.data);
}

function deleteProduct(id) {
  return axiosMock.delete(`/produk/${id}`).then((res) => res.data);
}

export {
  getProducts,
  getProductById,
  createProduct,
  updateProductStock,
  deleteProduct,
};
