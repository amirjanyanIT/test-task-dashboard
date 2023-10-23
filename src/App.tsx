import { useEffect } from "react";
import { Layout } from "./components";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Test Task App">
      <Helmet>
        <title>Test Task App</title>
      </Helmet>
    </Layout>
  );
};
