/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Blog = () => {
  return (
    <section id="blog" className="section">
      {/* Container Starts */}
      <div className="container">
        {/* Start Row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-text section-header text-center">
              <div>
                <h2 className="section-title">Latest Blog Posts</h2>
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
          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            {/* Blog Item Starts */}
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="/">
                  <img src="img/blog/01.jpg" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3><a href="/">How Slick Will Transform  <br />Your Business</a></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <a href="/" className="read-more">5 Min read</a>
              </div>
              <div className="author">
                <span className="name"><i className="lni-user" /><a href="/">Posted by Admin</a></span>
                <span className="date float-right"><i className="lni-calendar" /><a href="/">10 April, 2020</a></span>
              </div>
            </div>
            {/* Blog Item Wrapper Ends*/}
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            {/* Blog Item Starts */}
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="/">
                  <img src="img/blog/02.jpg" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3><a href="/">Growth Techniques for  <br />New Startups</a></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <a href="/" className="read-more">5 Min read</a>
              </div>
              <div className="author">
                <span className="name"><i className="lni-user" /><a href="/">Posted by Admin</a></span>
                <span className="date float-right"><i className="lni-calendar" /><a href="/">10 April, 2020</a></span>
              </div>
            </div>
            {/* Blog Item Wrapper Ends*/}
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            {/* Blog Item Starts */}
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="/">
                  <img src="img/blog/03.jpg" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3><a href="/">Writing Professional <br />Emails to Customers</a></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <a href="/" className="read-more">5 Min read</a>
              </div>
              <div className="author">
                <span className="name"><i className="lni-user" /><a href="/">Posted by Admin</a></span>
                <span className="date float-right"><i className="lni-calendar" /><a href="/">10 April, 2020</a></span>
              </div>
            </div>
            {/* Blog Item Wrapper Ends*/}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
    </section>

  )
}

export default Blog