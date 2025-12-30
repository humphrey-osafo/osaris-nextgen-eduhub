import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/CTASection';
import { AcademicCapIcon, BookOpenIcon, ShieldCheckIcon, CheckIcon, LightBulbIcon, UserGroupIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-midnight-navy via-graphite-gray to-midnight-navy text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-electric-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-nextgen-green rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your School with{' '}
                <span className="text-nextgen-green">World-Class</span>{' '}
                <span className="text-electric-blue">Extracurricular Programs</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Professional STEM, Sports, Arts, and Leadership programs designed specifically
                for Cambridge schools in Ghana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-electric-blue hover:bg-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 text-center"
                >
                  Book a School Session
                </Link>
                <Link
                  href="/programs"
                  className="bg-transparent border-2 border-nextgen-green text-nextgen-green hover:bg-nextgen-green hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Digital transformation-bro.svg"
                alt="Students learning"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-midnight-navy">What We Do</h2>
          <p className="text-lg text-graphite-gray mb-12 max-w-3xl mx-auto">
            Osaris NextGen EduHub provides comprehensive extracurricular programs that go beyond
            traditional classroom learning, helping students discover their passions and develop
            essential life skills.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12 [&>div]:hover:scale-105 [&>div]:transition-transform">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-electric-blue/20">
              <div className="text-5xl mb-4 text-electric-blue">
                <AcademicCapIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Expert Instruction</h3>
              <p className="text-graphite-gray">
                Professional trainers with proven expertise in their fields, dedicated to
                nurturing talent and building confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-electric-blue/20">
              <div className="text-5xl mb-4 text-nextgen-green">
                <BookOpenIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Structured Curriculum</h3>
              <p className="text-graphite-gray">
                Age-appropriate programs with clear learning outcomes, progress tracking,
                and termly assessments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-electric-blue/20">
              <div className="text-5xl mb-4 text-purple-500">
                <ShieldCheckIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Safe & Reliable</h3>
              <p className="text-graphite-gray">
                Comprehensive child protection policies, qualified personnel, and consistent
                quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-midnight-navy">
            Our Programs
          </h2>
          <p className="text-lg text-graphite-gray mb-12 text-center max-w-3xl mx-auto">
            Comprehensive programs designed to develop well-rounded students with diverse skills and interests.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-electric-blue to-blue-600 p-6 rounded-2xl text-white hover:scale-105 transition-transform">
              <Image
                src="/images/Programmer-pana.svg"
                alt="STEM & Robotics"
                width={200}
                height={200}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">STEM & Robotics</h3>
              <p className="text-sm mb-4">Coding, robotics, digital skills, and computational thinking.</p>
              <Link href="/programs#stem" className="text-neon-yellow font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-nextgen-green to-green-600 p-6 rounded-2xl text-white hover:scale-105 transition-transform">
              <Image
                src="/images/Cricket-amico.svg"
                alt="Sports"
                width={200}
                height={200}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sports & Fitness</h3>
              <p className="text-sm mb-4">Football, basketball, athletics, and physical development.</p>
              <Link href="/programs#sports" className="text-neon-yellow font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-white hover:scale-105 transition-transform">
              <Image
                src="/images/Making art-bro.svg"
                alt="Arts"
                width={200}
                height={200}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Arts & Creativity</h3>
              <p className="text-sm mb-4">Music, dance, drama, visual arts, and craftwork.</p>
              <Link href="/programs#arts" className="text-neon-yellow font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl text-white hover:scale-105 transition-transform">
              <Image
                src="/images/forming team leadership-amico.svg"
                alt="Leadership"
                width={200}
                height={200}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Leadership & Life Skills</h3>
              <p className="text-sm mb-4">Public speaking, debate, chess, and critical thinking.</p>
              <Link href="/programs#leadership" className="text-neon-yellow font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-midnight-navy">
            Why Schools Choose Us
          </h2>
          <p className="text-lg text-graphite-gray mb-12 text-center max-w-3xl mx-auto">
            We make it easy for schools to provide exceptional extracurricular programs without the operational burden.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white text-xl">
                <CheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Professional Trainers</h3>
                <p className="text-graphite-gray">Vetted, experienced instructors passionate about student development.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-nextgen-green rounded-full flex items-center justify-center text-white text-xl">
                <CheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Per-Head Pricing</h3>
                <p className="text-graphite-gray">Transparent, fair pricing based on student participation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white text-xl">
                <CheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Structured Curriculum</h3>
                <p className="text-graphite-gray">Well-planned lessons with clear learning objectives and outcomes.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-nextgen-green rounded-full flex items-center justify-center text-white text-xl">
                <CheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Safety First</h3>
                <p className="text-graphite-gray">Comprehensive child protection and safety protocols in place.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white text-xl">
                <CheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Progress Tracking</h3>
                <p className="text-graphite-gray">Termly reports and assessments to monitor student development.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-nextgen-green rounded-full flex items-center justify-center text-white text-xl">
                <CheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-midnight-navy">Flexible Scheduling</h3>
                <p className="text-graphite-gray">Programs that fit seamlessly into your school timetable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-midnight-navy">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Initial Consultation</h3>
              <p className="text-graphite-gray">
                We discuss your school's needs, student demographics, and program preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-nextgen-green rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Custom Proposal</h3>
              <p className="text-graphite-gray">
                Receive a tailored program package with pricing and implementation timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Onboarding</h3>
              <p className="text-graphite-gray">
                Sign contract, schedule sessions, and meet your assigned trainers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-nextgen-green rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Program Launch</h3>
              <p className="text-graphite-gray">
                Weekly sessions begin with ongoing support and termly progress reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-midnight-navy">
            What Schools Say
          </h2>
          <p className="text-lg text-graphite-gray mb-12 text-center max-w-3xl mx-auto">
            Trusted by leading Cambridge schools across Ghana.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-neon-yellow text-xl">
                  ★★★★★
                </div>
              </div>
              <p className="text-graphite-gray mb-4">
                "The robotics program has transformed our STEM curriculum. Students are more
                engaged and excited about learning than ever before."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-midnight-navy">Mrs. Akosua Mensah</p>
                <p className="text-sm text-graphite-gray">Head of School, International Academy</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-neon-yellow text-xl">
                  ★★★★★
                </div>
              </div>
              <p className="text-graphite-gray mb-4">
                "Professional, reliable, and the children absolutely love the programs. The
                per-head pricing model works perfectly for our budget."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-midnight-navy">Mr. Kwame Osei</p>
                <p className="text-sm text-graphite-gray">Proprietor, Excellence Schools</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-neon-yellow text-xl">
                  ★★★★★
                </div>
              </div>
              <p className="text-graphite-gray mb-4">
                "The leadership and debate program has built tremendous confidence in our students.
                We've seen remarkable improvements in public speaking."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-midnight-navy">Dr. Ama Boateng</p>
                <p className="text-sm text-graphite-gray">Academic Director, Cambridge School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
