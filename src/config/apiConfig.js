const SERVICE_API_HOST = process.env.REACT_APP_SERVICE_API_HOST;

const getProductsURL = () => `${SERVICE_API_HOST}/products`;

const getProductURL = (id) => `${SERVICE_API_HOST}/product/${id}`;

const getBrandsURL = () => `${SERVICE_API_HOST}/brands`;

const getCategoriesURL = () => `${SERVICE_API_HOST}/categories`;

const getCartURL = (id) => `${SERVICE_API_HOST}/cart/${id}`;

const addNewCartURL = () => `${SERVICE_API_HOST}/create-cart`;

const addNewProductToCartURL = () => `${SERVICE_API_HOST}/add-product-to-cart`;

export {
  getProductsURL,
  getProductURL,
  getBrandsURL,
  getCategoriesURL,
  getCartURL,
  addNewCartURL,
  addNewProductToCartURL,
};
