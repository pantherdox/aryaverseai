import React from 'react';

interface FooterProps {
  copyrightName: string;
  linkedinUrl: string;
}

const LandingFooter: React.FC<FooterProps> = ({ copyrightName, linkedinUrl }) => {
  return (
    <footer className="text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} {copyrightName}</p>
        <p className="text-sm">Follow me on LinkedIn: <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a></p>
      </div>
    </footer>
  );
};

export default LandingFooter;
