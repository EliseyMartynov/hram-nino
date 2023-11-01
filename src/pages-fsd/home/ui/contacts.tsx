import { InstagramLogo } from '@shared/ui/instagram';
import { sized } from '@shared/ui/lib/sized';

export const Contacts = () => {
    return (
        <div className="section" id="contacts">
            <h2 className="subtitle">Контакты</h2>
            <div
                className="regularText ymaps-geolink"
                style={{ marginBottom: sized(4), textAlign: 'center' }}
            >
                {'Наш адрес:\n' + ' г. Минск, Харьковская ул., 82'}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                    href="https://www.instagram.com/hram_nino_minsk/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <InstagramLogo
                        style={{ width: 70, height: 'auto', cursor: 'pointer' }}
                    />
                </a>
            </div>
        </div>
    );
};
