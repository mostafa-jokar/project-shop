import React from 'react';
import styles from "./header.module.css";
import ItemsOFColumns from './ItemsOFColumns';

const ColumSubMenue = () => {
    return (
        <div className={styles.colomn}>
            <ItemsOFColumns/>
            <ItemsOFColumns/>
            <ItemsOFColumns/>
        </div>
    );
};

export default ColumSubMenue;