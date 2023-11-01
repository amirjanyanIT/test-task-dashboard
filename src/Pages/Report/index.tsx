import { useEffect } from "react";
import { Layout } from "../../Components";
import { Helmet } from "react-helmet";
import { Container } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import {
  ReportsStateI,
  UsersStateI,
  fetchReports,
  fetchUsers,
} from "../../slices";
import { RootState } from "../../store";
import { useNavigate, useParams } from "react-router-dom";

export const Report = () => {
  const { id } = useParams();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const reports = useSelector<RootState, ReportsStateI>(
    (state) => state.reports
  );
  const users = useSelector<RootState, UsersStateI>((state) => state.users);

  useEffect(() => {
    dispatch(fetchReports());
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderReports = () => {
    const cReports = id
      ? reports.data.filter((r) => r.userId === Number(id))
      : reports.data;

    return cReports.map((report, index) => {
      
      const user = users.data.find((u) => u.id === report.userId);

      return (
        <div className="item" key={index}>
          <div className="title">{report.title}</div>
          <div className="user">
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${user?.image})`,
              }}
            ></div>
            <div className="email">{user?.name} {user?.email}</div>
          </div>
          <div className="content">{report.content}</div>
        </div>
      );
    });
  };

  return (
    <Layout title="Reports">
      <Helmet>
        <title>Reports</title>
      </Helmet>
      <Container>
        <div className="header"><button onClick={() => navigate(-1)}>Go Back</button></div>
        <div className="list">{renderReports()}</div>
      </Container>
    </Layout>
  );
};
