import { Layout } from "./components";
import { Helmet } from "react-helmet";

export const App = () => {
  return (
    <Layout title="Test Task App">
      <Helmet>
        <title>Test Task App</title>
      </Helmet>
    </Layout>
  );
};
