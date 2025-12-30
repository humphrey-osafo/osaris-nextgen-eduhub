import Image from 'next/image';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'About Us | Osaris NextGen EduHub',
  description: 'Learn about Osaris NextGen EduHub - our mission, vision, and commitment to providing world-class extracurricular education to Cambridge schools in Ghana.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-midnight-navy to-graphite-gray text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-nextgen-green">Osaris NextGen</span> EduHub
            </h1>
            <p className="text-xl text-gray-300">
              Empowering the next generation through innovative, expert-led extracurricular programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Who We Are</h2>
              <p className="text-lg text-graphite-gray mb-4">
                Osaris NextGen EduHub is a premier provider of extracurricular programs designed
                specifically for Cambridge schools across Ghana. We believe that education extends
                far beyond the classroom, and every child deserves access to high-quality programs
                that nurture their talents, build confidence, and develop essential life skills.
              </p>
              <p className="text-lg text-graphite-gray mb-4">
                Founded by passionate educators and professionals who understand the unique needs
                of modern international schools, we bridge the gap between traditional academics
                and practical skill development.
              </p>
              <p className="text-lg text-graphite-gray">
                Our programs are delivered by experienced trainers who are experts in their fields,
                ensuring that every session is engaging, educational, and aligned with international
                best practices.
              </p>
            </div>
            <div>
              <Image
                src="/images/Innovation-bro.svg"
                alt="Innovation"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/Digital transformation-rafiki.svg"
                alt="Mission"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Our Mission</h2>
              <p className="text-lg text-graphite-gray mb-4">
                To transform extracurricular education in Ghana by providing world-class programs
                that develop well-rounded students equipped with the skills, confidence, and
                character needed to thrive in the 21st century.
              </p>
              <p className="text-lg text-graphite-gray">
                We partner with schools to make quality extracurricular programs accessible,
                affordable, and seamlessly integrated into the school experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Our Vision</h2>
              <p className="text-lg text-graphite-gray mb-4">
                To be the leading provider of extracurricular education in West Africa, recognized
                for excellence, innovation, and positive impact on student development.
              </p>
              <p className="text-lg text-graphite-gray">
                We envision a future where every student in every school has access to diverse,
                high-quality programs that help them discover their passions, develop their talents,
                and build the confidence to pursue their dreams.
              </p>
            </div>
            <div>
              <Image
                src="/images/Open source-cuate.svg"
                alt="Vision"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-midnight-navy">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Excellence</h3>
              <p className="text-graphite-gray">
                We maintain the highest standards in program delivery, trainer selection,
                and student experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Integrity</h3>
              <p className="text-graphite-gray">
                We operate with transparency, honesty, and accountability in all our
                partnerships and interactions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Innovation</h3>
              <p className="text-graphite-gray">
                We continuously evolve our programs to incorporate new methodologies and
                emerging trends in education.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3 text-midnight-navy">Student-Centered</h3>
              <p className="text-graphite-gray">
                Every decision we make prioritizes student safety, growth, and enjoyment
                of the learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-midnight-navy">
            Why We Exist
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-graphite-gray mb-6">
              We noticed a gap in Ghana's educational landscape: while many schools excel at
              academics, providing consistent, high-quality extracurricular programs remained
              a challenge. Schools struggled with finding qualified trainers, managing logistics,
              and ensuring program quality.
            </p>
            <p className="text-lg text-graphite-gray mb-6">
              Parents wanted their children to develop diverse skills beyond textbooks, but
              options were limited or inconsistent. Students had potential waiting to be
              unlocked through proper guidance and structured programs.
            </p>
            <p className="text-lg text-graphite-gray mb-6">
              Osaris NextGen EduHub was created to solve these challenges. We handle the complexity
              of program delivery so schools can focus on their core mission while students benefit
              from world-class extracurricular education.
            </p>
            <div className="bg-gradient-to-r from-electric-blue to-nextgen-green p-8 rounded-2xl text-white text-center">
              <p className="text-xl font-semibold">
                We exist to ensure that every student has the opportunity to discover their
                talents, build confidence, and develop the skills they need to succeed in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Us"
        description="Join leading schools across Ghana in providing exceptional extracurricular education."
      />
    </>
  );
}
