import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
        <section className="w3l-about-breadcrumb position-relative text-center">
    <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
      <div className="container py-lg-5 py-3">
        <h2 className="title">About Us</h2>
        <ul className="breadcrumbs-custom-path mt-2">
        <li><Link to='/' className='btn btn-link'>Home</Link> </li>
          <li className="active"><span className="fa fa-angle-double-right mx-2" aria-hidden="true"></span> About </li>
        </ul>
      </div>
    </div>
  </section>
  {/* <!-- //about breadcrumb --> */}
  <section className="w3l-content-6">
		
		<div className="content-6-mian py-5">
			<div className="container py-lg-5">
				<div className="content-info-in row">
					<div className="col-lg-6">
						<img src="assets/images/ab1.jpg" alt="" className="img-fluid" />
					</div>
					<div className="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self  pl-lg-4">
						<div className="title-content text-left mb-2">
							<h6 className="sub-title">About Company</h6>
							<h3 className="hny-title">We are qualified &
                of experience in this field</h3>
						</div>
						<p className="mt-3"></p>
						<a href="about.html" className="btn btn-style btn-primary mt-4">Read More</a>
					</div>
					<div className="col-lg-6 mt-5 about-right-faq align-self order2">
						<div className="title-content text-left mb-2">
							<h6 className="sub-title">Who We Are</h6>
							<h3 className="hny-title">Quality and perfomance</h3>
						</div>
						<p className="mt-3"></p>
						<a href="about.html" className="btn btn-style btn-primary mt-4">Read More</a>
					</div>
					<div className="col-lg-6 mt-5 pl-lg-4">
						<img src="assets/images/ab2.jpg" alt="" className="img-fluid" />
					</div>


				</div>
			</div>
            </div>
	</section>
	{/* <!-- //contact-form -->
  <!-- footer-66 --> */}
  <section className="w3l-content-4">
		
		<div className="content-4-main py-5">
			<div className="container py-lg-4">
				<div className="content-info-in row">

					<div className="content-right col-lg-6">
						<img src="assets/images/ab4.jpg" className="img-fluid" alt="" />
					</div>
					<div className="content-left col-lg-6 pl-lg-5">
						<h6 className="sub-title">
							Reable Features</h6>
						<h3 className="hny-title">
							All our technicians are equipped with the latest portable technology
</h3>
						<p className="mt-3"></p>
					</div>
				</div>
			</div>
		</div>
	</section>
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

export default AboutUs