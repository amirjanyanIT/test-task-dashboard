import { useEffect } from "react";
import { Layout } from "./components";
import { Helmet } from "react-helmet";

export const App = () => {

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      
    }
  }, [])

  return (
    <Layout title="Test Task App">
      <Helmet>
        <title>Test Task App</title>
      </Helmet>
    </Layout>
  );
};
