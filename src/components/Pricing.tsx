import React from 'react'

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="container">
        {/* Start Row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="pricing-text section-header text-center">
              <div>
                <h2 className="section-title">Pricing Plans</h2>
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
        <div className="row pricing-tables">
          {/*  Start Col */}
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table text-center">
              <div className="pricing-details">
                <h3>Free</h3>
                <h1><span>$</span>00</h1>
                <ul>
                  <li>Free Instalation</li>
                  <li>500MB Storage</li>
                  <li>Single User</li>
                  <li>5 GB Bandwith</li>
                  <li>Minimal Features</li>
                  <li>No Dashboard</li>
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-border">Purchase</a>
              </div>
            </div>
          </div>
          {/*  End Col */}
          {/*  Start Col */}
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table text-center">
              <div className="pricing-details">
                <h3>standard</h3>
                <h1><span>$</span>19.99</h1>
                <ul>
                  <li>Free Instalation</li>
                  <li>2 GB Storage</li>
                  <li>Upto 2 users</li>
                  <li>50 GB Bandwith</li>
                  <li>All Features</li>
                  <li>Sales Dashboard</li>
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-common">Purchase</a>
              </div>
            </div>
          </div>
          {/*  End Col */}
          {/*  Start Col */}
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table text-center">
              <div className="pricing-details">
                <h3>Business</h3>
                <h1><span>$</span>29.99</h1>
                <ul>
                  <li>Free Instalation</li>
                  <li>5 GB Storage</li>
                  <li>Upto 4 users</li>
                  <li>100 GB Bandwith</li>
                  <li>All Features</li>
                  <li>Sales Dashboard</li>
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-border">Purchase</a>
              </div>
            </div>
          </div>
          {/*  End Col */}
        </div>
        {/* End Row */}
      </div>
    </section>

  )
}

export default Pricing