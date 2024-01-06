import Button from "../../components/reusables/Button";
import "./style.scss";
const login = () => {
  return (
    <div>
      <div className="content">
        <div className="email">
          <label>Email Address</label>
          <input type="email" name="email" />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" name="email" />
          <p>Forgot Password?</p>
        </div>
        <Button/>
      </div>
    </div>
  );
};

export default login;
