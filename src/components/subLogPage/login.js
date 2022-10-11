import React, { useState, useEffect } from "react";
import { validate } from "./validateUser";
import styles from './logIn.module.css' ;
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../alerts/toastNotif";
import {Link } from "react-router-dom";


const Login = () => {

    const [data, setData] = useState({
        name: "",
        password: "", 
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouced] = useState({});

    useEffect(() => {
        setErrors(validate(data , "login"));
    }, [data])


    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }

    }

    const focusHandler = event => {
        setTouced({ ...touched, [event.target.name]: true })
    }
    const submitHandler = event => {
        event.preventDefault();
        notify()

        if (!Object.keys(errors).length) {
            notify("عملیات با موفقیت انجام شد", "sucsses")
        } else {
            setTouced({
                name: true,
                email: true,
                password: true,
                confrimPassword: true,
                isAccepted: true
            }
            )
            notify("خطا", "failed")
        }

    }



    return (
        <div id={styles.singup}>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <div className={styles.titleForm}>
                        <div className={styles.back}></div>
                        <Link className={styles.enterTitle} to="/SignUp"> ثبت نام</Link>  
                        <span to="/Login">ورود </span>
                    </div>
                    <form className={styles.submitFields} onSubmit={submitHandler}>
                        <div>

                            <div>
                                <label htmlFor="">نام کاربری</label>
                                <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                            </div>
                            {errors.name && touched.name && <span>{errors.name}</span>}
                        </div>
                      
                        <div>
                            <div>

                                <label htmlFor="">رمز عبور </label>
                                <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                            </div>

                            {errors.password && touched.password && <span>{errors.password}</span>}
                        </div>
                      
                    </form>

                  
                        <button type="submit" onClick={submitHandler} className={styles.btnsub} >
                        ورود
  
                        </button>
                  
                </div>


            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
