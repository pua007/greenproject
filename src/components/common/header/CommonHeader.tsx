import styles from "./CommonHeader.module.scss";

function CommonHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.header__logoBox}>
                <img
                    className={styles.header__logoBox__logo}
                    src="src/assets/images/logo.png"
                    alt=""
                />
                <span className={styles.header__logoBox__title}>
                    BakeShop David
                </span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>
                    사진제출
                </button>
                <button className={styles.header__profileBox__button}>
                    북마크
                </button>
                <span className={styles.header__profileBox__userName}>
                    유저네임
                </span>
            </div>
        </div>
    );
}

export default CommonHeader;
