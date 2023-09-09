/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Team = () => {
  return (
    <section id="team" className="section">
  <div className="container">
    {/* Start Row */}
    <div className="row">
      <div className="col-lg-12">
        <div className="team-text section-header text-center">  
          <div>   
            <h2 className="section-title">Team Members</h2>
            <div className="desc-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>  
              <p>eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
          </div> 
        </div>
      </div>
    </div>
    {/* End Row */}
    {/* Start Row */}
    <div className="row">
      {/* Start Col */}
      <div className="col-lg-3 col-md-6 col-xs-12">
        <div className="single-team">
          <div className="team-thumb">
            <img src="img/team/01.jpg" className="img-fluid" alt="" />
          </div>
          <div className="team-details">
            <div className="team-social-icons">
              <ul className="social-list">
                <li><a href="#"><i className="lni-facebook-filled" /></a></li>
                <li><a href="#"><i className="lni-twitter-filled" /></a></li>
                <li><a href="#"><i className="lni-google-plus" /></a></li>
              </ul>
            </div> 
            <div className="team-inner text-center">
              <h5 className="team-title">Patric Green</h5>
              <p>Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
      {/* Start Col */}
      {/* Start Col */}
      <div className="col-lg-3 col-md-6 col-xs-12">
        <div className="single-team">
          <div className="team-thumb">
            <img src="img/team/02.jpg" className="img-fluid" alt="" />
          </div>
          <div className="team-details">
            <div className="team-social-icons">
              <ul className="social-list">
                <li><a href="#"><i className="lni-facebook-filled" /></a></li>
                <li><a href="#"><i className="lni-twitter-filled" /></a></li>
                <li><a href="#"><i className="lni-google-plus" /></a></li>
              </ul>
            </div>
            <div className="team-inner text-center">
              <h5 className="team-title">Celina D Cruze</h5>
              <p>Front-end Developer</p>
            </div>
          </div>
        </div>
      </div>
      {/* Start Col */}
      {/* Start Col */}
      <div className="col-lg-3 col-md-6 col-xs-12">
        <div className="single-team">
          <div className="team-thumb">
            <img src="img/team/03.jpg" className="img-fluid" alt="" />
          </div>
          <div className="team-details">
            <div className="team-social-icons">
              <ul className="social-list">
                <li><a href="#"><i className="lni-facebook-filled" /></a></li>
                <li><a href="#"><i className="lni-twitter-filled" /></a></li>
                <li><a href="#"><i className="lni-google-plus" /></a></li>
              </ul>
            </div>
            <div className="team-inner text-center">
              <h5 className="team-title">Daryl Dixon</h5>
              <p>Content Writer</p>
            </div>
          </div>
        </div>
      </div>
      {/* Start Col */}
      {/* Start Col */}
      <div className="col-lg-3 col-md-6 col-xs-12">
        <div className="single-team">
          <div className="team-thumb">
            <img src="img/team/04.jpg" className="img-fluid" alt="" />
          </div>
          <div className="team-details">
            <div className="team-social-icons">
              <ul className="social-list">
                <li><a href="#"><i className="lni-facebook-filled" /></a></li>
                <li><a href="#"><i className="lni-twitter-filled" /></a></li>
                <li><a href="#"><i className="lni-google-plus" /></a></li>
              </ul>
            </div>
            <div className="team-inner text-center">
              <h5 className="team-title">Mark Parker</h5>
              <p>Support Engineer</p>
            </div>
          </div>
        </div>
      </div>
      {/* Start Col */}
    </div>
    {/* End Row */}
  </div>
</section>

  )
}

export default Team