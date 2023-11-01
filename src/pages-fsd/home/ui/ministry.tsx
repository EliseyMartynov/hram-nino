import { Avatar } from '@shared/ui/avatar';
import { sized } from '@shared/ui/lib/sized';
import styles from './ministry.module.scss';
import cx from 'classnames';

export const Ministry = () => {
    return (
        <div className="section" id="ministry">
            <h2 className="subtitle">Духовенство</h2>
            <div className={styles.avatarBox}>
                <Avatar src="/assets/nastoyatel'.png" className={styles.avatar} />
                <div className="regularText">Иерей Александр Гречишников</div>
            </div>
            <div className={cx(styles.infoBox, 'textContainer')}>
                <div
                    style={{ marginBottom: sized(2), textAlign: 'center' }}
                    className="regularText"
                >
                    Настоятель прихода
                </div>
                <div style={{ marginBottom: sized(2) }} className="regularText">
                    Заместитель председателя Синодального отдела религиозного образования
                    и катехизации БПЦ
                </div>
                <div style={{ marginBottom: sized(2) }} className="regularText">
                    Руководитель направления «Катехизация лиц с ограниченными
                    возможностями здоровья»
                </div>
                <div className="regularText">Телефон: +375 29 507 14 09</div>
            </div>
        </div>
    );
};
