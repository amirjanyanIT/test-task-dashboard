import { useEffect } from "react";
import { Layout } from "../../Components";
import { Container } from "./styles";
import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux";
import { UsersStateI, fetchUsers } from "../../slices";
import { RootState } from "../../store";

export const User = () => {
  const dispatch = useDispatch<any>();
  const users = useSelector<RootState, UsersStateI>((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Users">
      <Helmet>
        <title>User</title>
      </Helmet>
      <Container>
        <div className="list">
          {users.data.map((user, index) => (
            <div className="card" key={index}>
              <div className="card--image" style={{ backgroundImage: `url(${user.image})`  }}></div>
              <div className="card--name">{user.name}</div>
              <div className="card--name">{user.email}</div>
              <div className="card--actions">REPORTS</div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};
