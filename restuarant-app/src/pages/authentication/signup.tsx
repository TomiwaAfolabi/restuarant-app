import Button from "../../components/reusables/Button";

const signup = () => {
  return (
    <div>
      <div className="content">
        <div className="firstname">
          <label>Firstname</label>
          <input type="text" name="firstname" />
        </div>
        <div className="lastname">
          <label>Lastname</label>
          <input type="text" name="lastname" />
        </div>
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

export default signup;
