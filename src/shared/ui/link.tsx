import { PropsWithChildren } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export const LinkButton = ({
    children,
    ...props
}: PropsWithChildren & React.HTMLProps<HTMLAnchorElement>) => {
    return (
        <a
            {...props}
            className={cx(props.className, styles.link)}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};
