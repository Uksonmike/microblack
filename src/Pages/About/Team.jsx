/* eslint-disable no-unused-vars */
import React from "react";
import TeamCardComponents from "../../Components/TeamCardComponents";
import gerald from "../../assets/geralddp.jpg";
import tony from "../../assets/tonydp.png";
import joy from "../../assets/joydp.png";
import awala from "../../assets/awala.jpg";
import { useOutletContext } from "react-router-dom";

function Team() {
  const [darkMode, setDarkMode] = useOutletContext();
  const data = [
    {
      name: "Gerald Okonkwo",
      description:
        "Gerald is a serial entrepreneur and business consultant. Attended Madonna University (B.Eng; Computer Engineering), London Academy Business School (P.GD; Project Management, Certification; Business Administration and Management). He has also attended the Harvard Business School (Entrepreneurship in Emerging Economies Harvardx Course), Heritage Bank Business Clinic and the Variant Advisory Mentorship Programme. Gerald successfully built and exited a startup, Parkit, which got acquired in September 202",
      img: gerald,
      twitter: "",
      linkedin: "https://www.linkedin.com/in/gerald-black-b4716953/",
      instagram: "",
    },
    {
      name: "Anthony Okpala",
      description:
        "Anthony is a digital marketer with an interest in helping companies reach a higher level of profitability and success through website optimization, email marketing and strategic brand positioning. His experience includes developing digital campaigns, testing, and launching marketing campaigns, creating amazing content, writing compelling ad copies optimizing platforms for increased revenue generation",
      img: tony,
      twitter: "",
      linkedin: "https://www.linkedin.com/in/uchenna-anthonyokpala/",
      instagram: "",
    },
    {
      name: "Joy Egwudah",
      description:
        "Joy is an Experienced On-Air Personality with a demonstrated history of working in the tech industry. Skilled in Advertising, Public Speaking, Social Media, Facebook, and Social Media Marketing. Strong media and communication professional with a Bachelor's degree focused in Mass Communication/Media Studies from Les cours sonou university (Benin, Cotonou).",
      img: joy,
      twitter: "",
      linkedin: "https://www.linkedin.com/in/joy-egwudah-4a6a0b176/",
      instagram: "",
    },
    {
      name: "Bemigho Awala",
      description:
        "As a highly dynamic, independent and experienced professional in audio-visual, radio advertising, press and public relations with over eight years experience; he has worked on a variety of projects which received both local and international acclaim. Bemigho’s experience traverses the communications gamut including corporate PR, public affairs and reputation management, product communications, internal and stakeholder management and media relations",
      img: awala,
      twitter: "",
      linkedin: "https://www.linkedin.com/in/bemigho-awala-2b067b5/",
      instagram: "",
    },
  ];

  return (
    <section className="md:px-10 px-5 lg:py-32 py-20">
      <div
        className={`${
          darkMode ? "text-white" : ""
        } text-center mb-20 transition-all duration-400`}
      >
        <p className="text-5xl font-semibold mb-5">Our Team</p>
        <p>
          Unleash the Power of Collaboration with Our Dynamic Team of
          Visionaries, Innovators, and Industry Experts, as We Seamlessly Work
          Towards Achieving Extraordinary Results Together.
        </p>
      </div>
      <section className="md:grid gap-10 lg:grid-cols-4 md:grid-cols-2 ">
        {data.map((item, index) => {
          return (
            <TeamCardComponents
              mode={darkMode}
              key={index}
              id={index}
              img={item.img}
              linkedin={item.linkedin}
              description={item.description}
              name={item.name}
            />
          );
        })}
      </section>
    </section>
  );
}

export default Team;
