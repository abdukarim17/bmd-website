import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react';
import mainpage from './assets/images/themainpage.jpg'; // Adjust the path as needed

const images = import.meta.glob('./assets/images/*.{png,jpg,jpeg}', { eager: true })

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left flex justify-between items-center hover:text-blue-500 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const reviews = [
  {
    name: "Shania Young",
    description: "My car looks so amazing after Del detailed it! I had originally called him because I believe I parked on an ant pile and ants were taking over my car and I felt like I had so many ants crawling all over me while driving! Del is a super kind guy and he is very thorough! His awesome skills has my car shining just like when I first got it and he cleared the ants out of my car as well! I will definitely call him in the future if I need mine or my families car detailed as well! Thank you for everything!",
    rating: 5,
    title: "Exceptional Service"
  },
  {
    name: "Jovan Garcia",
    description: "I was very satisfied with BmD  Services! I had not had a chance to work on my car as i usually do and for a very reasonable price i had my Benz detailed and looking in the best shape i’ve had it in years. They took their time and really put in effort and care towards getting my car to the condition i wanted. I 100% recommend and will be using again in the future. ( i ordered the basic package and did a rim cleaning add on and they did a fantastic job )",
    rating: 5,
    title: "Outstanding Results"
  },
  {
    name: "Sarah Morehouse",
    description: "This was absolutely fantastic! Del was so communicative and really worked with my schedule, responsive, and very professional! The inside of my car was a mess and the time, car, and attention to detail that he put into cleaning my car was wonderful!",
    rating: 5,
    title: "Above and Beyond"
  },
  {
      name: "Bill Ro",
      description: "Absolutely the hardest person I have ever met to detail my truck! Del took his time and was very attentive. He saw every stain inside my truck and made it just like I had bought my truck for the first time from dealership! I'm glad I found this guy during a Google search! Hire him for your detailing!",
      rating: 5,
      title: "Exceptional Attention to Detail"
  },
  {
      name: "Gary Toohey",
      description: "BmD mobile detailing did a fantastic job on my car. Del did a great job bringing my car back to life, he was professional and got the job done quickly. I highly recommend him and will be using them again!",
      rating: 5,
      title: "Quick and Impressive Results"
  },
  {
      name: "Timothy Prunty",
      description: "Del and his brother just finished clay bar and exterior wash and wax of my 22 laramie. Truck looks better now than when I bought it. No joke!!! B and D were on time, polite, and did an outstanding job. Paint really shines now. Great job!!!!! Thanks!!!",
      rating: 5,
      title: "Outstanding Exterior Detailing"
  },
  {
      name: "Gary Toohey",
      description: "We required an emergency service around 4pm due to my child throwing up in the backseat, and they came immediately and cleaned up the car perfectly! Looks brand new and all the things that were with vomit, I asked for them to put it in a bag for me to clean and they themselves sorted everything I had back there and even found a lost AirPod I had. So beyond thankful for the service, due to the time, amount of work it was, and the substance being cleaned.",
      rating: 5,
      title: "Lifesaver in an Emergency"
  }
];

