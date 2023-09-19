import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Храм святой Нины',
    description: 'Храм святой равноапостольной Нины в г. Минске',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
