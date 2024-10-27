// Import necessary modules
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-8 py-12">
      
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">avell.media – Wir machen Unternehmen sichtbar</h1>
        <p className="text-lg mb-8">Deine Lösung für SEO, digitale Optimierung und Online-Wachstum. Entdecke unsere maßgeschneiderten Services für lokale Unternehmen.</p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500">Kostenlose Beratung</button>
      </section>
      
      {/* Services Section */}
      <section className="py-16 w-full">
        <h2 className="text-3xl font-semibold text-center mb-10">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Local Boost Package */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Local Boost Paket</h3>
            <p>Erhöhe deine Sichtbarkeit in lokalen Suchergebnissen und sammle mehr Kundenbewertungen.</p>
            <ul className="list-disc list-inside my-4">
              <li>Google My Business Einrichtung</li>
              <li>Standort-SEO und Keyword-Optimierung</li>
              <li>QR-Code für Bewertungen</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Mehr erfahren</button>
          </div>
          
          {/* Digital Starter Package */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Digital Starter Paket</h3>
            <p>Perfekte Lösung für den Start ins digitale Business.</p>
            <ul className="list-disc list-inside my-4">
              <li>SEO-optimierte Website</li>
              <li>Professionelle Business-E-Mail</li>
              <li>Social Media Setup</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Mehr erfahren</button>
          </div>
          
          {/* Lead & Visibility Package */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Lead & Visibility Paket</h3>
            <p>Mehr Anfragen durch gezielte SEO und Ads.</p>
            <ul className="list-disc list-inside my-4">
              <li>SEO-Optimierung</li>
              <li>Google & Social Media Ads</li>
              <li>Monatliches Reporting</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Mehr erfahren</button>
          </div>
          
          {/* Business Pro Package */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-2">Business Pro Paket</h3>
            <p>Für Unternehmen, die ihr Online-Wachstum maximieren möchten.</p>
            <ul className="list-disc list-inside my-4">
              <li>Webseite, SEO und Google Ads</li>
              <li>QR-Code-Setup & Werbevideo</li>
              <li>Beratung zur digitalen Effizienz</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Mehr erfahren</button>
          </div>
          
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 w-full text-center">
        <h2 className="text-3xl font-semibold mb-8">Erfolgsstories unserer Kunden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <p>„avell.media hat uns geholfen, online durchzustarten. Die SEO-Optimierungen haben sofort Wirkung gezeigt.“</p>
            <span className="block mt-4 text-sm text-gray-500">– Kunde A</span>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <p>„Unsere Google-Bewertungen und die lokale Auffindbarkeit sind stark gestiegen. Sehr zufrieden!“</p>
            <span className="block mt-4 text-sm text-gray-500">– Kunde B</span>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <p>„Die Zusammenarbeit mit avell.media war professionell und transparent. Die Beratung und Umsetzung ist top!“</p>
            <span className="block mt-4 text-sm text-gray-500">– Kunde C</span>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 w-full text-center">
        <h2 className="text-3xl font-semibold mb-8">Lass uns starten</h2>
        <p className="mb-4">Bist du bereit, die Sichtbarkeit deines Unternehmens zu steigern? Kontaktiere uns für eine kostenlose Beratung!</p>
        <a href="mailto:info@avell.media" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500">info@avell.media</a>
      </section>
      
    </main>
  );
}
