import styles from './main-section.module.scss';
import Image from 'next/image';
import { LinkButton } from '@shared/ui/link';

const links = [
    {
        name: 'О приходе',
        link: '#about',
    },
    {
        name: 'Расписание',
        link: '#',
    },
    {
        name: 'Контакты',
        link: '#',
    },
];

export const MainSection = () => {
    return (
        <>
            <video autoPlay className={styles.video} loop muted>
                <source src="/assets/georgia_video.mp4" type="video/mp4" />
            </video>
            <div className={styles.gradient} />
            <section className={styles.mainSection}>
                <div className={styles.mainInside}>
                    <h1 className={styles.title}>
                        Храм святой равноапостольной Нины в г. Минске
                    </h1>
                    <Image
                        src="/assets/my_church.svg"
                        alt="church-logo"
                        fill
                        className={styles.heroLogo}
                    />
                    <div className={styles.navBox}>
                        {links.map((link) => (
                            <LinkButton key={link.name} href={link.link}>
                                {link.name}
                            </LinkButton>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
