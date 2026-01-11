import { HeaderSection } from '@/components/landing/HeaderSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSolutionSection } from '@/components/landing/ProblemSolutionSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { ScarcitySection } from '@/components/landing/ScarcitySection';
import { FAQSection } from '@/components/landing/FAQSection';
import { FooterSection } from '@/components/landing/FooterSection';

const Index = () => {
  return (
    <>
      <HeaderSection />
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <ScarcitySection />
        <FAQSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
