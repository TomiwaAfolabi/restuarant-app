import { useNavigate } from 'react-router-dom';
import "./styles.scss";
import Logo from "../../assets/svg/general/logo.svg";
import LPImageL from "../../assets/svg/general/landing-img.svg";
import LPImageR from "../../assets/svg/general/landing-img-1.svg";



const Welcome = () => {
  const navigate = useNavigate()

  const toAuth=()=>{
    navigate('/authentication')
  }

  return (
    <div className="landing_page">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <h1 className="text">Food for Everyone</h1>

      <div className="landing_container">
        <div className="landing_img">
        
          <div className="img1">
            
            <img src={LPImageL} alt="Logo" />
          </div>
          <div className="img2">
      
            <img src={LPImageR} alt="Logo" />
          </div>
        </div>
         <div className="button_container">
        <div className="btn">
          <button onClick={toAuth}>Get Started</button>
        </div>
      </div>
      </div>

     
    </div>
  );
};

export default Welcome;

