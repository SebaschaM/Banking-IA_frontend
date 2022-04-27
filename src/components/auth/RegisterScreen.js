import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/auth/register.css';
/*eslint-disable*/
export const RegisterScreen = () => {
  const inputIMG = useRef();

  const handleIMG = () => {
    inputIMG.current.click();
  };

  return (
    <div className="RegForm animate__animated animate__fadeIn">
      <section className="containerReg">
        <div className="user singupBx">
          <div className="formBx">
            <form>
              <h2>Sing Up</h2>
              <div className="form__img" onClick={handleIMG}>
                <i className="fa-solid fa-camera"></i>
              </div>

              <div className="form__group form__hide">
                <input className="form__input form__input" ref={inputIMG} type="file" />
              </div>
              <input type="text" name="tarjeta" placeholder="N° Tarjeta" />
              <input type="text" name="nombres" placeholder="Nombres/Apellidos" />
              <input type="email" name="email" placeholder="example@gmail.com" />
              <input type="text" name="dni" placeholder="N° Dni" />
              <input type="password" name="pass" placeholder="Contraseña" />
              <br></br>
              <input type="submit" value="Register" />
              <p className="signup">
                ¿Tienes una cuenta? <Link to="/auth/login">Inicia Sesión</Link>
              </p>
            </form>
          </div>
          <div className="imgBxR">
            <div className="bubbleR">Inicia Tu Cuenta Ahora y Disfruta de los Beneficios</div>
            <img src="../assets/auth/creditcard.svg" />
          </div>
        </div>
      </section>
    </div>
  );
};
