import React from 'react';
import styles from "./header.module.css";


const ItemsOFColumns = () => {
    return (
        <ul >
        <li className={styles.title}>
            <a href=""> موبایل
                <div><i className="fas fa-angle-left"></i></div>
            </a>
        </li>
        <li><a href="">هوآوی</a></li>
        <li><a href="">شیائومی</a></li>
        <li><a href="">اپل</a></li>
        <li><a href="">نوکیا</a></li>
        <li>
            <a href="">آنر</a>
        </li>
    </ul>
    );
};

export default ItemsOFColumns;