import styles from './styles/index.module.scss';
import CommonHeader from '@/components/common/header/CommonHeader';
import CommonNavigation from '@/components/common/navigation/CommonNavigation';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import CommonItemContainer from '@/components/common/itemcontainer/CommonItemContainer';

interface category {
    category: string;
}

function index() {
    return (
        <div className={styles.page}>
            <CommonHeader />
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>BakeShop David</span>
                        <span className={styles.wrapper__desc}>
                            직접 만든 맛있는 디저트와 맛있는 커피.
                            <br />
                        </span>
                        {/* 검색창 UI 부분 */}
                        {/* <CommonSearchBar /> */}
                    </div>
                </div>
                <CommonNavigation />
                <div className={styles.page__contents__imageBox}>
                    <CommonItemContainer />
                </div>
            </div>
            {/* 공통 푸터 UI 부분 */}
        </div>
    );
}

export default index;
