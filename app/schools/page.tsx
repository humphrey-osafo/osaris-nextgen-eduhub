import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'For Schools | Osaris NextGen EduHub',
  description: 'Partner with Osaris NextGen EduHub for professional extracurricular programs. Transparent per-head pricing, qualified trainers, structured curriculum.',
};

export default function SchoolsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-midnight-navy to-graphite-gray text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner With <span className="text-nextgen-green">Osaris NextGen</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Provide world-class extracurricular programs without the operational burden.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-electric-blue hover:bg-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-midnight-navy">
            Benefits for Your School
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4 bg-soft-white p-6 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">No Recruitment Hassle</h3>
                <p className="text-graphite-gray">
                  We handle all trainer recruitment, vetting, and management. You get qualified professionals without the hiring burden.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-soft-white p-6 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-nextgen-green rounded-full flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Turnkey Solution</h3>
                <p className="text-graphite-gray">
                  From curriculum to equipment, we provide everything needed for program delivery. You focus on your core mission.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-soft-white p-6 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Quality Assurance</h3>
                <p className="text-graphite-gray">
                  Regular monitoring, trainer evaluations, and feedback systems ensure consistent quality across all programs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-soft-white p-6 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-nextgen-green rounded-full flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Flexible Scheduling</h3>
                <p className="text-graphite-gray">
                  Programs integrate seamlessly into your timetable with flexible scheduling options to suit your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-soft-white p-6 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Parent Satisfaction</h3>
                <p className="text-graphite-gray">
                  High-quality programs that parents value, increasing enrollment appeal and student retention.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-soft-white p-6 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-nextgen-green rounded-full flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Comprehensive Reporting</h3>
                <p className="text-graphite-gray">
                  Termly progress reports, attendance tracking, and student assessment documentation for parents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Our Pricing Model</h2>
              <p className="text-lg text-graphite-gray mb-6">
                We believe in transparent, fair pricing that aligns with your school's enrollment
                and makes quality programs accessible.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-midnight-navy mb-3 text-xl">Per-Head Pricing</h4>
                  <p className="text-graphite-gray mb-4">
                    You only pay for the students who participate in each program. No fixed costs
                    or minimum commitments that don't reflect actual usage.
                  </p>
                  <ul className="space-y-2 text-graphite-gray">
                    <li className="flex items-start">
                      <span className="text-nextgen-green mr-2">•</span>
                      <span>Rates vary by program type and duration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nextgen-green mr-2">•</span>
                      <span>Volume discounts available for larger groups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nextgen-green mr-2">•</span>
                      <span>Termly billing with clear invoicing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-midnight-navy mb-3 text-xl">What's Included</h4>
                  <ul className="space-y-2 text-graphite-gray">
                    <li className="flex items-start">
                      <span className="text-electric-blue mr-2">✓</span>
                      <span>Qualified, vetted trainers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-blue mr-2">✓</span>
                      <span>All program materials and equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-blue mr-2">✓</span>
                      <span>Structured curriculum and lesson plans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-blue mr-2">✓</span>
                      <span>Progress tracking and termly reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-blue mr-2">✓</span>
                      <span>Ongoing quality assurance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/Product tour-pana.svg"
                alt="Pricing"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-midnight-navy">
            Sample Weekly Timetable
          </h2>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
              <thead className="bg-midnight-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Day</th>
                  <th className="px-6 py-4 text-left">Time</th>
                  <th className="px-6 py-4 text-left">Program</th>
                  <th className="px-6 py-4 text-left">Age Group</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-soft-white">
                  <td className="px-6 py-4 font-semibold">Monday</td>
                  <td className="px-6 py-4">3:00 PM - 4:30 PM</td>
                  <td className="px-6 py-4">Robotics & Coding</td>
                  <td className="px-6 py-4">Ages 10-14</td>
                </tr>
                <tr className="hover:bg-soft-white">
                  <td className="px-6 py-4 font-semibold">Tuesday</td>
                  <td className="px-6 py-4">3:00 PM - 4:30 PM</td>
                  <td className="px-6 py-4">Football Training</td>
                  <td className="px-6 py-4">Ages 8-12</td>
                </tr>
                <tr className="hover:bg-soft-white">
                  <td className="px-6 py-4 font-semibold">Wednesday</td>
                  <td className="px-6 py-4">3:00 PM - 4:30 PM</td>
                  <td className="px-6 py-4">Arts & Crafts</td>
                  <td className="px-6 py-4">Ages 6-10</td>
                </tr>
                <tr className="hover:bg-soft-white">
                  <td className="px-6 py-4 font-semibold">Thursday</td>
                  <td className="px-6 py-4">3:00 PM - 4:30 PM</td>
                  <td className="px-6 py-4">Chess & Strategy</td>
                  <td className="px-6 py-4">Ages 8-15</td>
                </tr>
                <tr className="hover:bg-soft-white">
                  <td className="px-6 py-4 font-semibold">Friday</td>
                  <td className="px-6 py-4">3:00 PM - 4:30 PM</td>
                  <td className="px-6 py-4">Music & Dance</td>
                  <td className="px-6 py-4">Ages 7-13</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-graphite-gray mt-8">
            This is a sample timetable. We customize schedules based on your school's needs and preferences.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/In progress-cuate.svg"
                alt="Contract"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Our Contract Model</h2>
              <p className="text-lg text-graphite-gray mb-6">
                Simple, clear agreements that protect both parties and ensure smooth collaboration.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-midnight-navy mb-2">Term-Based Agreements</h4>
                  <p className="text-graphite-gray text-sm">
                    Contracts aligned with academic terms, with renewal options each term.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-midnight-navy mb-2">Clear Terms & Conditions</h4>
                  <p className="text-graphite-gray text-sm">
                    Transparent terms covering program delivery, payment schedules, and responsibilities.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-midnight-navy mb-2">Flexible Adjustments</h4>
                  <p className="text-graphite-gray text-sm">
                    Ability to add or adjust programs based on student interest and enrollment.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-midnight-navy mb-2">Service Level Guarantees</h4>
                  <p className="text-graphite-gray text-sm">
                    Commitments to trainer quality, attendance, and program standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-midnight-navy">
            Safety & Child Protection
          </h2>
          <p className="text-lg text-graphite-gray mb-8 text-center">
            Student safety is our top priority. We maintain comprehensive policies and procedures.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-soft-white p-6 rounded-xl">
              <h4 className="font-bold text-midnight-navy mb-3">Background Checks</h4>
              <p className="text-graphite-gray text-sm">
                All trainers undergo thorough background checks and reference verification before deployment.
              </p>
            </div>

            <div className="bg-soft-white p-6 rounded-xl">
              <h4 className="font-bold text-midnight-navy mb-3">Safeguarding Training</h4>
              <p className="text-graphite-gray text-sm">
                Regular child protection training for all personnel following international standards.
              </p>
            </div>

            <div className="bg-soft-white p-6 rounded-xl">
              <h4 className="font-bold text-midnight-navy mb-3">Supervision Protocols</h4>
              <p className="text-graphite-gray text-sm">
                Clear supervision ratios, attendance tracking, and emergency response procedures.
              </p>
            </div>

            <div className="bg-soft-white p-6 rounded-xl">
              <h4 className="font-bold text-midnight-navy mb-3">Insurance Coverage</h4>
              <p className="text-graphite-gray text-sm">
                Comprehensive liability insurance covering all program activities and participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how we can bring exceptional extracurricular programs to your school."
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/contact"
      />
    </>
  );
}
