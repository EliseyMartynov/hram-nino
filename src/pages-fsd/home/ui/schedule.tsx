'use client';

import Image from 'next/image';
import { LinkButton } from '@shared/ui/link';
import { Modal } from '@shared/ui/modal';
import { useState } from 'react';
import { sized } from '@shared/ui/lib/sized';
import styles from './schedule.module.scss';

export const Schedule = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="section" id="schedule">
            <h2 className="subtitle">Расписание</h2>
            <div className={styles.imgWrapper}>
                <Image
                    alt="church-logo"
                    src="/assets/schedule.jpeg"
                    width={800}
                    height={0}
                    style={{ width: '100%', height: 'auto' }}
                />
                <LinkButton
                    className={styles.openBtn}
                    onClick={() => setIsOpen(true)}
                    style={{ bottom: 0, position: 'absolute', width: '100%' }}
                >
                    Открыть
                </LinkButton>
                <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    content={
                        <Image
                            alt="church-logo"
                            src="/assets/schedule.jpeg"
                            width={900}
                            height={0}
                            style={{
                                margin: `${sized(2)} auto`,
                                width: 'auto',
                                height: 'auto',
                            }}
                        />
                    }
                />
            </div>
        </div>
    );
};
