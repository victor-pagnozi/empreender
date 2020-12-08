import React from "react";
import fogueteImg from "../../assets/images/login.svg";
import avatarImg from "../../assets/images/avatar.svg";
import "./styles.css";
import "../../assets/fontawesome/css/all.css";
import {Link} from "react-router-dom";

function Login() {
    const AltIconColor = props => {
        const handleFocus = e => {
            e.target.classList.add("focus");
        }
        const handleBlur = e => {
            e.target.classList.remove("focus");
        }
    }

  return (
    <div className="container">
      <div className="img-foguete">
        <img className="foguete" src={fogueteImg} alt="Foguete" />
      </div>

      <div className="login-container">
        <form action="">
          <img src={avatarImg} alt="" className="avatar" />
          <h1>EMPREENDEDORISMO</h1>
          <h5>Seja Bem Vindo! Por favor acesse sua conta, ou cadastre-se!</h5>
          <div className="input-div label-float login">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="input-email">
              <input
                type="text"
                id="email"
                name="email"
                aria-describedby="email"
                placeholder=" "
                required
              />
              <label htmlFor="email">E-mail</label>
            </div>
          </div>
          <div className="input-div password label-float">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="input-password">
              <input
                type="password"
                id="password"
                name="password"
                aria-describedby="password"
                placeholder=" "
                required
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <a href="#">
            Esqueceu a senha? Não se preocupe, clique aqui para recuperá-la
          </a>
          <Link className="btn" to="/Home">Home</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;