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

export const Report = () => {
  const dispatch = useDispatch<any>();
  const reports = useSelector<RootState, ReportsStateI>(
    (state) => state.reports
  );
  const users = useSelector<RootState, UsersStateI>((state) => state.users);

  useEffect(() => {
    dispatch(fetchReports());
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Reports">
      <Helmet>
        <title>Reports</title>
      </Helmet>
      <Container>
        <div className="list">
          {reports.data.map((report, index) => {
            return (
              <div className="item" key={index}>
                <div className="title">{report.title}</div>
                <div className="user">
                  <div
                    className="avatar"
                    style={{
                      backgroundImage: `url(${
                        users.data.find((u) => u.id === report.userId)?.image
                      })`,
                    }}
                  ></div>
                  <div className="email">
                    {users.data.find((u) => u.id === report.userId)?.email}
                  </div>
                </div>
                <div className="content">{report.content}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};
