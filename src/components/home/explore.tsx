import {Users, DollarSign, GraduationCap, Eye } from "lucide-react";

const whyExplore = [
  {
    icon: Users,
    title: "Accessible to Everyone",
    description: "Explore from anywhere regardless of physical limitations or travel restrictions",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "No travel expenses, visa fees or accommodation costs",
  },
  {
    icon: GraduationCap,
    title: "Educational Value",
    description: "Rich historical context and cultural insights with every tour",
  },
  {
    icon: Eye,
    title: "Preview Before Visits",
    description: "Plan your future trip by virtually scouting destinations first",
  },
];

export default function Explore() {
    return(
<section className="bg-[#faf6ec] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-2xl tracking-wide text-[#2c2416] md:text-3xl">Why Explore Virtually?</h2>
          <p className="mt-2 text-sm tracking-wide text-[#5c5340]">Experience Sri Lanka like never before</p>
 
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {whyExplore.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-md bg-[#c3c084] p-6 text-center shadow">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f1e6]">
                  <Icon className="h-6 w-6 text-[#2c2416]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[#2c2416] md:text-base">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#3f3a26] md:text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}