import { useState } from "react";
import { Layout } from "../../Components";
import { Container } from "./styles";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const handleLogin = () => {
    if (form.login === "admin" && form.password === "admin") {
      localStorage.setItem("auth", JSON.stringify(true));
      navigate("/");
    } else {
      setForm({
        login: "",
        password: "",
      });
    }
  };

  return (
    <Layout title="Users">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin(); 
        }}>
          <input
            type=""
            value={form.login}
            onChange={(e) => setForm({ ...form, login: e.target.value })}
          />
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </Container>
    </Layout>
  );
};
