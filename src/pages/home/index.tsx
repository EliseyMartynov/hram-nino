import Image from "next/image";

import styles from "./styles.module.scss";
import { LinkButton } from "@shared/ui/link";

const links = [
  {
    name: "Расписание",
    link: '#'
  },
  {
    name: "О приходе",
    link: '#about'
  },
  {
    name: "Таинства",
    link: '#'
  },
  {
    name: "Духовенство",
    link: '#'
  },
  {
    name: "Святыни прихода",
    link: '#'
  },
  {
    name: "Контакты",
    link: '#'
  },
];

export const HomePage = () => {

  return <main className={styles.container}>
    <section className={styles.mainSection}>
    <h1 className={styles.title}>
      Храм святой равноапостольной Нины в г. Минске
    </h1>
    <Image src='/my_church.svg' alt='church-logo' fill className={styles.heroLogo} />
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20}}>
    {links.map(link => <LinkButton style={{textAlign: 'center', width: '30%'}} href={link.link}>{link.name}</LinkButton>)}
    </div>
    </section>
    <section className={styles.section}>
    <h2 className={styles.subtitle} id='about'>
      О приходе
    </h2>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 50}}>
        <span style={{marginRight: 40, fontSize: 128}}>🙌</span>
        <div style={{textAlign: 'center', width: '50%', whiteSpace: 'break-spaces'}} className={styles.paletteTextContainer}>
          Молодой приход взял на себя большое {'\n'}
          <strong>социальное служение</strong> {'\n'}
          по окормлению людей, страдающих детским церебральным параличом и их семей.
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className={styles.paletteTextContainer} style={{width: '50%', marginRight: 60, display: 'flex', flexDirection: 'column'}}>
          <span style={{marginBottom: 10}}>
          Между <strong>приходом</strong> и территориальным <strong>Центром социального обслуживания населения </strong>
          Фрунзенского района Минска было подписано соглашение о сотрудничестве:
          </span>
          <ul style={{listStyle: 'inside', marginLeft: 10}}>
            <li>духовное окормление</li>
            <li>оказание психологической помощи</li>
            <li>реабилитацию людей-инвалидов с диагнозом детский церебральный паралич и их близких</li>
          </ul>
        </div>
        <span style={{fontSize: 64, whiteSpace: 'break-spaces'}}>
          11 ноября {'\n'}
          2022 года
        </span>
      </div>
    </section>
  </main>
}