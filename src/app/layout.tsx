import './globals.scss';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
    title: 'Храм святой Нины',
    description: 'Храм святой равноапостольной Нины в г. Минске',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={jost.className}>{children}</body>
        </html>
    );
}
