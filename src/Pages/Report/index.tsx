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
import { useParams } from "react-router-dom";

export const Report = () => {
  const { id } = useParams();
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


  const renderReports = () => {
    const cReports = id ? reports.data.filter(r => r.userId === Number(id)) : reports.data; 
    
    return cReports.map((report, index) => {
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
    })
  }

  return (
    <Layout title="Reports">
      <Helmet>
        <title>Reports</title>
      </Helmet>
      <Container>
        <div className="list">
          {renderReports()}
        </div>
      </Container>
    </Layout>
  );
};
