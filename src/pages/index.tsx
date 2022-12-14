import { Button, Grid } from '@mui/material';
import AboutMeSection from 'components/home/sections/AboutMe/AboutMe';
import PresentationSection from 'components/home/sections/Presentation/Presentation';
import SkillsSection from 'components/home/sections/Skills/Skills';
import LandingPageLayout from '../components/layouts/LandingPageLayout';

// Headers
import { getHead } from 'utils/head/headTags';

export default function HomePage() {
    return (
        <LandingPageLayout>
            {getHead({
                title: 'Início',
            })}
            <Grid container>
                <Grid item xs={12}>
                    <PresentationSection />
                </Grid>
                <Grid item xs={12}>
                    <AboutMeSection />
                </Grid>
                <Grid item xs={12}>
                    <SkillsSection />
                </Grid>
            </Grid>
        </LandingPageLayout>
    );
}
