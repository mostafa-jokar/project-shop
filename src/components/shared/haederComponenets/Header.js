import React ,{useState} from 'react';
import styles from "./header.module.css";
import SubMenue from './SubMenue';
import logo from "./../../../assets/images/timche.svg"
import cardLogo from "../../../assets/icons/shopping-cart-svgrepo-com.svg"

import { Link } from 'react-router-dom';
import "./header.css" ;
// reducx
import { useSelector } from 'react-redux';

const Header = () => {
    const [isActive, setIsActive] = useState(false); // product filter
    const handleClick = event => {
        setIsActive(current => !current);
    };

    // console.log(isActive)

    const state  = useSelector(state=>state.cartProductState)



    return (
        <div>
            <header>
                <div className="container">
                    <div className={styles.topOfHeader}>

                        <div className={styles.rightHeader}>
                            <div className={styles.logoContent}>
                                <img className={styles.logo} src={logo} alt="1" />
                            </div>
                            <div className={styles.searchHeader}>
                                <input placeholder='جستوجو ...' type="text" />
                                <button><i class="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className={styles.leftHeader}>
                            <div className={styles.hambergurMenueIcon} >
                                <button onClick={handleClick}><i class="fa fa-bars"></i></button>
                            </div>
                            <div className={styles.leftHeaderContent}>

                            <button className={styles.btnWorkWihtUs} >در تیمچه بفروش</button>
                            <Link to="/LogIn">ثبت نام / ورود </Link>
                            <div className={styles.cartshop}>
                            <Link to="/CartPage" >
                                <img src={cardLogo} alt="#" />
                            </Link>
                            {
                              state.totalCount ? <span>{state.totalCount}</span>  :<span>0</span> 
                            }
                                
                            </div>
                            </div>
                        </div>

                    </div>
                    <nav className={isActive ? "ActiveHamberNav" : "deActiveHamberNav" }>
                        <ul>
                            <li>
                                <div className={styles.tilteNav}>
                                    <span><a> کالای دیجیتال </a></span>
                                    <div className="i-nav"><i className="fas fa-chevron-down"></i></div>
                                </div>
                                  {isActive ? ""  : <SubMenue /> }
                            </li>
                            <li>
                                <div className={styles.tilteNav}>
                                    <span><a> خانه و آشپزخانه  </a></span>
                                    <div className="i-nav"><i className="fas fa-chevron-down"></i></div>
                                </div>
                                  {isActive ? ""  : <SubMenue /> }
                            </li>
                            <li>
                                <div className={styles.tilteNav}>
                                    <span><a>  لوازم خودرو </a></span>
                                    <div className="i-nav"><i className="fas fa-chevron-down"></i></div>
                                </div>
                                 {isActive ? ""  : <SubMenue /> } 
                            </li>
                            <li>
                                <div className={styles.tilteNav}>
                                    <span><a> لوازم تحریر   </a></span>
                                    <div className="i-nav"><i className="fas fa-chevron-down"></i></div>
                                </div>
                                  {isActive ? ""  : <SubMenue /> }

                            </li>
                            <li>
                                <div className={styles.tilteNav}>
                                    <span><a> آرایشی و سلامت  </a></span>
                                    <div className="i-nav"><i className="fas fa-chevron-down"></i></div>
                                </div>
                                  {isActive ? ""  : <SubMenue /> }

                            </li>
                            <li>
                                <div className={styles.tilteNav}>
                                    <span><a> خواروبار  </a></span>
                                    <div className="i-nav"><i className="fas fa-chevron-down"></i></div>
                                </div>
                                  {isActive ? ""  : <SubMenue /> }

                            </li>
                            <li>
                                <div className={styles.tilteNav}>
                                    <span><a> اسباب بازی , کودک و نوزاد  </a></span>
                                    <div className="i-nav"><i className="fas fa-chevron-down"></i></div>
                                </div>
                                  {isActive ? ""  : <SubMenue /> }

                            </li>
                            <li>
                                <div className={styles.tilteNav}>
                                    <span><a> ورزش,سفر,کمپینگ  </a></span>
                                    <div className="i-nav"><i className="fas fa-chevron-down"></i></div>
                                </div>
                                  {isActive ? ""  : <SubMenue /> }

                            </li>
                            <li>
                                <div className={styles.tilteNav}>
                                    <span><a> مد و پوشاک</a></span>
                                    <div className="i-nav"><i className="fas fa-chevron-down"></i></div>
                                </div>
                                  {isActive ? ""  : <SubMenue /> }

                            </li>
                        </ul>
                    </nav>

                </div>


            </header>
        </div>


    );
};

export default Header;