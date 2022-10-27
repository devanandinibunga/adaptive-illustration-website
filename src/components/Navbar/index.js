import "./Navbar.scss";
import {
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";

export const Navbar = () => {
  return (
    // <div class="navbar">
    //   <div class="nav">
    //     <input type="checkbox" id="nav-check" />
    //     <div class="nav-header">
    //       <h1 class="nav-title">ToolM5</h1>
    //     </div>
    //     <div class="nav-btn">
    //       <label for="nav-check">
    //         <span></span>
    //         <span></span>
    //         <span></span>
    //       </label>
    //     </div>

    //       <div class="nav-links d-flex">
    //         <a href="/" target="_blank">
    //           About us
    //         </a>
    //         <a href="/" target="_blank">
    //           Services
    //         </a>
    //         <a href="/" target="_blank">
    //           Contact
    //         </a>
    //         <div className="d-flex flex-direction-column flex-wrap-wrap width:90%">
    //           <div className="navbar-icon-container">
    //             <a href="/" class = 'rounded-3 navbar-icon'><i class="bi bi-facebook"></i></a>
    //             <a href="/" class = 'rounded-3 navbar-icon'><i class="bi bi-twitter"></i></a>
    //             <a href="/" class = 'rounded-3 navbar-icon'><i class="bi bi-instagram"></i></a>
    //         </div>
    //         <button class="navbar-card-btn width:50%">Get started</button>
    //        </div>
    //       </div>
          
    //     </div>
        

    // </div>
    <div class="navbar">
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">ToolM5</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
          <a href="/" target="_blank" class="nav-link">
            About us
          </a>
          <a href="/" target="_blank" class="nav-link">
            Services
          </a>
          <a href="/" target="_blank" class="nav-link">
            Contact
          </a>
          <div class="icons-container">
            <AiOutlineFacebook class="icons" />
            <AiOutlineWhatsApp class="icons" />
            <AiFillInstagram class="icons" />
        </div>
        {/* <a type="button" class="nav-btn" href="/">Get started</a> */}
      </div>
    </div>
  </div>

  );
};