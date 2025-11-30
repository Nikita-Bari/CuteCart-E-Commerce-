import React from "react";
import "../style/Home.css";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Home(){
    return(
        <div>
             {/* <!--carosoule-->  */}


<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg" className="d-block w-100" alt="amz"/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg" className="d-block w-100" alt="amz"/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg" className="d-block w-100" alt="amz"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

 {/* <!--Main cards contain 1-->  */}
 {/* <!-- card 1 --> */}
<div id="main-box">
<div className="cardcontainer">

  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Shop for your home essentials</p></div>
    <Link to="/essential" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg" alt="amz-img" className="inner-img"/>
   </div>
    
   <div className="prodes">
    <div className="item1"><p className="itemlink1">Cleaning Tool</p></div>
    <div className="item2"><p className="itemlink2">Home Storage</p></div>
   </div>

    <div className="simgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg" alt="amz-img" className="inner-img"/>
    </div>
  
    <div className="prodes">
    <div className="item1"><p className="itemlink1">Home Decore</p></div>
    <div className="item2"><p className="itemlink2">Bedding</p></div>
   </div>

</Link>
    <div className="givenlink">
        <Link to="/essential" className="nextpagelink">Discover more in Home</Link>
    </div>
  </div>
 
  {/* <!-- card 2 --> */}
  <div className="productbox">
        <div className="headingdiv"><p className="topheading">Shop Fashion for less</p></div>
         <Link to="/fashion" className="nextpagelink">
    <div className="fimgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Jeans under $50</p></div>
        <div className="item2"><p className="itemlink2">Tops under $25</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="amz-img" className="inner-img"/>
    </div>

        <div className="prodes">
        <div className="item1"><p className="itemlink1">Dress under $50</p></div>
        <div className="item2"><p className="itemlink2">Shoes undre $30</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/fashion" className="nextpagelink">See all Deals</Link>
    </div>

  </div>

  {/* <!-- card 3 --> */}
  <div className="productbox">    
    <div className="headingdiv"><p className="topheading">New home arrivals under $50</p></div>
             <Link to="/essential" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg" alt="amz-img" className="inner-img"/>
     </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Kitchern & Dining</p></div>
        <div className="item2"><p className="itemlink2">Home Improvement</p></div>
   </div>

    <div className="simgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Decore</p></div>
        <div className="item2"><p className="itemlink2">Bedding & Bath</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/essential" className="nextpagelink">Shop the latest from Home</Link>
    </div>
  </div>

  {/* <!-- card 4 --> */}
  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Elevate your Electronics</p></div>
             <Link to="/electronic" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Headphones._SY116_CB549022351_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Tablets._SY116_CB549022351_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Headphones</p></div>
        <div className="item2"><p className="itemlink2">Tablets</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Gaming._SY116_CB549022351_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Speakers._SY116_CB549022351_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Gaming</p></div>
        <div className="item2"><p className="itemlink2">Speaker</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/electronic" className="nextpagelink">Discover more</Link>
    </div>
  </div>
</div>


{/* <!-- cardcontainer 2 --> */}
 {/* <!-- card 1 --> */}
<div className="cardcontainer">

  <div className="productbox">   
    <div className="headingdiv"><p className="topheading">Easy updates for elevated spaces</p></div>
             <Link to="/essential" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2023/Q2/Homepage/2023Q2_GW_EE_LaundryLuxe_D_Quad_186x116._SY116_CB594237035_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2023/Q2/Homepage/2023Q2_GW_EE_Kitchen_D_Quad_186x116._SY116_CB594237035_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Basket & Hampers</p></div>
        <div className="item2"><p className="itemlink2">Hardware</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2023/Q2/Homepage/2023Q2_GW_EE_AccentFurniture_D_Quad_186x116._SY116_CB594237035_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2023/Q2/Homepage/2023Q2_GW_EE_Hallway_D_Quad_186x116._SY116_CB594237035_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Accent furniture</p></div>
        <div className="item2"><p className="itemlink2">Wallpaper & Paint</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/essential" className="nextpagelink">Shop home product</Link>
    </div>
  </div>
   
  {/* <!-- card 2 --> */}
  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Toys for all ages</p></div>
          <Link to="/essential" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/RideOn._SY116_CB545223412_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/BuildingConstruction._SY116_CB545223412_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Ride on's</p></div>
        <div className="item2"><p className="itemlink2">Building & construction</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/DollDoll_House._SY116_CB545223412_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/SwimmingPool._SY116_CB545223412_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Dolls & Doll houses</p></div>
        <div className="item2"><p className="itemlink2">Swimming pools</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/essential" className="nextpagelink">See all</Link>
    </div>
  </div>

  {/* <!-- card 3 --> */}
  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Level up your beauty routine</p></div>
       <Link to="/cosmetic" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Make-up._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Brushes._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Makeup</p></div>
        <div className="item2"><p className="itemlink2">Brushes</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Sponges._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Mirrors._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Sponges</p></div>
        <div className="item2"><p className="itemlink2">Mirros</p></div>
   </div>

</Link>
    <div className="givenlink">
              <Link to="/cosmetic" className="nextpagelink">See more</Link>
    </div>
  </div>
  {/* <!-- card 4 --> */}
   <div className="productbox">
    <div className="headingdiv"><p className="topheading">Level up your gaming</p></div>
        <Link to="/essential" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NE_GamingWeek_Xbox_v2_1x._SY116_CB558844445_.jpg" alt="amz-img" className="inner-img"/>

    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">PC gaming</p></div>
        <div className="item2"><p className="itemlink2">Xbox</p></div>
   </div>

    <div className="simgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_SW_GamingWeek_Sony_v2_1x._SY116_CB558844445_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_SE_GamingWeek_Nintendo_v2_1x._SY116_CB558844445_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">PlayStation</p></div>
        <div className="item2"><p className="itemlink2">Nintendo Switch</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/essential" className="nextpagelink">Discover more</Link>
    </div>
  </div>
</div>

{/* <!-- cardcontainer 3 --> */}
 {/* <!-- card 1 --> */}
<div className="cardcontainer">
  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Deals on top categories</p></div>
           <Link to="/fashion" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Books._SY116_CB549022351_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Fashion._SY116_CB549022351_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Books</p></div>
        <div className="item2"><p className="itemlink2">Fashion</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Desktops._SY116_CB549022351_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Beauty._SY116_CB549022351_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">PC</p></div>
        <div className="item2"><p className="itemlink2">Beauty</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/fashion" className="nextpagelink">Home the latest in gamming</Link>
    </div>
  </div>
{/* <!-- card 2 --> */}
  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Score the top PCs & Accessories</p></div>
      <Link to="/electronic" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Desktops._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_laptop._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Desktop</p></div>
        <div className="item2"><p className="itemlink2">Laptop</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Hard_Drives._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Accessories._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Hard drive</p></div>
        <div className="item2"><p className="itemlink2">PC Accessories</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/electronic" className="nextpagelink">Discover more</Link>
    </div>
  </div>
{/* <!-- card 3 --> */}
  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Most-loved travel essantials</p></div>
         <Link to="/fashion" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Backpack_1x._SY116_CB566100767_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/TravelBag_1x._SY116_CB566100767_.jpg" alt="amz-img" className="inner-img"/>
      </div>

      <div className="prodes">
        <div className="item1"><p className="itemlink1">Backspack</p></div>
        <div className="item2"><p className="itemlink2">Suitcase</p></div>
   </div>

    <div className="simgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Accessories_1x._SY116_CB566100767_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Handbags_1x._SY116_CB566100767_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Accessories</p></div>
        <div className="item2"><p className="itemlink2">Handbags</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/fashion" className="nextpagelink">See more</Link>
    </div>
  </div>
{/* <!-- card 4 --> */}
  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Explore more in Sports</p></div>
        <Link to="/fashion" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Cycling_1X._SY116_CB563192628_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Running_1X._SY116_CB563192628_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Cycling</p></div>
        <div className="item2"><p className="itemlink2">Running</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/ExerciseAndFitness_1X._SY116_CB563192628_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Golf_1X._SY116_CB563192628_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Exercise & Fitness</p></div>
        <div className="item2"><p className="itemlink2">Golf</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/fashion" className="nextpagelink">Discover more</Link>
    </div>
  </div>
</div>
  
{/* <!-- cardcontainer 4 --> */}
 {/* <!-- card 1 --> */}
<div className="cardcontainer">

  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Refresh your space</p></div>
      <Link to="/essential" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="amz-img" className="inner-img"/>
   </div>
    
   <div className="prodes">
    <div className="item1"><p className="itemlink1">Dining</p></div>
    <div className="item2"><p className="itemlink2">Home</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="amz-img" className="inner-img"/>
    </div>
  
    <div className="prodes">
    <div className="item1"><p className="itemlink1">Kitchen</p></div>
    <div className="item2"><p className="itemlink2">Health & Beauty</p></div>
   </div>

</Link>
    <div className="givenlink">
        <Link to="/essential" className="nextpagelink">Discover more in Home</Link>
    </div>
  </div>
 
  {/* <!-- card 2 --> */}
  <div className="productbox">
        <div className="headingdiv"><p className="topheading">Gaming merchandies</p></div>
      <Link to="/fashion" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Apparl</p></div>
        <div className="item2"><p className="itemlink2">Hats</p></div>
   </div>

    <div className="simgbox">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg" alt="amz-img" className="inner-img"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg" alt="amz-img" className="inner-img"/>
    </div>

        <div className="prodes">
        <div className="item1"><p className="itemlink1">Action figures</p></div>
        <div className="item2"><p className="itemlink2">Mugs</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/fashion" className="nextpagelink">See all Deals</Link>
    </div>

  </div>

  {/* <!-- card 3 --> */}
  <div className="productbox">    
    <div className="headingdiv"><p className="topheading">Finds for Home</p></div>
      <Link to="/essential" className="nextpagelink">
    <div className="fimgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Kitchen._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Home_decor._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
     </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Kitchen</p></div>
        <div className="item2"><p className="itemlink2">Home Decore</p></div>
   </div>

    <div className="simgbox">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Dining._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Smart_home._SY116_CB558654384_.jpg" alt="amz-img" className="inner-img"/>

    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Dining</p></div>
        <div className="item2"><p className="itemlink2">Smart Home</p></div>
   </div>
</Link>
    <div className="givenlink">
              <Link to="/essential" className="nextpagelink">Shop the latest from Home</Link>
    </div>
  </div>

  {/* <!-- card 4 --> */}
  <div className="productbox">
    <div className="headingdiv"><p className="topheading">Most-loved watches</p></div>
      <Link to="/fashion" className="nextpagelink">
    <div className="fimgbox">
  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/WomenWatches_1x._SY116_CB564394432_.jpg" alt="amz-img" className="inner-img"/>
  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/MenWatches_1x._SY116_CB564394432_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Womens</p></div>
        <div className="item2"><p className="itemlink2">Mens</p></div>
   </div>

    <div className="simgbox">
<img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/GirlWatches_1x._SY116_CB564394432_.jpg" alt="amz-img" className="inner-img"/>
<img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/BoyWatches_1x._SY116_CB564394432_.jpg" alt="amz-img" className="inner-img"/>
    </div>

    <div className="prodes">
        <div className="item1"><p className="itemlink1">Girls</p></div>
        <div className="item2"><p className="itemlink2">Boys</p></div>
   </div>
    </Link>
    <div className="givenlink">
              <Link to="/fashion" className="nextpagelink">Discover more</Link>
    </div>
  </div>
</div>
</div>
<hr/>
        </div>
    )
}