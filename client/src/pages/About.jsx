// import tlclogo from '../assets/WEBSITE_Pics/tlc logo.jpg'
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center lg:p-5 pb-12 bg-dark_gray p-3">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold my-8  text-lightText">
        Welcome to my professional corner on the web!
        </h1>
        {/* <p className="pl-40 pr-24 sm:pl-0 sm:pr-0 text-center tracking-wide leading-10 text-2xl font-light font-teko text-whiteText"> */}
        <p className="text-center tracking-wide leading-10 text-2xl font-light text-whiteText sm:tracking-normal">
         I am Bedabrata Bagchi, a passionate marketer and strategist with over 12 years of experience in brand and product marketing, strategy, content development, and media management.
          With a robust track record of conceptualizing, designing, and executing key projects, I have been instrumental in enhancing brand equity and business efficiency for various esteemed organizations. From my early days at CRISIL Limited to leading regional marketing for DigitalOcean, my journey has been driven by a commitment to excellence and innovation.
          As the founder of TheLearningCorporate.com and AdriConsultingGroup.com, I aim to foster growth and development in the corporate and consulting landscapes. I also take pride in being a visiting faculty at NMIMS, Mumbai, where I mentor MBA students in the nuances of marketing.
        </p>
      </div>
      <div className="flex flex-row items-center justify-between gap-2 mb-12">
        <a href="https://www.thelearningcorporate.com/" target='_blank' className='flex flex-row  text-amazon_yellow items-center hover:underline text-xl font-semibold'>
       <p>The Learning Corporate</p>
        </a>
        <p className=" text-amazon_yellow items-center text-xl font-semibold ">|</p>
        <a href="https://www.adriconsultinggroup.com/" target='_blank' className=" text-amazon_yellow items-center hover:underline text-xl sm:text-right  font-semibold">
        Adri Consulting Group
        </a>
      </div>
    </div>
  )
}
