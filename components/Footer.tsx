import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-midnight-navy text-soft-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-electric-blue">OSARIS</span>
              <span className="text-nextgen-green"> NEXTGEN</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Professional extracurricular programs for Cambridge schools in Ghana.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-nextgen-green">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-nextgen-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-nextgen-green transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/schools" className="hover:text-nextgen-green transition-colors">
                  For Schools
                </Link>
              </li>
              <li>
                <Link href="/parents" className="hover:text-nextgen-green transition-colors">
                  For Parents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-nextgen-green">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>STEM & Robotics</li>
              <li>Sports & Fitness</li>
              <li>Arts & Creativity</li>
              <li>Leadership Skills</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-nextgen-green">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@osarisnextgen.com</li>
              <li>Phone: +233 XX XXX XXXX</li>
              <li>WhatsApp: +233 XX XXX XXXX</li>
              <li>Location: Accra, Ghana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Osaris NextGen EduHub. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-nextgen-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-nextgen-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
