'use client';

import Image from 'next/image';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    role: '',
    phone: '',
    email: '',
    message: '',
    formType: 'booking'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            school_name: formData.schoolName,
            role: formData.role,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            form_type: formData.formType,
            status: 'new'
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        schoolName: '',
        role: '',
        phone: '',
        email: '',
        message: '',
        formType: 'booking'
      });
    } catch (error: unknown) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-midnight-navy to-graphite-gray text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-nextgen-green">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Ready to bring exceptional extracurricular programs to your school? Let's talk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-soft-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-midnight-navy">Contact Information</h2>
              <p className="text-lg text-graphite-gray mb-8">
                We're here to answer your questions and help you get started with our programs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white">
                    📧
                  </div>
                  <div>
                    <h4 className="font-bold text-midnight-navy mb-1">Email</h4>
                    <p className="text-graphite-gray">info@osarisnextgen.com</p>
                    <p className="text-graphite-gray text-sm">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-nextgen-green rounded-full flex items-center justify-center text-white">
                    📱
                  </div>
                  <div>
                    <h4 className="font-bold text-midnight-navy mb-1">Phone</h4>
                    <p className="text-graphite-gray">+233 XX XXX XXXX</p>
                    <p className="text-graphite-gray text-sm">Mon - Fri, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white">
                    💬
                  </div>
                  <div>
                    <h4 className="font-bold text-midnight-navy mb-1">WhatsApp</h4>
                    <p className="text-graphite-gray">+233 XX XXX XXXX</p>
                    <p className="text-graphite-gray text-sm">Quick responses via WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-nextgen-green rounded-full flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-midnight-navy mb-1">Location</h4>
                    <p className="text-graphite-gray">Accra, Ghana</p>
                    <p className="text-graphite-gray text-sm">Serving schools across Greater Accra</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Image
                  src="/images/house party-rafiki.svg"
                  alt="Contact"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-midnight-navy">Book a School Session</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Thank you for your interest!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-midnight-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="schoolName" className="block text-sm font-semibold text-midnight-navy mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                      placeholder="ABC International School"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-midnight-navy mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    >
                      <option value="">Select your role</option>
                      <option value="Proprietor">Proprietor</option>
                      <option value="Head of School">Head of School</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Coordinator">Coordinator</option>
                      <option value="Parent">Parent</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-midnight-navy mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-midnight-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                      placeholder="your.email@school.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="formType" className="block text-sm font-semibold text-midnight-navy mb-2">
                      Request Type
                    </label>
                    <select
                      id="formType"
                      name="formType"
                      value={formData.formType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    >
                      <option value="booking">Book a School Session</option>
                      <option value="proposal">Request a Proposal</option>
                      <option value="contact">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-midnight-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent resize-none"
                      placeholder="Tell us about your school and your interest in our programs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-electric-blue hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>

                  <p className="text-sm text-graphite-gray text-center">
                    By submitting this form, you agree to be contacted by Osaris NextGen EduHub.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-midnight-navy">What Happens Next?</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-midnight-navy mb-2">We'll Contact You</h3>
              <p className="text-graphite-gray text-sm">
                Within 24 hours, we'll reach out to discuss your needs and answer any questions.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-nextgen-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-midnight-navy mb-2">Custom Proposal</h3>
              <p className="text-graphite-gray text-sm">
                We'll create a tailored program package with transparent pricing for your school.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-midnight-navy mb-2">Get Started</h3>
              <p className="text-graphite-gray text-sm">
                Sign the agreement and we'll schedule your programs to begin next term.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
