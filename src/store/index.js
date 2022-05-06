import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginService from "./services/loginService/loginService";
import dashboardServices from "./services/dashboardServices/dashboardServices";
import categoryServices from "./services/categoryServices/categoryServices";
import productServices from "./services/productServices/productServices";
import userServices from "./services/userServices/userServices";
import businessReducer from "./reducers/businessReducer"
import usersReducer from "./reducers/usersReducer";
const Store = configureStore({
  reducer: {
    [loginService.reducerPath]: loginService.reducer,
    [dashboardServices.reducerPath]: dashboardServices.reducer,
    [categoryServices.reducerPath]: categoryServices.reducer,
    [productServices.reducerPath]: productServices.reducer,
    [userServices.reducerPath]: userServices.reducer,
    businessInfo: businessReducer,
    usersInfo: usersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      loginService.middleware,
      dashboardServices.middleware,
      categoryServices.middleware,
      productServices.middleware,
      userServices.middleware,
    ]),
});
export default Store;
