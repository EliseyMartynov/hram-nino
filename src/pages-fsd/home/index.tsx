import { About } from './ui/about';
import { MainSection } from './ui/main-section';
import { Schedule } from './ui/schedule';
import { Contacts } from './ui/contacts';
import { Ministry } from './ui/ministry';

export const HomePage = () => {
    return (
        <main className="container">
            <MainSection />
            <About />
            <Schedule />
            <Ministry />
            <Contacts />
        </main>
    );
};
