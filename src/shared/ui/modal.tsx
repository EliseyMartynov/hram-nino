'use client';

import { X } from 'react-feather';
import { useEffect } from 'react';

interface IProps {
    content?: JSX.Element;
    isOpen?: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const Modal = ({ content, isOpen, setIsOpen }: IProps) => {
    useEffect(() => {
        const html = document.querySelector('html')?.classList;
        isOpen ? html?.add('modal-open') : html?.remove('modal-open');
        return () => {
            html?.remove('modal-open');
        };
    }, [isOpen]);

    return isOpen ? (
        <div
            style={{
                display: 'flex',
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.6)',
                top: 0,
                left: 0,
            }}
            onClick={() => setIsOpen(false)}
        >
            <X
                style={{
                    position: 'absolute',
                    color: 'white',
                    top: 10,
                    right: 30,
                    cursor: 'pointer',
                }}
                size={40}
                onClick={() => setIsOpen(false)}
            />
            {content}
        </div>
    ) : null;
};
