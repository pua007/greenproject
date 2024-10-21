import React from 'react';
import styles from '@/components/common/itemcontainer/itemContainer.module.scss';
import MenuData from '@/assets/testjson/menu.json';

function CommonItemContainer() {
    interface MenuData {
        title: string;
        price: string;
        img: string;
    }

    const menuCard = MenuData.map((item: MenuData) => {
        return (
            <div className={styles.container__box}>
                <div className={styles.container__box__image}>
                    <img src={item.img} alt="" className={styles.image} />
                </div>
                <span className={styles.container__box__title}>{item.title}</span>
                <span className={styles.container__box__price}>{item.price}</span>
            </div>
        );
    });
    return <div className={styles.container}>{menuCard}</div>;
}

export default CommonItemContainer;
