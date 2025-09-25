import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import PaidExclusives from '@/components/PaidExclusives';
import LatestArticles from '@/components/LatestArticles';
import SocialMedia from '@/components/SocialMedia';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedProjects />
        <PaidExclusives />
        <LatestArticles />
        <SocialMedia />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}