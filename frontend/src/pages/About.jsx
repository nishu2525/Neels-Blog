
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center pl-12 pr-12 pb-4">
      <div className="flex flex-col items-center justify-center p-12">
        <h1 className="text-3xl font-semibold mt-1 mb-7 text-lightText">
          About Bedabrata Bagchi
        </h1>
        <p className="pl-40 pr-24 text-center tracking-wide leading-10 text-2xl font-light font-teko text-whiteText">
          Welcome to my professional corner on the web! I am Bedabrata Bagchi, a passionate marketer and strategist with over 12 years of experience in brand and product marketing, strategy, content development, and media management.
          With a robust track record of conceptualizing, designing, and executing key projects, I have been instrumental in enhancing brand equity and business efficiency for various esteemed organizations. From my early days at CRISIL Limited to leading regional marketing for DigitalOcean, my journey has been driven by a commitment to excellence and innovation.
          As the founder of TheLearningCorporate.com and AdriConsultingGroup.com, I aim to foster growth and development in the corporate and consulting landscapes. I also take pride in being a visiting faculty at NMIMS, Mumbai, where I mentor MBA students in the nuances of marketing.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-24">
        <a href="https://www.thelearningcorporate.com/" target='_blank'>
          <img src="" alt="learningcorporate-logo" />
        </a>
        <a href="https://www.adriconsultinggroup.com/" target='_blank'>
          <img src="" alt="adriconsultinggroup-logo" />
        </a>
      </div>
    </div>
  )
}
