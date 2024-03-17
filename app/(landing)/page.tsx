import { LandingContent } from "@/components/landing-content";
import LandingFooter from "@/components/landing-footer";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage =() => {
    return(
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
            <LandingFooter copyrightName="AryaVerse" linkedinUrl="https://www.linkedin.com/in/aryamantickoo/" />
        </div>
    );
}

export default LandingPage;