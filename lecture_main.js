import React, { Component } from "react";
import './lecture_main.css';
import 'font-awesome/css/font-awesome.min.css';
import "react-icons/fa";
import { MdLocationOn,MdDateRange,MdAccessTime,MdInsertInvitation,MdToday,MdChromeReaderMode,MdKeyboardArrowRight,MdSubdirectoryArrowRight } from "react-icons/md";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import posterr from './../assets/images/resized.jpg';
import point from "./../assets/images/point.png";


// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
class Lecture_main extends Component {
  state = {
    lecturestatus:"Past Lectures",
    regcount:"120",
    poster:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/a0/8de0c0730a11e8a983190cf39a362d/My_Photo_lowsize3-copy.jpg?auto=format%2Ccompress&dpr=1&w=200&h=200",
    organizer:"Infosys",
    geoinfo: {
      stdate:"13-2-2021",
      eddate:"13-2-2021",
      sttime:"6:00 pm",
      edtime:"7:30 pm",
      venue:"amriteshwari hall",
      certificate:"E-Certificate",

    },
    instructor: {
      name: "SAEED AGHABOZORGI",
      img:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/a0/8de0c0730a11e8a983190cf39a362d/My_Photo_lowsize3-copy.jpg?auto=format%2Ccompress&dpr=1&w=200&h=200",
      position: "Associate Professor in Data Science",
    },
    title:"Machine learning with python",
    about: {
      brief: "this course drives into the basics of machine learning and well known programming language pyhton",
      explained: "In this course we will be reviewing two \n main \n components.,sdbfvrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsrjkgbiwefjiweeijkGbisejk giikgjbeg"
    },
    syllabus: [
      "ML Introduction",
      "Pre Processing",
      "Feature Processing",
      "Modelling",
      "Q&A session",
    ],
    requirements: ["CSE, EEE, ECE", "2nd, 3rd", "None"],
  };


