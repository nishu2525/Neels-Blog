

const workData = [
  {
    title: "Senior Regional Marketing Manager",
    company: "DigitalOcean",
    period: "2022 - Present",
    location: "",
    description: "",
    details: [
      "Spearheading marketing and activation strategies in the APAC & ANZ region.",
      "Worked in strategy and execution of key marketing events for DigitalOcean"
    ]
  },
  {
    title: "Visiting Faculty",
    company: "NMIMS",
    period: "(2019 - Present)",
    location: "",
    description: "",
    details: [
      "Currently a visiting faculty for the ‘Marketing’ at NMIMS",
      "Teaching B2B Marketing, Brand strategy, Advertising & PR and various other subjects under the domain"
    ]
  },
  {
    title: "General Manager-Marketing",
    company: "Artium Academy ",
    period: "2021 - 2022",
    location: "",
    description: "",
    details: [
      "Part of the growth journey for India's first performance-driven E-Learning platform for music & performing arts.",
      "Achieved a 6x increase in consumer inflow and ranked highest in social engagement among competitors."
    ]
  },
  {
    title: "Brand Manager",
    company: "BookMyShow",
    period: "2016 - 2021",
    location: "",
    description: "",
    details: [
      "Managed end-to-end brand marketing and strategy, contributing to significant growth and increased traffic.",
      "Executed over 120 tactical and strategic campaigns in a span of 5 years."
    ]
  },
  {
    title: "Marketing Manager",
    company: "SMERA Ratings Limited",
    period: "2014 - 2016",
    location: "",
    description: "",
    details: [
      "Developed corporate and product communications, and managed events and media relations.",
    ]
  },
  {
    title: "Business Development",
    company: "CRISIL Limited",
    period: "2013 - 2014",
    location: "",
    description: "",
    details: [
      "Liaised with the banking fraternity and spearheaded lead generation for corporate clients for credit assessments, in the mid corporate and large corporate groups.",
    ]
  },
  {
    title: "Internships",
    company: "",
    period: "",
    location: "",
    description: "",
    details: [
      "Octaga Green Limited: Developed marketing collaterals.",
      "Pranav Agro Industries: Assisted in product development and marketing.",
      "Dignity Foundation: Worked on initiatives for elderly job opportunities."
    ]
  },
]
export default function Work() {
  return (
    <div className="bg-dark_theme text-lightText pl-12 pr-12 pb-4 min-h-screen mb-8">
  <h1 className="text-3xl font-semibold pt-12 mb-10 text-[var(--bg-exdark)]" id="workHeading">
    Work Experience
  </h1>
  <div className="relative border-l border-gray-600 pl-8 ml-2 md:ml-40">
    {workData.map((item, index) => (
      <div key={index} className="mb-8">
        <div className="absolute w-4 h-4 bg-teal rounded-full -left-2.5"></div>
        <h2 className="text-2xl font-semibold text-lightText -mt-1">{item.title}</h2>
        <h3 className="text-xl text-amazon_yellow">{item.company}</h3>
        <p className="text-whiteText">{item.period}</p>
        {item.details.length > 0 && (
          <ul className="list-disc list-inside mt-2">
            {item.details.map((detail, idx) => (
              <li key={idx} className="text-lightText font-bold">{detail}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
</div>

  )
}
