import React, { useState, useEffect } from 'react';
import Loader from '../components/loader/Loader';
import hero3 from '../assets/hero3.png';
import plaque from '../assets/plaque.png';

const awards = [
    {
        id: 1,
        title: "Diversity Champion",
        description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession, particularly in supporting internationally trained lawyers. This can also be awarded to a law firm that has demonstrated outstanding commitment to diversity and inclusion, particularly in supporting and advancing the careers of internationally trained lawyers within their organization.",
        icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
      },
      {
        id: 2,
        title: "Community Impact Award",
        description: "Awarded to an ITL who has demonstrated exceptional dedication to serving and making a positive impact in their local community through advocacy, legal advocacy, pro bono work, or community initiatives. This will also be awarded to an ITL who has displayed exemplary advocacy skills and commitment to justice, making a significant impact in advocating for ITLs, their clients and communities", 
        icon: "/assets/plaque.png",
      },
      {
        id: 3,
        title: "Leadership in Legal Education Award",
        description: "Honoring an individual or institution that has shown outstanding leadership and innovation in providing educational support and resources for internationally trained lawyers to integrate into the Canadian legal profession. This can also be awarded to an ITL who has made exceptional contributions to legal scholarship through their research, publications, and academic endeavors within the Canadian legal education system.",
        icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
      },
      {
        id: 4,
        title: "Trailblazer in Technology Award",
        description: "Recognizing an ITL who has leveraged technology and innovation to advance the practice of law, improve access to justice, or enhance legal services delivery in Canada. This also includes groundbreaking legal solutions developed or implemented by an internationally trained lawyer or legal team to address complex challenges in the Canadian legal landscape.",
        icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
      },
      {
        id: 5,
        title: "Lifetime Achievement Award",
        description: "Presented to an esteemed ITL who has made a lasting impact on promoting diversity, equity, and inclusion within the Canadian legal profession throughout their career.",
        icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
      },
      {
        id: 6,
        title: "Rising Star Award",
        description: "Acknowledging an up-and-coming ITL who shows exceptional promise, leadership, and dedication to advancing international law and diplomacy within the Canadian legal context.",
        icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
      },
      {
        id: 7,
        title: "Mentorship Excellence Award",
        description: "Presented to a law firm, individual or organization that has excelled in providing mentorship programs and opportunities for internationally trained lawyers to enhance their professional development and integration into the Canadian legal profession.",
        icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
      },
      {
        id: 8,
        title: "Innovative Recruitment Award",
        description: "Awarded to a law firm that has implemented innovative and effective strategies to recruit, retain, and support internationally trained lawyers within their organization, fostering diversity and talent acquisition.",
        icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
      },
      {
        id: 9,
        title: "Entrepreneurial Excellence Award",
        description: "This award honors an ITL who has demonstrated exceptional entrepreneurial spirit, innovation, and leadership in the business sector. Whether through founding a startup, leading a successful business venture, or driving innovation within an established company, this individual exemplifies excellence in business acumen, strategic thinking, and transformative leadership.",
        icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
      },
      {
        id: 10,
        title: "The Nobel Award",
        description: "This is the flagship award of the year. This award recognizes an outstanding ITL who has shown exemplary leadership, advocacy, and dedication to advancing the interests and rights of internationally trained lawyers within the Canadian legal profession. This ITL would have displayed exceptional mentorship qualities and be a model and exemplary ITL in the Canadian Legal community.",
        icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
      },
];

const AwardsSection = () => {
  const [expandedIds, setExpandedIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-24">
      <div
        className="h-96 flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero3})` }}
      ></div>
      <div className="px-6 py-12 text-gray-800">
        <h2 className="text-3xl text-textPrimary font-extrabold text-center mb-8">
          The ITL Conference &#39;25 Awards
        </h2>
        <p className="text-center mb-4">
          At the upcoming ITL Conference, we will be recognizing the remarkable achievements and
          contributions of internationally trained lawyers (ITLs) and the stakeholders, community partners
          and law firms that support them. These awards celebrate excellence, innovation, and leadership
          within the Canadian legal profession, fostering a culture of equity, diversity, inclusion, and
          collaboration.
        </p>
        <p className="text-center">
          We invite ITLs, law firms, and legal professionals across Canada to participate in this prestigious
          recognition of talent and dedication. Below are the award categories designed to honor outstanding
          individuals, organizations, and initiatives that have made a significant impact on the Canadian legal
          landscape.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
          {isLoading ? (
            <Loader />
          ) : (
            awards.map((award) => (
              <div
                key={award.id}
                className="bg-[#FEFBF6] text-[#331D2C] p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img src={award.icon} alt={award.title} className="w-20 h-20" />
                <h4 className="mt-4 text-textPrimary font-black text-md text-center">{award.title}</h4>
                {expandedIds.includes(award.id) ? (
                  <p className="mt-2 text-center">{award.description}</p>
                ) : (
                  <p className="mt-2 text-center">{award.description.slice(0, 100)}...</p>
                )}
                <button
                  onClick={() => toggleExpand(award.id)}
                  className="border-none bg-none text-textPrimary font-bold underline cursor-pointer mt-2 focus:outline-none"
                >
                  {expandedIds.includes(award.id) ? 'Read Less' : 'Read More'}
                </button>
              </div>
            ))
          )}
        </div>
        <div className="text-center mt-12">
          <a
            href="/nominate"
            className="inline-block bg-ctaBg text-white font-bold py-3 px-8 rounded hover:bg-ctaHover transition-colors duration-300"
          >
            Click here to nominate
          </a>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
