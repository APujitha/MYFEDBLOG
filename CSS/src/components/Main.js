import React from "react";
import Sidebar from "./Sidebar";
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';


const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">


      <tr><h2 align="left"> APPLYING CSS TO HTNL </h2>
      <p>There are 3 ways to write CSS in our HTML file</p>
      <li>Inline CSS</li><li>Internal CSS</li><li>External CSS</li>
      </tr>

      <tr><h3 align="left" id="sample1">  Inline CSS</h3>
      <p>Before CSS this was the only way to apply style.Not an efficient way to write as it has a lot of redundancy.
         Self-contained,Uniquely applied on each element.The idea of separation of concerns was lost.</p>
         <li>Example:</li><br/>
         <img src={image4} alt="image4" id="sample2" align="left"/></tr>
        <tr><h3 align="left"> Internal CSS</h3>
         <p>With the help of style tag, we can apply styles within the HTML file.Redundancy is removed.
          But the idea of separation of concerns still lost.Uniquely applied on a single document</p>
          <img src={image5} alt="image5" align="left"/></tr>

        <tr><h3 align="left" id="sample3">  External CSS</h3>
        <p>With the help of <b>link</b> tag in the head tag, we can apply styles.Reference is added File saved with .css extension
            Redundancy is removed.The idea of separation of concerns is maintained.Uniquely applied to each document</p>
            <img src={image6} alt="image6" align="left"/></tr>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;