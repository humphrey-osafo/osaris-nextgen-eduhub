import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTASection({
  title = "Ready to Transform Your School's Extracurricular Programs?",
  description = "Join leading Cambridge schools across Ghana in providing world-class extracurricular education.",
  primaryButtonText = "Book a School Session",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Programs",
  secondaryButtonLink = "/programs"
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-electric-blue to-nextgen-green py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonLink}
            className="bg-white text-electric-blue hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors inline-block"
          >
            {primaryButtonText}
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link
              href={secondaryButtonLink}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-blue px-8 py-3 rounded-full font-semibold transition-colors inline-block"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
