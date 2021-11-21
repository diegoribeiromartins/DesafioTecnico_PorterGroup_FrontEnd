import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { _ } from "../helpers/debug";
import { configurationService } from "../services/configuration.service";
import { RootState } from "../store";
import { setConfiguration, setLoading } from "../store/configuration";

const MainLayout = () => {
  const { configuration } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const getConfiguration = async () => {
    try {
      _.group("getConfiguration");
      _.log("Disparado a ação de getConfiguration");
      dispatch(setLoading(true));

      const request = await configurationService();
      _.log("resposta do request", request);

      dispatch(setConfiguration(request.data));
    } catch (err) {
      _.error(err);
    } finally {
      _.groupEnd();
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (!configuration.data) getConfiguration();
  }, []);

  return (
    <div className="flex flex-col justify-between h-full w-full">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
