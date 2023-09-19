import styles from './about.module.scss';
import { sized } from '@shared/ui/lib/sized';

export const About = () => {
    return (
        <section className="section" id="about">
            <h2 className="subtitle">О приходе</h2>
            <div className={styles.block}>
                <span className={styles.emoji}>🙌</span>
                <div className="textContainer" style={{ textAlign: 'center' }}>
                    Молодой приход взял на себя большое {'\n'}
                    <strong>социальное служение</strong> {'\n'}
                    по окормлению людей, страдающих детским церебральным параличом и их
                    семей.
                </div>
            </div>

            <div className={styles.block} style={{ flexDirection: 'row-reverse' }}>
                <span>
                    11 ноября {'\n'}
                    2022 года
                </span>
                <div className="textContainer">
                    <span>
                        Между <strong>приходом</strong> и территориальным{' '}
                        <strong>Центром социального обслуживания населения </strong>
                        Фрунзенского района Минска было подписано соглашение о
                        сотрудничестве:
                    </span>
                    <ul style={{ listStyle: 'inside', marginLeft: sized(3) }}>
                        <li>духовное окормление</li>
                        <li>оказание психологической помощи</li>
                        <li>
                            реабилитация людей-инвалидов с диагнозом детский церебральный
                            паралич и их близких
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
