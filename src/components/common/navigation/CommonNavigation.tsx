import React, { useState } from 'react';
import styles from './CommonNavigation.module.scss';

interface Navigation {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    image: string;
    isActive: boolean;
}

function CommonNavigation() {
    const [navigation, setNavigation] = useState<Navigation[]>([
        {
            index: 0,
            path: '/coffee',
            label: 'coffee',
            searchValue: 'coffee',
            image: 'src/assets/images/drink.png',
            isActive: false,
        },
        {
            index: 1,
            path: '/noncoffee',
            label: 'noncoffee',
            searchValue: '3d rendering',
            image: 'src/assets/images/tea.png',
            isActive: false,
        },
        {
            index: 2,
            path: '/dessert',
            label: 'dessert',
            searchValue: 'following',
            image: 'src/assets/images/dessert.png',
            isActive: false,
        },
        {
            index: 3,
            path: '/cake',
            label: 'cake',
            searchValue: 'photo',
            image: 'src/assets/images/cake.png',
            isActive: false,
        },
        {
            index: 4,
            path: '/coffebean',
            label: 'coffebean',
            searchValue: 'one color',
            image: 'src/assets/images/coffebean.png',
            isActive: false,
        },
    ]);

    const handleNavigationClick = (item: Navigation) => {};

    //useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출해보도록한다.
    const navLink = navigation.map((item: Navigation) => {
        return (
            <div className={styles.navigation__menu} key={item.path}>
                <div className={styles.navigation__menu__box}>
                    <img src={item.image} alt="" />
                    <span className={styles.navigation__menu__label}>{item.label}</span>
                </div>
            </div>
        );
    });
    return <div className={styles.navigation}>{navLink}</div>;
}

export default CommonNavigation;