function App() {

  const imageUrls = Object.values(images).map(image => image.default).slice(0, 8)

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [imageUrls.length]);

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Changed to 8 seconds

    return () => clearInterval(timer);
  }, []);

  const [replay, setReplay] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReplay(prev => prev + 1);
    }, 4000); // Total duration before replay

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section 
        id="home"
        className='min-h-[65vh] relative flex justify-center items-center px-6 md:px-20 py-12 md:py-20'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mainpage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='max-w-2xl relative z-10'>
          <p className='shadow-md bg-gray-500 bg-opacity-75 text-white w-fit pb-1 pt-1 pl-3 pr-3 rounded-xl mb-3 text-sm md:text-base'>
            Proudly serving Tampa and surrounding areas
          </p>
          <h1 className='text-2xl md:text-4xl font-bold mb-4 text-white'>
            {'Restore. Renew. Rejoice'.split(' ').map((word, index) => (
              <span
                key={`${word}-${replay}`}
                className="inline-block animate-word-reveal"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  display: 'inline-block',
                  marginRight: '0.3em'
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className='text-gray-100 text-sm md:text-base mb-6'>
            We offer top-tier, professional vehicle cleaning and detailing, ensuring your car looks as good as new.
          </p>
          <a 
            href='https://app.squareup.com/appointments/book/cxwgrre1ay0zyn/LZHX6SQFX8Y97/start' 
            className="cursor-pointer inline-block w-full md:w-48 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-500 ease-in-out hover:scale-105 shadow-lg"
          >
            Book Appointment
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services"
        className='py-16 md:py-24 px-6 md:px-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto'>
          <div className=' flex flex-col items-center text-center gap-4'>
            <p className='text-blue-500 font-semibold uppercase tracking-wide text-sm md:text-base'>
              Our services
            </p>
            <h2 className='text-xl md:text-3xl font-bold mb-2'>
              Explore our exceptional range of car care services
            </h2>
            <p className='text-gray-600 max-w-2xl text-sm md:text-base'>
              Discover the difference our comprehensive car care services, tailored to meet the unique needs of your vehicle
            </p>
          </div>
        </div>
          <div className="max-w-7xl mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
              <div className='relative cursor-pointer bg-white hover:bg-gray-50 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-105 border-2 border-blue-500'>
                {/* Popular Badge */}
                <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                  <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-md animate-pulse'>
                    Popular Pick
                  </div>
                </div>

                {/* Highlight Glow Effect */}
                <div className='absolute inset-0 bg-blue-500 opacity-5 rounded-2xl'></div>

                <div className='space-y-4'>
                  <h3 className='text-center text-xl font-bold text-gray-800 mt-2'>
                    Ultimate Detailing
                    <span className='ml-2 inline-block'>
                      <svg className="w-5 h-5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  </h3>
                  
                  <p className='text-gray-600 text-sm leading-relaxed min-h-[80px]'>
                    Elevate your vehicle's allure with our combo Diamond Interior & Exterior Detailing service. Impeccable cleaning, meticulous detailing, and premium treatments ensure a stunning finish inside and out.
                  </p>
                  
                  <div className='pt-4 border-t border-gray-100'>
                    <div className='flex items-baseline justify-between mb-2'>
                      <p className='text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>
                        $249.99
                      </p>
                      <p className='text-sm text-gray-500'>Sedan | 4hrs</p>
                    </div>
                    <div className='space-y-1 mt-2 bg-blue-50 p-3 rounded-lg'>
                      <p className='text-sm text-gray-600 flex justify-between'>
                        <span>SUV</span>
                        <span className='font-medium text-blue-600'>+$20</span>
                      </p>
                      <p className='text-sm text-gray-600 flex justify-between'>
                        <span>Truck</span>
                        <span className='font-medium text-blue-600'>+$50</span>
                      </p>
                    </div>
                  </div>

                  {/* Best Value Tag */}
                  <div className='absolute -right-2 -top-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-lg transform rotate-12 shadow-md'>
                    Best Value
                  </div>
                </div>
              </div>

              <div className='cursor-pointer bg-white hover:bg-gray-50 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-105'>
                <div className='space-y-4'>
                  <h3 className='text-center text-xl font-bold text-gray-800'>Full Interior Detailing</h3>
                  <p className='text-gray-600 text-sm leading-relaxed min-h-[80px]'>
                    Restore your vehicle's interior to pristine condition with our Full Interior Detailing service. Deep cleaning, vacuuming, upholstery care, and more for a refreshed, like-new interior experience.
                  </p>
                  <div className='pt-4 border-t border-gray-100'>
                    <p className='text-2xl font-bold text-blue-500'>$249.99</p>
                    <p className='text-sm text-gray-500'>Sedan | 3hrs</p>
                    <div className='space-y-1 mt-2'>
                      <p className='text-sm text-gray-600'>+ $20 SUV</p>
                      <p className='text-sm text-gray-600'>+ $50 Truck</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='cursor-pointer bg-white hover:bg-gray-50 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-105'>
                <div className='space-y-4'>
                  <h3 className='text-center text-xl font-bold text-gray-800'>Full Exterior Detailing</h3>
                  <p className='text-gray-600 text-sm leading-relaxed min-h-[80px]'>
                    Revitalize your vehicle's exterior with our Full Exterior Detailing service. We provide expert washing, thorough cleaning, and meticulous attention to detail, ensuring a sleek, showroom-worthy finish.
                  </p>
                  <div className='pt-4 border-t border-gray-100'>
                    <p className='text-2xl font-bold text-blue-500'>$249.99</p>
                    <p className='text-sm text-gray-500'>Sedan | 3hrs</p>
                    <div className='space-y-1 mt-2'>
                      <p className='text-sm text-gray-600'>+ $20 SUV</p>
                      <p className='text-sm text-gray-600'>+ $50 Truck</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='cursor-pointer bg-white hover:bg-gray-50 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-105'>
                <div className='space-y-4'>
                  <h3 className='text-center text-xl font-bold text-gray-800'>Basic Wash</h3>
                  <p className='text-gray-600 text-sm leading-relaxed min-h-[80px]'>
                    A thorough and effective service designed to maintain your vehicle's cleanliness and shine, covering all the essentials for regular upkeep and care. Drive with pride!
                  </p>
                  <div className='pt-4 border-t border-gray-100'>
                    <p className='text-2xl font-bold text-blue-500'>$249.99</p>
                    <p className='text-sm text-gray-500'>Sedan | 1hr</p>
                    <div className='space-y-1 mt-2'>
                      <p className='text-sm text-gray-600'>+ $20 SUV</p>
                      <p className='text-sm text-gray-600'>+ $50 Truck</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* Photo Slider Section */}
      <section 
        id="gallery"
        className='py-16 md:py-24 px-6 md:px-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto mb-12 text-center'>
          <p className='text-blue-500 font-semibold uppercase tracking-wide text-sm md:text-base'>
            Our Work
          </p>
          <h2 className='text-xl md:text-3xl font-bold mt-2'>
            Explore Automotive Excellence in Action
          </h2>
        </div>
        
        <div className='max-w-7xl mx-auto overflow-hidden relative'>
          <div className='flex justify-center'>
            <div className='w-[90vw] h-[90vw] md:w-[800px] md:h-[700px] relative'>
              <img 
                key={currentImageIndex}
                src={imageUrls[currentImageIndex]} 
                alt={`Detailed car ${currentImageIndex + 1}`} 
                className='w-full h-full object-cover rounded-lg shadow-lg slide-in'
              />
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className='flex justify-center mt-6 gap-3'>
            {imageUrls.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-1 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section 
        id="faq"
        className="py-16 md:py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm md:text-base">
              FAQ
            </p>
            <h2 className="text-2xl md:text-4xl font-bold mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4">
              Everything you need to know about our mobile detailing service
            </p>
          </div>

          <div className="space-y-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <FAQItem
              question="How long does a full detail service take?"
              answer="A full detail service typically takes 3-4 hours, depending on the size and condition of your vehicle. For larger vehicles or those requiring extra attention, it might take up to 5-6 hours to ensure every detail is perfect."
            />
            <FAQItem
              question="Do you provide all necessary equipment and water?"
              answer="Yes, we are fully self-contained and bring everything needed for the service, including our own water supply, power, professional-grade cleaning products, and all necessary equipment. You don't need to provide anything."
            />
            <FAQItem
              question="What areas do you service?"
              answer="We currently service within a 25-mile radius of the city center. For locations outside this area, please contact us for availability and any additional travel fees that may apply."
            />
            <FAQItem
              question="What forms of payment do you accept?"
              answer="We accept all major credit cards, debit cards, digital payments (Apple Pay, Google Pay), and cash. Payment is required upon completion of the service."
            />
            <FAQItem
              question="What's included in your basic detail package?"
              answer="Our basic detail package includes exterior wash, wheel cleaning, tire dressing, interior vacuum, dashboard and console cleaning, window cleaning (inside and out), and a basic wipe-down of all interior surfaces."
            />
          </div>
        </div>
      </section>

      <section 
        id="contact"
        className="py-16 md:py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm md:text-base">
              Testimonials
            </p>
            <h2 className="text-2xl md:text-4xl font-bold mt-2">
              What Our Customers Say
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="max-w-2xl mx-auto">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ease-in-out absolute w-full ${
                    index === currentReviewIndex 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : index < currentReviewIndex 
                        ? 'opacity-0 -translate-x-full scale-95'
                        : 'opacity-0 translate-x-full scale-95'
                  }`}
                  style={{ position: index === currentReviewIndex ? 'relative' : 'absolute' }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-700 hover:shadow-xl">
                    <div className="flex justify-center mb-4 animate-fade-in">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-6 h-6 text-yellow-400 transform transition-all duration-300 hover:scale-110`}
                          style={{ animationDelay: `${i * 150}ms` }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-800 mb-2 transform transition-all duration-700 ease-out">
                      {review.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-4 transform transition-all duration-700 ease-out">
                      {review.description}
                    </p>
                    <p className="text-blue-500 font-semibold text-center transform transition-all duration-700 ease-out">
                      {review.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots with enhanced animations */}
            <div className="flex justify-center mt-8 gap-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transform transition-all duration-500 ease-in-out hover:scale-150 ${
                    index === currentReviewIndex 
                      ? 'bg-blue-500 scale-125 ring-4 ring-blue-200' 
                      : 'bg-gray-300 hover:bg-blue-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section 
        id="contact"
        className="py-16 md:py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text mb-6">
                Book an Appointment
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                To make sure we have confirmed your order, out representatives will contact you!
              </p>
            </div>

            <div className="grid gap-6">
              {/* Phone */}
              <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (680) 202-0000</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">bmddetailing24@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">Tampa, Florida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="(813) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                  <option value="">Choose a service</option>
                  <option value="basic">Basic Detailing</option>
                  <option value="premium">Premium Detailing</option>
                  <option value="ultimate">Ultimate Detailing</option>
                  <option value="ceramic">Ceramic Coating</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 md:px-20 bg-gray-50 border-t-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-500 text-sm md:text-base">
              © 2024 BMD mobile detailing. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            {/* Instagram */}
            <a 
              href="https://instagram.com/your-handle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* Facebook */}
            <a 
              href="https://facebook.com/your-page" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com/@your-handle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default App
