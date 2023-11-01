import Image from 'next/image';
import styles from './styles.module.scss';
import { CSSProperties } from 'react';
import cx from 'classnames';

interface IProps {
    src: string;
    style?: CSSProperties;
    className?: string;
}

export const Avatar = ({ src, style, className }: IProps) => {
    return (
        <div className={cx(styles.avatar, className)} style={style}>
            <Image
                alt="church-logo"
                src={src}
                width={600}
                height={0}
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    );
};