  render() {
    return (

      <div>
        <div id ="toplectureststbar" styles = {{
          alignItems:"horizontal",
          display: "flex",
          marginLeft:"2px",
          flexDirection: "row",
          padding:"3px",
          alignContent:"left",

        }}>


          <div
            id="lecturestat"
            style={{
              alignContent:"left",
              padding:"3px",
              fontSize:"18px",
              textAlign:"left",
              fontweight: "bold",
              color:"#797979",
              fontFamily:"Roboto",
              fontWeight:"bolder",
            }}
          >
            <MdSubdirectoryArrowRight/>   {this.state.lecturestatus}
          </div>
        </div>
        <div class="TOPDETAILHOLDER">
        <div
          id="title"
          style={{

            alignContent:"left",
            padding:"20px",
            fontSize:"40px",
            textAlign:"left",
            fontWeight:"bolder",
            

          }}
        >
          {this.state.title}
        </div>
        </div>
        <row>
        <div class="gradient_color " style={{
  // color: "rgb(203, 233, 31)",
  // colorRendering:"revert",
  backgroundImage: "linear-gradient(to right, yellow , red)",
  height:"200px"

}}>
            <div className="coulmn righttop">

  <div class="col-md-3 col-sm-6" >
        <div
          id="Organizer"
          style={{

            alignContent:"left",
            padding:"20px",
            fontSize:"33px",
            textAlign:"left",
            fontFamily:"Charcoal",
            fontWeight:"bold",
            color: "#525252",


          }}
        >
          Organizer :{this.state.organizer}
        </div>
        <div
          id="registrations"
          style={{

            alignContent:"left",
            padding:"20px",
            fontWeight:"bold",
            fontSize:"27px",
            textAlign:"left",
            color: "#525252",
            

          }}
        >
          {this.state.regcount} registrations
        </div>
        </div>
        </div>
        <div className="Poster" style={{
          marginLeft:"640px",
          marginTop:"-270px",
          alignItems:"left",
          // maxHeight:"50px",
          // height:"50px",
          // width:"200px",
        }}>
          
          <img className="poster" src={posterr} alt="Logo" />
        </div>
        </div>


        {/* </div> */}
        {/* <div id="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div> */}
        </row>
        <div id="navbar1">

      
        <Navbar style={{ borderBottom: "1px solid black", padding: "5px" }}>
          <Nav.Link href="#about" style={{ fontWeight: "bold", color: "#ffa600" }}>
            About
          </Nav.Link>
          <Nav.Link href="#instructors" style={{ color: "gray" }}>
            Instructor
          </Nav.Link>
          <Nav.Link href="#syllabus" style={{ color: "gray" }}>
            Syllabus
          </Nav.Link>
          <Nav.Link href="#requirements" style={{ color: "gray" }}>
            Requirements
          </Nav.Link>
        </Navbar>
        </div>
        <div class="row">
          <div class="column left_ltmn" style={{ color: "gray" }}>
            {/* <h2>Column 1</h2> */}
            <div
          id="about"
          style={{
            padding: "20px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#282c34",
            textAlign:  "left",

            
          }}
        >
          About this Lecture
        </div>
        <div
          id="aboutbrief"
          style={{
            textAlign:  "left",
            padding: "20px",
            fontSize: "20px",
            color: "#282c34",
          }}
        >
          {this.state.about.brief}
        </div>
        <div
          id="aboutDetailed"
          style={{
            textAlign:  "left",
            padding: "20px",
            fontSize: "20px",
            color: "#282c34",
          }}
        >
          {this.state.about.explained}
        </div>


          </div>
          <div class="column right_ltmn" >
  
            <ol class="fa-ul" style={{
                         textAlign:  "left",
                         padding: "20px",
                         fontSize: "20px",
                         color: "#fa9e35",
                         
            }}>
              <li>  </li>
              <li></li>

              <li className="geo_inf" ><MdToday style = {{color: "#525252"}} />    {this.state.geoinfo.stdate} - {this.state.geoinfo.eddate}</li>
              <li className="geo_inf" ><MdAccessTime style = {{color: "#525252"}}  />    {this.state.geoinfo.sttime} - {this.state.geoinfo.edtime}</li>
              <li className="geo_inf" ><MdLocationOn style = {{color: "#525252"}} />    {this.state.geoinfo.venue}</li>
              <li className="geo_inf" ><MdChromeReaderMode style = {{color: "#525252"}} />    {this.state.geoinfo.certificate}</li>
            </ol>
          </div>
        </div>
        
        <div
          id="instructors"
          style={{
            padding: "20px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#282c34",
            textAlign:  "left",
          }}
        >
          Instructors
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            class="rounded-circle z-depth-2"
            alt="50x50"
            src={this.state.instructor.img}
            style={{
              borderWidth: "1px",
              width: "80px",
              border: "1px solid #ffa600",
              padding: "2px",
              marginLeft: "20px",
            }}
            data-holder-rendered="true"
          />
          <div>
            <div
              style={{
                paddingLeft: "20px",
                fontSize: "25px",
                fontWeight: "bold",
                color: "#525252",
              }}
            >
              {this.state.instructor.name}
            </div>
            <div
              style={{
                paddingLeft: "20px",
                fontSize: "15px",
                color: "#282c34",
              }}
            >
              {this.state.instructor.position}
            </div>
          </div>
        </div>
        <div
          id="syllabus"
          style={{
            padding: "20px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#282c34",
            textAlign:  "left",
          }}
        >
          Syllabus
        </div>
        {this.state.syllabus.map((line) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: "5px",
            }}
          >
            <img src={point} style={{ height: "25px", paddingLeft: "40px" }} />
            <div style={{ paddingLeft: "20px", fontSize: "20px" }}>{line}</div>
          </div>
        ))}
        <div
          id="requirements"
          style={{
            padding: "20px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#282c34",
            textAlign:  "left",
          }}
        >
          Requirements
        </div>
        <div
          style={{
            paddingLeft: "40px",
            fontSize: "20px",
            color: "#282c34",
            textAlign:  "left",
          }}
        >
          Department : {this.state.requirements[0]}
        </div>
        <div
          style={{
            paddingLeft: "40px",
            fontSize: "20px",
            color: "#282c34",
            textAlign:  "left",
          }}
        >
          Year : {this.state.requirements[1]}
        </div>
        <div
          style={{
            paddingLeft: "40px",
            fontSize: "20px",
            color: "#282c34",
            textAlign:  "left",
          }}
        >
          Topics : {this.state.requirements[2]}
        </div>
      </div>
    );
  }
}

export default Lecture_main;