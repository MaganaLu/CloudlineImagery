import PortfolioCardComponent from "../components/PortfolioCardComponent";
import PageHeader from "../components/PageHeader";
import "./Portfolio.css";

import { collection, DocumentSnapshot, getDocs, query, where } from "firebase/firestore";
import db from '../Firebase/Configuration.jsx';
import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [golfCourseEntries, setGolfCourseEntries] = useState([]);
  const [realEstateEntries, setRealEstateEntries] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getGolfCourseEntries = async () => {
      setGolfCourseEntries([]);
      setRealEstateEntries([]);

      const collection_ref = collection(db, "portfolio_entries");
      const golfCoursesQuery = query(collection_ref, where("type", "==", "Golf Courses"));
      const realEstateQuery = query(collection_ref, where("type", "==", "Real Estate"));

      const golfCoursesQuerySnapshot = await getDocs(golfCoursesQuery);
      const realEstateQuerySnapshot = await getDocs(realEstateQuery);

      if (golfCoursesQuerySnapshot.size === 1) {
        golfCoursesQuerySnapshot.forEach((doc) => {
          if (!ignore) {
            setGolfCourseEntries(golfCourseEntries => [...golfCourseEntries, doc.data()]);
          }
        });
      } else {
        console.log('Document not found or multiple documents found.');
      }

      if (realEstateQuerySnapshot.size === 1) {
        realEstateQuerySnapshot.forEach((doc) => {
          if (!ignore) {
            setRealEstateEntries(realEstateEntries => [...realEstateEntries, doc.data()]);
          }
        });
      } else {
        console.log('Document not found or multiple documents found.');
      }

      
    }

    getGolfCourseEntries();

    return () => {
      ignore = true;
    };
  }, [])


  return (
    <>

      <PageHeader image='../assets/NatureImage.jpg' hText="Portfolio" />

      <h1>Golf Courses</h1>
      <div className="portfolioCardContainer">
        {golfCourseEntries.map(portfolioEntry =>
          <ul key={portfolioEntry.title}>
            <PortfolioCardComponent video={portfolioEntry.video} title={portfolioEntry.title} date={portfolioEntry.date} image={portfolioEntry.image} type={portfolioEntry.type} />
          </ul>
        )}
      </div>

      <h1>Real Estate</h1>
      <div className="portfolioCardContainer">   
        {realEstateEntries.map(portfolioEntry =>
          <ul key={portfolioEntry.title}>
            <PortfolioCardComponent video={portfolioEntry.video} title={portfolioEntry.title} date={portfolioEntry.date} image={portfolioEntry.image} type={portfolioEntry.type} />
          </ul>
        )}
      </div>



    </>
  )
};

export default Portfolio