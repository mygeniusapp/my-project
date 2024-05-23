import React from 'react';
import AttractionCard from './AttractionCard';
import attractionImage1 from '../assets/attraction1.jpg';  
import attractionImage2 from '../assets/attraction2.jpg';  
import attractionImage3 from '../assets/attraction3.jpg';  
import attractionImage4 from '../assets/attraction4.jpg';  

const TopAttractionsPage = () => (
  <div>
  <AttractionCard cardimage={attractionImage1} title="Jeddah Sightseeing" >
    <p>Explore the vibrant energy of New Jeddah Corniche and immerse yourself in the rich history of Albalad's ancient streets, old houses, and iconic landmarks.</p>
    <p>Experience the vibrant energy of New Jeddah Corniche and marvel at the enchanting Fountain Show. </p>
  </AttractionCard>
  <AttractionCard cardimage={attractionImage2} title="Jeddah 4x4 Desert Safari ">
    <p>A We will explore the Saudi desert that surrounds the city of Jeddah. We will board our 4x4, and drive you to impressive sand dunes near Jeddah.</p>
    <p>some dune bashing with our expert Bedouin drivers. After these activities, we will have a relaxing time between the dunes where we serve a nice meal, water, juices, and coffee & tea </p>
  </AttractionCard>
  <AttractionCard cardimage={attractionImage3} title="Diving Adventure">
    <p>Diving with fish and enjoying the view of coral reefs is an insatiable passion. The Red Sea offers the most beautiful and pristine waters where you can dive without ever getting tired of it.</p>
    <p>Travel to the depths of the sea and breathe underwater, and relax while witnessing the most stunning marine life scenes.  </p>
  </AttractionCard>
  <AttractionCard cardimage={attractionImage4} title="Beach horse riding experience">
    <p>Immerse yourself in the culture of Saudi Arabia as you giddy up for a fantastic horse riding experience in Jeddah. Arrive at the meeting point and head inside an equestrian centre to get first-hand knowledge from professional trainers about horses and their different breeds.</p>
    <p>h. You can take plenty of pictures on horseback with your phone and a Polaroid camera to capture this memory. Relax after the ride in a traditional seating area by the beach, where you can enjoy a delicious meal and beverages before bringing out your competitive streak in some fun games </p>
  </AttractionCard>
  </div>
);

export default TopAttractionsPage;
