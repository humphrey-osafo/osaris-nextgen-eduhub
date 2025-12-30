import Image from 'next/image';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Programs | Osaris NextGen EduHub',
  description: 'Explore our comprehensive extracurricular programs: STEM & Robotics, Sports, Arts, Leadership, Chess & Debate for Cambridge schools.',
};

export default function ProgramsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-midnight-navy to-graphite-gray text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-electric-blue">Programs</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive, structured programs designed to develop well-rounded students with diverse skills.
            </p>
          </div>
        </div>
      </section>

      <section id="stem" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-electric-blue text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                STEM & TECHNOLOGY
              </div>
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">STEM & Robotics</h2>
              <p className="text-lg text-graphite-gray mb-6">
                Prepare students for the digital future with hands-on coding, robotics, and
                computational thinking programs that make technology education exciting and accessible.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-electric-blue pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Coding & Programming</h4>
                  <p className="text-graphite-gray text-sm">Scratch, Python, web development basics</p>
                </div>
                <div className="border-l-4 border-electric-blue pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Robotics</h4>
                  <p className="text-graphite-gray text-sm">Build and program robots, LEGO Mindstorms, Arduino</p>
                </div>
                <div className="border-l-4 border-electric-blue pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Digital Skills</h4>
                  <p className="text-graphite-gray text-sm">Graphic design, video editing, digital literacy</p>
                </div>
              </div>

              <div className="mt-6 bg-soft-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-midnight-navy mb-2">Program Details:</p>
                <ul className="text-sm text-graphite-gray space-y-1">
                  <li>• Age Range: 6-17 years</li>
                  <li>• Session Duration: 60-90 minutes</li>
                  <li>• Class Size: 12-15 students</li>
                  <li>• Equipment: Provided by Osaris</li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/nextgen images/Programmer-pana.svg"
                alt="STEM & Robotics"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sports" className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/nextgen images/Cricket-amico.svg"
                alt="Sports"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-nextgen-green text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                SPORTS & FITNESS
              </div>
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Sports & Physical Development</h2>
              <p className="text-lg text-graphite-gray mb-6">
                Build healthy habits, teamwork, and discipline through structured sports training
                led by certified coaches who prioritize skill development and character building.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-nextgen-green pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Team Sports</h4>
                  <p className="text-graphite-gray text-sm">Football, basketball, volleyball, handball</p>
                </div>
                <div className="border-l-4 border-nextgen-green pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Individual Sports</h4>
                  <p className="text-graphite-gray text-sm">Athletics, tennis, badminton, table tennis</p>
                </div>
                <div className="border-l-4 border-nextgen-green pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Fitness & Wellness</h4>
                  <p className="text-graphite-gray text-sm">Physical conditioning, yoga, wellness education</p>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg shadow">
                <p className="text-sm font-semibold text-midnight-navy mb-2">Program Details:</p>
                <ul className="text-sm text-graphite-gray space-y-1">
                  <li>• Age Range: 5-17 years</li>
                  <li>• Session Duration: 60-90 minutes</li>
                  <li>• Class Size: 15-20 students</li>
                  <li>• Equipment: Sport-specific gear provided</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="arts" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ARTS & CREATIVITY
              </div>
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Arts, Music, Dance & Drama</h2>
              <p className="text-lg text-graphite-gray mb-6">
                Unleash creativity and build confidence through diverse arts programs that develop
                self-expression, cultural appreciation, and performance skills.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Visual Arts & Craftwork</h4>
                  <p className="text-graphite-gray text-sm">Drawing, painting, sculpture, beadwork, textiles</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Music</h4>
                  <p className="text-graphite-gray text-sm">Vocal training, instruments, music theory, choir</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Dance & Drama</h4>
                  <p className="text-graphite-gray text-sm">Traditional dance, contemporary, theater, performance</p>
                </div>
              </div>

              <div className="mt-6 bg-soft-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-midnight-navy mb-2">Program Details:</p>
                <ul className="text-sm text-graphite-gray space-y-1">
                  <li>• Age Range: 5-17 years</li>
                  <li>• Session Duration: 60-90 minutes</li>
                  <li>• Class Size: 10-15 students</li>
                  <li>• Materials: Art supplies provided</li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/nextgen images/Making art-pana.svg"
                alt="Arts"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/nextgen images/forming team leadership-amico.svg"
                alt="Leadership"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                LEADERSHIP & SKILLS
              </div>
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Leadership & Life Skills</h2>
              <p className="text-lg text-graphite-gray mb-6">
                Develop confident, articulate leaders through programs that build critical thinking,
                public speaking, and essential life skills for success in any field.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Public Speaking & Debate</h4>
                  <p className="text-graphite-gray text-sm">Presentation skills, argumentation, Model UN</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Chess & Strategy Games</h4>
                  <p className="text-graphite-gray text-sm">Critical thinking, problem-solving, tournaments</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-midnight-navy mb-1">Leadership Development</h4>
                  <p className="text-graphite-gray text-sm">Team building, project management, entrepreneurship</p>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg shadow">
                <p className="text-sm font-semibold text-midnight-navy mb-2">Program Details:</p>
                <ul className="text-sm text-graphite-gray space-y-1">
                  <li>• Age Range: 8-17 years</li>
                  <li>• Session Duration: 60-90 minutes</li>
                  <li>• Class Size: 10-12 students</li>
                  <li>• Resources: Training materials provided</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-midnight-navy">
            Learning Outcomes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Skill Development</h3>
              <p className="text-graphite-gray">
                Measurable progress in technical and soft skills tracked through regular assessments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nextgen-green rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Confidence Building</h3>
              <p className="text-graphite-gray">
                Students gain self-assurance through achievement, practice, and positive reinforcement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🏆
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Achievement Recognition</h3>
              <p className="text-graphite-gray">
                Certificates, showcases, and competitions celebrate student accomplishments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Bring These Programs to Your School"
        description="Let's discuss how we can customize our programs to meet your school's unique needs."
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/contact"
      />
    </>
  );
}
