

const workData = [
  {
    title: "Regional Marketing Lead for APAC & Australia",
    company: "Digital Ocean",
    period: "2022 - Present",
    location: "",
    description: "",
    details: [
      "Spearheading multi-million-dollar marketing strategies, brand positioning, and event marketing.",
      "Team generating $1.5Mn in yearly revenue pipeline for two consecutive years."
    ]
  },
  {
    title: "General Manager and Head of Marketing",
    company: "Artium Academy ",
    period: "2021 - 2022",
    location: "",
    description: "",
    details: [
      "Drove the $0-2M growth journey for India's first performance-driven E-Learning platform for music & performing arts.",
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
      "Executed over 120 tactical and strategic campaigns."
    ]
  },
  {
    title: "Marketing Lead",
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
    <div className="bg-dark_theme text-lightText pl-12 pr-12 pb-4 min-h-screen">
  <h1 className="text-3xl font-semibold pt-12 mb-10 text-[var(--bg-exdark)]" id="workHeading">
    Work Experience
  </h1>
  <div className="relative border-l border-gray-600 pl-8 ml-2 md:ml-40">
    {workData.map((item, index) => (
      <div key={index} className="mb-8">
        <div className="absolute w-4 h-4 bg-teal rounded-full -left-2.5"></div>
        <h2 className="text-2xl font-semibold text-lightText -mt-1">{item.title}</h2>
        <h3 className="text-xl text-heading_blue">{item.company}</h3>
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
