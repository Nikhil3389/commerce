


// import axios from "axios";
import { React } from "react";

export default function Gallery() {

	return(
		<div className="">

<div id="layout" class="bg-#000000">
{/* <!-- Header--> */}

{/* <!-- End Header--> */}

{/* <!-- mainmenu--> */}


{/* <!-- End Mobile Nav--> */}

{/* <!-- Google Map --> */}
<div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96675.78523415352!2d-74.04718227108513!3d40.78141356385996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ed64fc3b013b%3A0xd813d2023b2ead16!2sNew+York+County%2C+Nueva+York%2C+EE.+UU.!5e0!3m2!1ses!2sco!4v1515849243841" width="600" height="450" frameborder="0"  allowfullscreen></iframe>
</div>
{/* <!-- End Google Map --> */}

{/* <!-- Section Area - Content Central --> */}
<section class="content-info">

    <div class="container">
        <div class="row paddings-mini">
            {/* <!-- Left Content --> */}
            <div class="col-md-4">
                <aside class="panel-box">
                    <div class="titles no-margin">
                        <h4>The Office</h4>
                    </div>
                    <div class="info-panel">
                        <address>
                          <strong>Sports Cup, Inc.</strong><br/>
                          <i class="fa fa-map-marker"></i><strong>Address: </strong> fa795 Folsom Ave, Suite 600<br/>
                          <i class="fa fa-plane"></i><strong>City: </strong>San Francisco, CA 94107<br/>
                          <i class="fa fa-phone"></i> <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                    </div>
                </aside>

                <aside class="panel-box">
                    <div class="titles no-margin">
                        <h4>Emails Contact</h4>
                    </div>
                    <div class="info-panel">
                        <address>
                          <i class="fa fa-envelope"></i><strong>Email:</strong><a href="mailto:#"> sales@sportscup.com</a><br/>
                          <i class="fa fa-envelope"></i><strong>Email:</strong><a href="mailto:#"> support@sportscup.com</a>
                        </address>
                    </div>
                </aside>
            </div>
            {/* <!-- End Left Content --> */}

            {/* <!-- Right Content --> */}
            <div class="col-md-8">
                <div class="panel-box">
                    <div class="titles no-margin">
                        <h4>Contact Form</h4>
                    </div>
                    <div class="info-panel">
                        {/* <!-- Form Contact --> */}
                        <form class="form-theme" action="php/send-mail.php">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Your name *</label>
                                    <input type="text"  required="required" value="" maxlength="100" class="form-control" name="Name" id="name"/>
                                </div>
                                <div class="col-md-6">
                                    <label>Your email address *</label>
                                    <input type="email"  required="required" value="" maxlength="100" class="form-control" name="Email" id="email"/>
                                </div>
                            </div>
                             <div class="row">
                                <div class="col-md-12">
                                    <label>Subject *</label>
                                    <input type="text"  required="required" value="" maxlength="100" class="form-control" name="Email" id="email"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label>Comment *</label>
                                    <textarea maxlength="5000" rows="10" class="form-control" name="message" required="required" ></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <input type="submit" value="Send Message" class="btn btn-lg btn-primary"/>
                                </div>
                            </div>
                        </form>
                        {/* <!-- End Form Contact --> */}
                        <div class="row">
                            <div class="col-md-12">
                                <div class="result"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Right Content --> */}
        </div>
    </div>
    

    {/* <!-- Newsletter --> */}
    <div class="section-newsletter">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center">
                        <h2>Enter your e-mail and <span class="text-resalt">subscribe</span> to our newsletter.</h2>
                        <p>Duis non lorem porta,  eros sit amet, tempor sem. Donec nunc arcu, semper a tempus et, consequat.</p>
                    </div>
                    <form id="newsletterForm" action="php/mailchip/newsletter-subscribe.php">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                    <input class="form-control" placeholder="Your Name" name="name"  type="text" required="required"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                    <input class="form-control" placeholder="Your  Email" name="email"  type="email" required="required"/>
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary" type="submit" name="subscribe" >SIGN UP</button>
                                     </span>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div id="result-newsletter"></div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Newsletter --> */}
</section>
{/* <!-- End Section Area -  Content Central --> */}

<div class="instagram-btn">
    <div class="btn-instagram">
        <i class="fa fa-instagram"></i>
        FOLLOW
        <a href="/" target="_blank">&#64;fifaworldcup</a>
    </div>
</div>

<div class="content-instagram">
    <div id="instafeed"></div>
</div>

{/* <!-- footer--> */}
<footer id="footer">
    {/* <!-- Footer Top--> */}
    <div class="top-footer">

        {/* <!-- Logo Footer--> */}
       <div class="col-lg-12">
            <div class="logo-footer">
                <h2>Sports Cup</h2>
            </div>
       </div>
        {/* <!-- End Logo Footer--> */}

        {/* <!-- Social Icons--> */}
        <ul class="social">
            <li>
                <div>
                    <a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#" class="twitter-icon">
                        <i class="fa fa-twitter"></i>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#" class="vimeo">
                        <i class="fa fa-vimeo-square"></i>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#" class="google-plus">
                        <i class="fa fa-google-plus"></i>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#" class="youtube">
                        <i class="fa fa-youtube"></i>
                    </a>
                </div>
            </li>
        </ul>
        {/* <!-- End Social Icons--> */}
    </div>
    {/* <!-- End Footer Top--> */}

    {/* <!-- Links Footer--> */}
    <div class="links-footer">
        <div class="container">
            <div class="row">

               {/* <!-- Column Links --> */}
               
                {/* <!-- End Column Links --> */}

                {/* <!-- Column Links --> */}
              
                {/* <!-- End Column Links --> */}

                {/* <!-- Column Links --> */}
              
                {/* <!-- End Column Links --> */}

                {/* <!-- Column Links --> */}
               
                {/* <!-- End Column Links --> */}

            </div>
        </div>
    </div>
    {/* <!-- End Links Footer--> */}

</footer>
{/* <!-- End footer--> */}

{/* <!-- footer Down--> */}
<div class="footer-down">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <p>&copy; 2022 LiveScore . All Rights Reserved</p>
            </div>
        </div>
    </div>
</div>
{/* <!-- footer Down--> */}
</div>


		</div>
        

	);
}