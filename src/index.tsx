import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/css/typography.css";
import "./assets/css/root.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";

import Loading from "./components/Loading";
import MainLayout from "./layouts/Main.layout";

const Index = React.lazy(() => import("./pages/Index"));
const Movie = React.lazy(() => import("./pages/Movie"));
const Error404 = React.lazy(() => import("./pages/Error404"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path=""
              element={
                <React.Suspense fallback={<Loading />}>
                  <Index />
                </React.Suspense>
              }
            />
            <Route
              path="movie/:id"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Movie />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Loading />}>
                <Error404 />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
