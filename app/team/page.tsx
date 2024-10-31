export default function Team() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Digital Sciences Team</h1>
          <p className="text-lg mt-4">Innovation through technology and data-driven solutions</p>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-gray-600">
          We are a team of passionate technologists dedicated to advancing digital solutions in fields
          like artificial intelligence, Web development js, react.js, next.js framework. 
          Our mission is to create innovative, data-driven technologies to be implemented in Medical field that improve quality of lives and drive business success.
          {/* artifical intelligence, data science and cloud computing */}
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
              <p className="text-gray-600">
                We build AI-powered applications that will transform Medical Practice, improve decision-making, and patient management.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Web Development - Front end</h3>
              <p className="text-gray-600">
              Web Development - Front end team provides solution with js, react.js and next.js framework. 
              {/* From data collection to advanced analytics, we offer end-to-end data solutions to unlock actionable */}
                insights.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Web Development - Back end</h3>
              <p className="text-gray-600">
                Our Back-end solutions like mongodb and appwrite provide scalable, secure, and efficient solutions for clinics/hospitals and businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-md">
            <img src="/team-member-1.jpg" alt="John Doe" className="rounded-full w-32 mx-auto mb-4" />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-600">AI Engineer</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <img src="/team-member-2.jpg" alt="Jane Smith" className="rounded-full w-32 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">Data Scientist</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <img src="/team-member-3.jpg" alt="Michael Johnson" className="rounded-full w-32 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Michael Johnson</h3>
            <p className="text-gray-600">Cloud Architect</p>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <p className="mt-4">Email us at <a href="mailto:epassionate01@gmail.com" className="underline">epassionate01@gmail.com</a></p>
          {/* <p className="mt-4 flex justify-center items-center"><Link href={'https://wa.me/923218245668'}> <PiWhatsappLogoLight className='' /></Link></p> */}
        </div>
      </footer>
    </div>
    
  )
}






















{/* <div>
<h3 className='w-1/4 font-semibold text-white p-3 flex mx-auto'>Queries are welcome</h3>
<button className='flex w-1/3 p-4 justify-center mx-auto border rounded-full mb-10'><Link href='/contact'>e-Services</Link></button>
  <h1 className='w-1/4 px-3 pb-3 flex justify-end mx-auto'>Digital Team Manager</h1>
</div> */}