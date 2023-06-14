/* eslint-disable no-unused-vars */
import React from "react";
import Lottie from "react-lottie";
import businessgrowth from "../../assets/businessgrowth.json";
import digitalmarketing from "../../assets/digitalmarketing.json";
import projecticon from "../../assets/project.json";
import userreviews from "../../assets/userreviews.json";
import branding from "../../assets/branding.json";
import businessteam from "../../assets/businessteam.json";
import Card from "../../Components/Card";
import { useOutletContext } from "react-router-dom";

function Solutions() {
  const [darkMode, setDarkMode] = useOutletContext();

  const growth = {
    loop: true,
    autoplay: true,
    animationData: businessgrowth,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const digital = {
    loop: true,
    autoplay: true,
    animationData: digitalmarketing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const project = {
    loop: true,
    autoplay: true,
    animationData: projecticon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const user = {
    loop: true,
    autoplay: true,
    animationData: userreviews,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const brand = {
    loop: true,
    autoplay: true,
    animationData: branding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const business = {
    loop: true,
    autoplay: true,
    animationData: businessteam,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };

  const data = [
    {
      id: 1,
      heading: "Growth Marketing",
      text: "At Microblack, we specialize in growth marketing strategies that drive tangible results. Our data-driven approach ensures that every marketing dollar you invest yields maximum returns. From comprehensive market research to targeted campaigns, we optimize your marketing efforts to attract, engage, and convert your ideal customers. With Microblack as your growth marketing partner, you can unlock new avenues of growth and propel your business forward.",
      lottie: growth,
    },
    {
      id: 2,
      heading: "Social Media Marketing",
      text: "Social media platforms have become powerful channels for brand exposure and engagement. Our expert social media marketing team at Microblack helps you harness the potential of these platforms to amplify your brand's reach and build meaningful connections with your audience. We develop tailored social media strategies that align with your business goals, creating captivating content and fostering active community engagement. Whether it's crafting compelling posts, running effective ad campaigns, or managing your social media presence, we ensure that your brand stays top-of-mind and drives meaningful interactions.",
      lottie: digital,
    },
    {
      id: 3,
      heading: "Performance Marketing",
      text: "In the digital age, every marketing campaign must be driven by measurable results. That's where performance marketing comes in. At Microblack, we leverage performance marketing techniques to maximize your return on investment and boost your digital presence. From pay-per-click (PPC) advertising to search engine optimization (SEO) and conversion rate optimization (CRO), our experts meticulously optimize your campaigns to deliver optimal results. We monitor key metrics, refine strategies, and adapt to market trends, ensuring that your marketing efforts are consistently driving tangible business growth.",
      lottie: project,
    },
    {
      id: 4,
      heading: "User Retention/CRM",
      text: "Acquiring new customers is important, but retaining and nurturing your existing ones is equally crucial. Microblack understands the value of a loyal customer base, and we offer comprehensive user retention and customer relationship management (CRM) solutions. By understanding your customers' needs, preferences, and pain points, we develop personalized strategies to enhance their experience and drive long-term loyalty. From targeted email marketing campaigns to customer satisfaction surveys and loyalty programs, we help you foster strong relationships and turn your customers into brand advocates.",
      lottie: user,
    },
    {
      id: 5,
      heading: "Personal Branding",
      text: "In today's digital world, establishing a strong personal brand is essential for professionals and entrepreneurs alike. At Microblack, we specialize in personal branding strategies that help you stand out from the crowd. We work closely with you to define your unique value proposition, craft a compelling brand story, and develop an authentic online presence. From optimizing your LinkedIn profile to creating engaging thought leadership content, we ensure that your personal brand resonates with your target audience, enhances your professional reputation, and opens doors to new opportunities.",
      lottie: brand,
    },
    {
      id: 6,
      heading: "Sales and Business Development Leadership",
      text: "Strategic partnerships can be game-changers for startups seeking growth and market expansion. At Microblack, we have the expertise and network to help you forge meaningful partnerships that drive mutual success. Our business development team identifies and evaluates potential collaboration opportunities, negotiates favorable terms, and facilitates partnerships that align with your business goals. Whether it's securing distribution channels, accessing new markets, or leveraging complementary technologies.",
      lottie: business,
    },
  ];
  return (
    <section id="solutions" className="md:px-10 px-5 lg:py-32 py-20">
      <div
        className={`${
          darkMode ? " text-white" : ""
        } text-center mb-20  transition-all duration-400`}
      >
        <h2 className="text-4xl font-semibold mb-2">Our Solutions</h2>
        <p className="font-medium">
        Unlocking Success through Tailored Solutions: Empowering Startups with Strategic Sales, Business Development, and Growth Marketing Strategies.
        </p>
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {data.map((item, index) => (
          <Card
            key={index}
            darkMode={darkMode}
            heading={item.heading}
            text={item.text}
          >
            <Lottie className options={item.lottie} />
          </Card>
        ))}
      </section>
    </section>
  );
}

export default Solutions;
