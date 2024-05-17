import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import countReducer from "./slice/countSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistUserConfig = {
  key: "user",
  storage,
};

const persistCountConfig = {
  key: "count",
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
const persistedCountReducer = persistReducer(persistCountConfig, countReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    counter: persistedCountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
