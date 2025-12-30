'use client';

import Image from 'next/image';
import { useState } from 'react';
import CTASection from '@/components/CTASection';

export default function ParentsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What age groups do you cater to?',
      answer: 'Our programs are designed for students aged 5-17 years. Each program specifies its age range, and we group students appropriately to ensure age-appropriate instruction and peer interaction.'
    },
    {
      question: 'How are programs integrated into the school schedule?',
      answer: 'Programs typically run as after-school activities, usually from 3:00 PM to 4:30 PM, though timing can be adjusted based on your school\'s schedule. We work closely with school administrators to ensure seamless integration.'
    },
    {
      question: 'Are your trainers qualified?',
      answer: 'Yes. All our trainers are vetted professionals with relevant qualifications and experience. They undergo background checks, safeguarding training, and regular performance evaluations to maintain the highest standards.'
    },
    {
      question: 'What safety measures are in place?',
      answer: 'We maintain comprehensive child protection policies including background checks for all staff, supervision protocols, emergency procedures, and full insurance coverage. Student safety is our absolute priority.'
    },
    {
      question: 'How do you track student progress?',
      answer: 'We provide termly progress reports detailing skill development, participation, and achievements. Parents also receive certificates and have opportunities to attend showcases and exhibitions where students demonstrate their learning.'
    },
    {
      question: 'What if my child misses a session?',
      answer: 'Attendance is tracked, and we work with schools to communicate with parents. While makeup sessions may not always be possible, we ensure students can catch up through structured lesson plans and peer support.'
    },
    {
      question: 'Are materials and equipment provided?',
      answer: 'Yes. All program-specific materials and equipment are provided by Osaris NextGen EduHub. Students don\'t need to purchase anything additional.'
    },
    {
      question: 'Can my child join multiple programs?',
      answer: 'Absolutely! We encourage students to explore diverse interests. As long as schedules don\'t conflict, students can participate in multiple programs throughout the week.'
    },
    {
      question: 'Do you offer competitions or showcases?',
      answer: 'Yes. We organize termly showcases, exhibitions, and competitions where students can demonstrate their skills and celebrate their achievements with family and the school community.'
    },
    {
      question: 'How do I enroll my child?',
      answer: 'Enrollment is managed through your school. Speak with your school administrator about available Osaris NextGen programs and the registration process.'
    }
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-midnight-navy to-graphite-gray text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              For <span className="text-nextgen-green">Parents</span>
            </h1>
            <p className="text-xl text-gray-300">
              Helping your child discover their passions and build skills for life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-midnight-navy">
            Benefits for Your Child
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Discover Hidden Talents</h3>
              <p className="text-graphite-gray">
                Expose your child to diverse activities that help them discover interests and
                talents they never knew they had.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-nextgen-green rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                💪
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Build Confidence</h3>
              <p className="text-graphite-gray">
                Through achievement, practice, and positive reinforcement, students develop
                self-confidence and self-esteem.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Develop Social Skills</h3>
              <p className="text-graphite-gray">
                Collaborate with peers, learn teamwork, and build friendships outside the
                traditional classroom setting.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-nextgen-green rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                📚
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Practical Skills</h3>
              <p className="text-graphite-gray">
                Learn skills that complement academics: coding, sports, arts, public speaking,
                and critical thinking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                🏆
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Achievement & Recognition</h3>
              <p className="text-graphite-gray">
                Celebrate accomplishments through certificates, showcases, competitions,
                and public recognition.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-nextgen-green rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                🎓
              </div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Structured Learning</h3>
              <p className="text-graphite-gray">
                Professional instruction with clear learning objectives, progress tracking,
                and age-appropriate curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Skill Development That Matters</h2>
              <p className="text-lg text-graphite-gray mb-6">
                Our programs go beyond just activities. We intentionally develop skills that will
                serve your child throughout their life.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-midnight-navy mb-2">Critical Thinking</h4>
                  <p className="text-graphite-gray text-sm">
                    Problem-solving, logical reasoning, and analytical skills through chess,
                    coding, and debate.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-midnight-navy mb-2">Communication</h4>
                  <p className="text-graphite-gray text-sm">
                    Public speaking, presentation skills, and confident self-expression through
                    drama, debate, and leadership programs.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-midnight-navy mb-2">Creativity & Innovation</h4>
                  <p className="text-graphite-gray text-sm">
                    Original thinking, artistic expression, and creative problem-solving through
                    arts, music, and STEM programs.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-midnight-navy mb-2">Physical Wellness</h4>
                  <p className="text-graphite-gray text-sm">
                    Healthy habits, coordination, discipline, and teamwork through structured
                    sports and fitness programs.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/Training at home-rafiki.svg"
                alt="Skill Development"
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/Coaches-amico.svg"
                alt="Discipline"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Discipline & Character Building</h2>
              <p className="text-lg text-graphite-gray mb-6">
                Beyond technical skills, our programs instill values and character traits that
                shape well-rounded individuals.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-nextgen-green rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-graphite-gray">
                      <span className="font-semibold text-midnight-navy">Responsibility:</span> Managing commitments, punctuality, and follow-through
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-nextgen-green rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-graphite-gray">
                      <span className="font-semibold text-midnight-navy">Perseverance:</span> Overcoming challenges and learning from setbacks
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-nextgen-green rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-graphite-gray">
                      <span className="font-semibold text-midnight-navy">Respect:</span> Valuing peers, trainers, and diverse perspectives
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-nextgen-green rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-graphite-gray">
                      <span className="font-semibold text-midnight-navy">Teamwork:</span> Collaborating effectively and supporting others
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-nextgen-green rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-graphite-gray">
                      <span className="font-semibold text-midnight-navy">Growth Mindset:</span> Embracing learning and continuous improvement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-midnight-navy">
            Certificates & Showcases
          </h2>
          <p className="text-lg text-graphite-gray mb-12 text-center">
            We celebrate student achievement and provide opportunities to showcase their learning.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Termly Certificates</h3>
              <p className="text-graphite-gray">
                Every student receives a certificate of completion at the end of each term,
                recognizing their participation, effort, and achievements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Public Showcases</h3>
              <p className="text-graphite-gray">
                Students perform, exhibit, or demonstrate their skills in public showcases where
                parents and the school community can celebrate their progress.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Competitions</h3>
              <p className="text-graphite-gray">
                Inter-school competitions in sports, chess, debate, robotics, and other areas
                give students opportunities to test their skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Progress Reports</h3>
              <p className="text-graphite-gray">
                Detailed termly reports outline skill development, participation levels, and
                areas for continued growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-midnight-navy">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-soft-white rounded-xl overflow-hidden shadow">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-midnight-navy pr-4">{faq.question}</span>
                  <span className="text-electric-blue text-2xl flex-shrink-0">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-graphite-gray">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in These Programs for Your Child?"
        description="Speak with your school administrator about enrolling in Osaris NextGen programs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Programs"
        secondaryButtonLink="/programs"
      />
    </>
  );
}
