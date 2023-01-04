import { useState } from "react";
import Input from "./form/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@example.com") {
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          title={"Email Address"}
          type={"email"}
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title={"Password"}
          type={"password"}
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr />

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </div>
  );
};

export default Login;
