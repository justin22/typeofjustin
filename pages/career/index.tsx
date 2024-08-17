import { NextSeo } from "next-seo"

const career = [
  {
    companyName: "SurveySparrow",
    designation: "Associate Director of Engineering",
    period: "Sep 2020 - Present",
    image: "surveysparrow",
    highlights: [
      "Joined as a Lead product developer, worked with NodeJS and React primarily.",
      "Moved up as Technical Architect where I majorly focused on the Frontend part of the engineering",
      "Became the manager of the Frontend Team at SurveySparrow. Worked with a team of ~25 Frontend developers",
      "Contributed in building the React component library Twigs, the in-house component library of SurveySparrow",
      "Promoted as Associate Director of Engineering, a story in writing"
    ]
  },
  {
    companyName: "Stayabode Ventures",
    designation: "Senior Frontend Engineer",
    period: "Apr 2018 - Aug 2020",
    image: "stayabode",
    highlights: [
      "Joined as a Frontend developer with React in StayAbode, a co-living space provider.",
      "Another career switch in terms of tech skills, ended up enjoying Frontend development",
      "StayAbode got acquired. Moved to the new company within the same team."
    ]
  },
  {
    companyName: "Activ4Pets",
    designation: "Software Developer",
    period: "Apr 2018 - Nov 2018",
    image: "active4pets",
    highlights: [
      "A company that provided a platform vets and pet owners to connect for appointments.",
      "Joined as a PHP developer, worked with Laravel Framework and enjoyed it.",
      "Even though the company did not do very well, got a channce to work in startup kinda atmosphere and that was nice."
    ]
  },
  {
    companyName: "Wipro",
    designation: "Software Engineer",
    period: "Sep 2013 - Apr 2018",
    image: "wipro",
    highlights: [
      "Joined Wipro right out of college. Had a chance to work with Java, Hibernate and few other tech stacks.",
      "Worked with Java, Hibernate, Struts for one of the largest insurance client",
      "Got a chance to work on a legacy Classic ASP project to address 600+ vulnerabilites reported to Veracode"
    ]
  }
]
export default function Career() {
  return (
    <div>

      <NextSeo
        title="Career of Justin George"
        description="A personal website of Justin George - Talking about 10 year of career in the Software world"
        openGraph={{
          images: [{
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og`
          }]
        }}
      />

      <h1 className='text-gray-800 text-xl font-semibold mb-16'>
        Career
      </h1>
      <div className="pl-4">
        {
          career.map(c => {
            return (
              <TimelineItem
                key={c.companyName}
                item={c}
              />
            )
          })
        }
      </div>
    </div>
  )
}

function TimelineItem({
  item
}: {
  item: typeof career[0]
}) {
  return (
    <div className="group relative flex gap-x-5">
      <div className="relative after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
        <div className="relative z-10 size-6 flex justify-center items-center -ml-4">
          <img alt={item.companyName} src={`/company/${item.image}.png`} className="shrink-0 size-6 text-gray-600 rounded-full" width="32" height="32" />
        </div>
      </div>

      <div className="grow pb-8 group-last:pb-0">
        <h3 className="mb-1 text-xs text-gray-600">
          {item.period}
        </h3>

        <p className="font-semibold text-sm text-gray-800">
          {item.companyName} ({item.designation})
        </p>

        <ul className="list-disc ms-6 mt-3 space-y-1.5">
          {
            item.highlights.map(h => {
              return (
                <li key={h} className="ps-1 text-sm text-gray-600">
                  {h}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}