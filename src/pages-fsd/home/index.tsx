import { About } from './ui/about';
import { MainSection } from './ui/main-section';
import { Schedule } from './ui/schedule';

export const HomePage = () => {
    return (
        <main className="container">
            <MainSection />
            <About />
            <Schedule />
        </main>
    );
};
