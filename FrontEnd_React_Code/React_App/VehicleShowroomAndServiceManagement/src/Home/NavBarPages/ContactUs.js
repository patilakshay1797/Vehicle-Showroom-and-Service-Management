import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div>
        <section className="w3l-about-breadcrumb position-relative text-center">
    <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
      <div className="container py-lg-5 py-3">
        <h2 className="title">Contact Us</h2>
        <ul className="breadcrumbs-custom-path mt-2">
          <li><Link to='/' className='btn btn-link'>Home</Link> </li>
          <li className="active"><span className="fa fa-angle-double-right mx-2" aria-hidden="true"></span> Contact </li>
        </ul>
      </div>
    </div>
  </section>
  {/* <!-- //about breadcrumb --> */}
  <section className="w3l-contact-11">
		<div className="form-41-mian py-5">
			<div className="container py-lg-4">
			  <div className="row align-form-map">
				<div className="col-lg-6 contact-left pr-lg-4">
					<div className="partners">
					  <div className="cont-details">
						<div className="title-content text-left">
							<h6 className="sub-title">Contact Us</h6>
							<h3 className="hny-title">Get In Touch</h3>
						</div>
						<p className="mt-3 mb-4 pr-lg-5">Hi there, We are available 24/7 by fax, e-mail or by phone. Drop us line so we can talk
						  futher about that.</p>
						<h6 className="mb-4"> For more info or inquiry about our products project, and pricing please feel free to get in touch with us.</h6>
					  </div>
					  <div className="hours">
						<h6 className="mt-4">Email:</h6>
						<p> <a href="mailto:info@example.com">
							vehicleshowroom@example.com</a></p>
						<h6 className="mt-4">Address:</h6>
						<p> Pune, Maharashtra, India, 411044</p>
						<h6 className="mt-4">Contact:</h6>
						<p className="margin-top"><a href="tel:+(21) 255 999 8899">+(21)
							255 999 8899</a></p>
					  </div>
					</div>
				  </div>
				<div className="col-lg-6 form-inner-cont">
					<div className="title-content text-left">
						<h3 className="hny-title mb-lg-5 mb-4">Send Us A Message</h3>
					</div>
				  <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
					<div className="form-input">
					  <input type="text" name="w3lName" id="w3lName" placeholder="Name" />
					</div>
					<div className="row con-two">
					<div className="col-lg-6 form-input">
					  <input type="email" name="w3lSender" id="w3lSender" placeholder="Email" required="" />
					</div>
					<div className="col-lg-6 form-input">
						<input type="text" name="w3lSubect" placeholder="Subject" className="contact-input" />
					</div>
					</div>
					<div className="form-input">
					  <textarea placeholder="Message" name="w3lMessage" id="w3lMessage" required=""></textarea>
					</div>
					<div className="submit-button text-lg-right">
					   <button type="submit" className="btn btn-primary">Submit</button>
				    </div>
				  </form>
				</div>
			  </div>
			</div>
		  </div>
		  <div className="map">
			{/* <iframe
			  src="https://www.google.com/maps/embed/v1/place/key=AIzaSyBnb2IAEiBROdG368mfGaSuTdkkZOHomQQ&amp;q=Pune+Maharashtra+India"
			  frameBorder="0" allowFullScreen=""></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290029.7716956115!2d73.77113831190853!3d18.51589146352659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649262440144!5m2!1sen!2sin"
              frameBorder="0" allowFullScreen="">
              </iframe>
		  </div>
	  </section>
	{/* <!-- //contact-form -->
  <!-- footer-66 --> */}
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
      {/* <!-- copyright -->
      <!-- move top --> */}
      {/* <button onclick="topFunction()" id="movetop" title="Go to top">
        <span className="fa fa-long-arrow-up" aria-hidden="true"></span>
      </button> */}
      </section>
  </footer>
    </div>

  )
}

export default ContactUs