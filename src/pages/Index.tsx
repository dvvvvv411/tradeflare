import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSolutionSection } from '@/components/landing/ProblemSolutionSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { AIExplanationSection } from '@/components/landing/AIExplanationSection';
import { ScarcitySection } from '@/components/landing/ScarcitySection';
import { AdvisorSection } from '@/components/landing/AdvisorSection';
import { SocialProofSection } from '@/components/landing/SocialProofSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { FooterSection } from '@/components/landing/FooterSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AIExplanationSection />
      <ScarcitySection />
      <AdvisorSection />
      <SocialProofSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
