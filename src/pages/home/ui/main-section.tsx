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
    /*{
    name: "Таинства",
    link: '#'
  },*/
    /*{
    name: "Духовенство",
    link: '#'
  },*/
    /*{
    name: "Святыни прихода",
    link: '#'
  },*/
    {
        name: 'Контакты',
        link: '#',
    },
];

export const MainSection = () => {
    return (
        <section className={styles.mainSection}>
            <h1 className={styles.title}>
                Храм святой равноапостольной Нины в г. Минске
            </h1>
            <Image
                src="/my_church.svg"
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
        </section>
    );
};
