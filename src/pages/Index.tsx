import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSlider from '@/components/ProjectsSlider';
import WhyMeSection from '@/components/WhyMeSection';
import HighlightedProject from '@/components/HighlightedProject';
import BonusSection from '@/components/BonusSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProjectsSlider />
      <WhyMeSection />
      <HighlightedProject />
      <BonusSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
