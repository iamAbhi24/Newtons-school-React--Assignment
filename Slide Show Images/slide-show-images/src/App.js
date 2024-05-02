import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  //link of all images
  const arrSrc = ["https://d3dyfaf3iutrxo.cloudfront.net/general/upload/ce0358ee7bb244899f5caa36c93c028f.png",
    " https://d3dyfaf3iutrxo.cloudfront.net/general/upload/e65a75f93fa64ca196feaeb675f15ee6.png",
    " https://d3dyfaf3iutrxo.cloudfront.net/general/upload/b9115bf0d19347e0bc82017cc2bf10c3.png",
    " https://d3dyfaf3iutrxo.cloudfront.net/general/upload/932be30e425b4632b812174cb7d8312c.png"];

    const [order,setOrder]=useState(0);
    // Get triger when click on previous button
    function handlePrevClick(){
      setOrder((order===0)?arrSrc.length-1:order-1)
    }
    
    // Get triger when click on next button
    function handleNextClick(){
      setOrder((order===arrSrc.length-1)? 0 :order+1)
    }
    
  return (
    <div className="App">
      <button className="prev-button" onClick={handlePrevClick}>Previous</button>
      <img src={arrSrc[order]} alt="img" style={{ width: "500px", height:"500px"  }} />
      <button className="next-button" onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default App;
