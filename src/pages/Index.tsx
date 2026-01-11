import { HeaderSection } from '@/components/landing/HeaderSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { UrgencyCtaSection } from '@/components/landing/UrgencyCtaSection';
import { FooterSection } from '@/components/landing/FooterSection';

const Index = () => {
  return (
    <>
      <HeaderSection />
      <main className="min-h-screen">
        <HeroSection />
        <UrgencyCtaSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
