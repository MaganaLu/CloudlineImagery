import PortfolioComponent from "../components/PortfolioComponent";
import PageHeader from "../components/PageHeader";
import NatureImage from "../assets/NatureImage.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>

      <PageHeader image='../assets/NatureImage.jpg' hText="Portfolio"/>
      <div className="portfolioCardContainer">
        <PortfolioComponent title="Golf field in WA" date="Jan 1, 2022" />
        <PortfolioComponent title="Title Goes Here" date="Sep 22, 2019" />
        <PortfolioComponent title="Title Goes Here" date="Sep 22, 2019" />
        <PortfolioComponent title="Title Goes Here" date="Sep 22, 2019" />
      </div>


    </>
  )
};

export default Portfolio