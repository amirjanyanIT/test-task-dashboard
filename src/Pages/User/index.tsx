import { Layout } from "../../components";
import { Container } from './styles';
import { Helmet } from "react-helmet";

export const User = () => {
  return (
    <Layout title="Users">
      <Helmet>
        <title>User</title>
      </Helmet>
      <Container>
        <div className="list">
          <div className="card">
            <div className="card--image">Image</div>
            <div className="card--name">Name</div>
            <div className="card--actions">Actions</div>
          </div>
          <div className="card">
            <div className="card--image">Image</div>
            <div className="card--name">Name</div>
            <div className="card--actions">Actions</div>
          </div>
          <div className="card">
            <div className="card--image">Image</div>
            <div className="card--name">Name</div>
            <div className="card--actions">Show Reports</div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
