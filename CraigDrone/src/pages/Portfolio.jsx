import PortfolioCardComponent from "../components/PortfolioCardComponent";
import PageHeader from "../components/PageHeader";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>

      <PageHeader image='../assets/NatureImage.jpg' hText="Portfolio"/>
      <div className="portfolioCardContainer">
        <PortfolioCardComponent title="Golf field in WA" date="Jan 1, 2022" />
        <PortfolioCardComponent title="Title Goes Here" date="Sep 22, 2019" />
        <PortfolioCardComponent title="Title Goes Here" date="Sep 22, 2019" />
        <PortfolioCardComponent title="Title Goes Here" date="Sep 22, 2019" />
      </div>


    </>
  )
};

export default Portfolio