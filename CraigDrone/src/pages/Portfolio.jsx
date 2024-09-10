import PortfolioComponent from "../components/PortfolioComponent";
import "./Portfolio.css"

const Portfolio = () => {
    return (
      <>
      <div className="PortfolioHeader">
      <h1 >
        Portfolio
      </h1>
      </div>
        <div className="portfolioCardContainer">
          <PortfolioComponent/>
          <PortfolioComponent/>
          <PortfolioComponent/>
          <PortfolioComponent/>
        </div> 


      </>
    )
};
  
export default Portfolio