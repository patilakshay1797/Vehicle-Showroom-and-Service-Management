import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const HomePage = () => {
  return (
    <div>

      <div className="w3l-bottom-grids">
        <div className="container-fluid px-0">
          <div className="bottomhny-grids-sec">
            <div className="bottomhny-1">
              <div className="bottomhny-gd-ingf">
                <h4>Satisfaction Guaranteed or Your Dent Back.</h4>
              </div>
            </div>
            <div className="bottomhny-1 bottomhny-2">
              <div className="bottomhny-gd-ingf">
                <h4>Caring For Your Car The Way You Would.</h4>
              </div>
            </div>
            <div className="bottomhny-1 bottomhny-1-img">
              <div className="bottomhny-gd-ingf">

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='row vehiclesServices'>
        <div className='row vehicleServiceSection1'>
          <div className='text-center divForVehicle col-6'>
            <Link to="/customer/availVehicleList" className='btn btn-danger buttonForVehicle'><h3 className='text-light'><strong>Vehicle in our Showroom</strong></h3></Link>
          </div>
          {/* <p classNameName='col-1'></p> */}
          <div className='text-center col-6'>
            <Link to="/customer/customerBookService" className='btn btn-danger'><h3 className='text-light'><strong>Book Car Service</strong></h3></Link>
          </div>
        </div>
      </div>
      <section className="w3l-content-3">

        <div className="content-3-mian ">
          <div className="container py-lg-5">
            <div className="content-info-in row">
              <div className="col-lg-6">
                <img src="assets/images/ab1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self  pl-lg-5">
                <div className="title-content text-left mb-2">
                  <h6 className="sub-title">Who We Are</h6>
                  <h3 className="hny-title"> We have 25 years
                    of experience in this field.</h3>
                </div>
                <p className="mt-3"></p>
                {/* <a href="about.html" className="btn btn-style btn-primary mt-md-5 mt-4">Read More</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-4">
        <div className="features4-block py-5">
          <div className="container py-lg-4">
            <div className="title-content text-center mb-lg-5 mt-4">
              <h6 className="sub-title">Why Choose Us</h6>
              <h3 className="hny-title">Great car service</h3>
              <p className="fea-para"></p>
            </div>
            <div className="row features4-grids text-left mt-lg-4">
              <div className="col-lg-3 col-md-6 features4-grid mt-4">
                <div className="features4-grid-inn">
                  <div className="img-featured">
                    <div className="ch-item ch-img-1">
                      <div className="ch-info-wrap">
                        <div className="ch-info">
                          <div className="ch-info-front ch-img-1"></div>
                          <div className="ch-info-back">
                            <h4>Carserving</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="features4-rightinfo">
                    <h5><a href="#URL">Tire and wheel</a></h5>
                    <p></p>

                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 features4-grid mt-4">
                <div className="features4-grid-inn">
                  <div className="img-featured">
                    <div className="ch-item ch-img-2">
                      <div className="ch-info-wrap">
                        <div className="ch-info">
                          <div className="ch-info-front ch-img-2"></div>
                          <div className="ch-info-back">
                            <h4>Carserving</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="features4-rightinfo">
                    <h5><a href="#URL">
                      Electrical system</a></h5>
                    <p></p>

                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 features4-grid mt-4">
                <div className="features4-grid-inn">
                  <div className="img-featured">
                    <div className="ch-item ch-img-3">
                      <div className="ch-info-wrap">
                        <div className="ch-info">
                          <div className="ch-info-front ch-img-3"></div>
                          <div className="ch-info-back">
                            <h4>Carserving</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="features4-rightinfo">
                    <h5><a href="#URL">
                      System service</a></h5>
                    <p></p>

                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 features4-grid mt-4">
                <div className="features4-grid-inn">
                  <div className="img-featured">
                    <div className="ch-item ch-img-4">
                      <div className="ch-info-wrap">
                        <div className="ch-info">
                          <div className="ch-info-front ch-img-4"></div>
                          <div className="ch-info-back">
                            <h4>Carserving</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="features4-rightinfo">
                    <h5><a href="#URL">
                      Engine diagnostics</a></h5>
                    <p></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div className="middle py-5">
        <div className="container py-xl-5 py-lg-3">
          <div className="welcome-left text-left py-3">
            <div className="title-content">
              <h6 className="sub-title">Call Us</h6>
              <h3 className="hny-title two mb-2">Imagine Your Car Feeling New Again</h3>
              <p>Questions? Give us a call today at <a href="tel:+(21) 255 999 8899">+(21)
                255 999 8899</a></p>

            </div>
            {/* <a href="/customer" className="btn btn-white mt-md-5 mt-4 mr-sm-2">Our Services</a> */}
            <a href="contactUs" className="btn btn-white-active btn-primary mt-md-5 mt-4">Contact Us</a>
          </div>
        </div>
      </div>

      <footer className="w3l-footer-66">
    <section className="footer-inner-main">
      <div className="footer-hny-grids py-5">
        <div className="container py-lg-4">
          <div className="text-txt">
            <div className="right-side">
              <div className="row sub-columns">
                <div className="col-lg-4 col-md-6 sub-one-left pr-lg-4">
                  <h2><a className="navbar-brand" href="index.html">
                    <span>C</span>arserving
                  </a></h2>
                  <p className="pr-lg-4 text-light"></p>
                  <div className="columns-2">
                    <ul className="social">
                      <li><a href="#facebook" ><span className="fa fa-facebook" aria-hidden="true"></span></a>
                      </li>
                      <li><a href="#linkedin"><span className="fa fa-linkedin" aria-hidden="true"></span></a>
                      </li>
                      <li><a href="#twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
                      </li>
                      <li><a href="#google"><span className="fa fa-google-plus" aria-hidden="true"></span></a>
                      </li>
                      <li><a href="#github"><span className="fa fa-github" aria-hidden="true"></span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 sub-one-left">
                  <h6>Our Services</h6>
    <div className="mid-footer-gd sub-two-right">

                    <ul>
                      <li><Link to="/aboutUs" className='text-light'><span className="fa fa-angle-double-right mr-2"></span> About</Link>
                      </li>
                      <li><Link to="/customer" className='text-light'><span className="fa fa-angle-double-right mr-2"></span> Services</Link>
                      </li>
                      <li><Link to="/customer" className='text-light'><span className="fa fa-angle-double-right mr-2"></span> Car Wash</Link>
                      </li>
                      <li><Link to="/customer" className='text-light'><span className="fa fa-angle-double-right mr-2"></span>Electrical system</Link>
                      </li>
                    </ul>
                    <ul>
                      <li><Link to="/customer" className='text-light'><span className="fa fa-angle-double-right mr-2"></span>Tire and wheel</Link>
                      </li>
                      <li><Link to="/customer" className='text-light'><span className="fa fa-angle-double-right mr-2"></span>Help
                          Orphan</Link>
                      </li>
                      <li><Link to="/customer" className='text-light'><span className="fa fa-angle-double-right mr-2"></span>Career</Link></li>
                      <li><Link to="/customer" className='text-light'><span className="fa fa-angle-double-right mr-2"></span>Contact US</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 sub-one-left">
                  <h6>Contact Info</h6>
                  <div className="">
                    <p className='text-light'>Address: Pune, Maharashtra, India, 411044</p>
                    <p className="my-3 text-light">Phone: <strong><a href="tel:+24160033999">+24 1600-33-999</a></strong></p>
                    <p className='text-light'>E-mail:<strong> <a href="mailto:info@example.com">VehicleManagement@example.com</a></strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="below-section">
        <div className="container">
          <div className="copyright-footer">
            <div className="columns text-lg-left">
              <p>© 2020 Carserving. All rights reserved | Designed by <a href="#">VMASM</a></p>
            </div>
            <ul className="columns text-lg-right">
              <li><a href="#">Privacy Policy</a>
              </li>
              <li>|</li>
              <li><a href="#">Terms Of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
  </footer>
    </div>
  )
}

export default HomePage