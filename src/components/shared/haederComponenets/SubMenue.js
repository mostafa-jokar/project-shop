import React from 'react';
import styles from "./header.module.css";
import ColumSubMenue from './ColumSubMenue';

const SubMenue = () => {
    return (
        <div className={styles.subMenue}>          
            <ColumSubMenue/>
            <ColumSubMenue/>
            <ColumSubMenue/>
            <ColumSubMenue/>
        </div>
    );
};

export default SubMenue;