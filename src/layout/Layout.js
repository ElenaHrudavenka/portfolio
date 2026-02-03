import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LazySection from '../layout/LazySection';

const Skills = React.lazy(() => import('../skills/Skills'));
const Projects = React.lazy(() => import('../projects/Projects'));
const ContactsContainer = React.lazy(() => import('../Contacts/ContactsContainer'));
const Footer = React.lazy(() => import('../Footer/Footer'))

const Layout = () => {
    return (
        <>
            <Header />
            <Main />

            <LazySection>
                <Skills />
            </LazySection>

            <LazySection>
                <Projects />
            </LazySection>

            <LazySection>
                <ContactsContainer />
            </LazySection>

            <LazySection>
                <Footer />
            </LazySection>
        </>
    );
};

export default Layout;