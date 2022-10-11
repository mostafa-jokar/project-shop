import React, { useState, useEffect } from "react";
import { validate } from "./validateUser";
import styles from './singUp.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../alerts/toastNotif";
import { Link } from "react-router-dom";


const Singup = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confrimPassword: "",
        isAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouced] = useState({});

    useEffect(() => {
        setErrors(validate(data , "SingUp"));
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
                        <span className={styles.enterTitle}>ثبت نام</span>
                        <Link className={styles.signTitle} to="/Login"> ورود </Link>  
                        
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
                                <label htmlFor="">ایمیل</label>
                                <input type="email" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} />

                            </div>

                            {errors.email && touched.email && <span>{errors.email}</span>}
                        </div>
                        <div>
                            <div>

                                <label htmlFor="">رمز عبور </label>
                                <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                            </div>

                            {errors.password && touched.password && <span>{errors.password}</span>}
                        </div>
                        <div>
                            <div>

                                <label htmlFor="">تکرار رمز عبور</label>
                                <input type="password" name="confrimPassword" value={data.confrimPassword} onChange={changeHandler} onFocus={focusHandler} />
                            </div>

                            {errors.confrimPassword && touched.confrimPassword && <span>{errors.confrimPassword}</span>}
                        </div>
                        <div className={styles.containerCheckBox}>
                            <div>
                                <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
                                <label htmlFor="" className="check-box-txt">تمام قوانین سایت را مشاهده کرده ام و قبول دارم </label>
                            </div>
                            {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                        </div>
                    </form>

                  
                        <button type="submit" onClick={submitHandler} className={styles.btnsub} >
                           ثبت نام
                        </button>
                  
                </div>


            </div>
            <ToastContainer />
        </div>
    );
}

export default Singup;