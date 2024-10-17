import styles from './styles/index.module.scss';
import CommonHeader from '@/components/common/header/CommonHeader';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import CommonNavigation from '@/components/common/navigation/CommonNavigation';

function index() {
    return (
        <div className={styles.page}>
            {/* 공통 헤더 UI부분 */}
            <CommonHeader />
            {/* 공통 네비게이션 UI 부분 */}
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>BakeShop David</span>
                        <span className={styles.wrapper__desc}>
                            직접만든 맛있는 디저트와 맛있는 커피.
                            <br />
                        </span>
                        {/* 검색창 UI 부분 */}
                        {/* <CommonSearchBar /> */}
                    </div>
                </div>
                <CommonNavigation />
                <div className={styles.page__contents__imageBox}></div>
            </div>
            {/* 공통 푸터 UI 부분 */}
        </div>
    );
}

export default index;
