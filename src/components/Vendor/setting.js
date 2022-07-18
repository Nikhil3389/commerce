import React from "react";

const Setting = () => {
  return (
    <>
  
  <div class="sticky-header-next-sec  ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">Vendor Settings</h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            {/* <!-- ec-breadcrumb-list start --> */}
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item"><a href="/">Home</a></li>
                                <li class="ec-breadcrumb-item active">Settings</li>
                            </ul>
                            {/* <!-- ec-breadcrumb-list end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Ec breadcrumb end --> */}

    {/* <!-- Vendor setting section --> */}
    <section class="ec-page-content ec-vendor-uploads section-space-p">
        <div class="container">
            <div class="row">
                {/* <!-- Sidebar Area Start --> */}
                <div class="ec-shop-leftside ec-vendor-sidebar col-lg-3 col-md-12">
                    <div class="ec-sidebar-wrap">
                        {/* <!-- Sidebar Category Block --> */}
                        <div class="ec-sidebar-block">
                            <div class="ec-vendor-block">
                                <div class="ec-vendor-block-items">
                                    <ul>
                                        <li><a href="vendor-dashboard.html">Dashboard</a></li>
                                        <li><a href="vendor-profile.html">Public Profile</a></li>
                                        <li><a href="vendor-uploads.html">Uploads</a></li>
                                        <li><a href="track-order.html">Track Shipping</a></li>
                                        <li><a href="vendor-settings.html">Settings (Edit)</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ec-shop-rightside col-lg-9 col-md-12">
                    <div class="ec-vendor-dashboard-card ec-vendor-setting-card">
                        <div class="ec-vendor-card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="ec-vendor-block-profile">
                                        <div class="ec-vendor-block-img space-bottom-30">
                                            <div class="ec-vendor-block-bg">
                                                <a href="#" class="btn btn-lg btn-primary"
                                                    data-link-action="editmodal" title="Edit Detail"
                                                    data-bs-toggle="modal" data-bs-target="#edit_modal">Edit Detail</a>
                                            </div>
                                            <div class="ec-vendor-block-detail">
                                                <img class="v-img" src="assets/images/vendor/5.jpg" alt="vendor image"/>
                                                <h5 class="name">Neon Fashion</h5>
                                                <p>( Retail Business )</p>
                                            </div>
                                        </div>
                                        <div class="ec-vendor-block-about space-bottom-30">
                                            <h5>About Our Firm</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries.</p>
                                        </div>
                                        <h5>Account Information</h5>

                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <div class="ec-vendor-detail-block ec-vendor-block-email space-bottom-30">
                                                    <h6>E-mail address <a href="javasript:void(0)" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal"><img src="assets/images/icons/edit.svg"
                                                        class="svg_img pro_svg" alt="edit" /></a></h6>
                                                    <ul>
                                                        <li><strong>Email 1 : </strong><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="3d4e484d4d524f490c7d58455c4d505158135e5250">[email&#160;protected]</a></li>
                                                        <li><strong>Email 2 : </strong><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6d1e181d1d021f195f2d08150c1d000108430e0200">[email&#160;protected]</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="ec-vendor-detail-block ec-vendor-block-contact space-bottom-30">
                                                    <h6>Contact nubmer<a href="javasript:void(0)" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal"><img src="assets/images/icons/edit.svg"
                                                        class="svg_img pro_svg" alt="edit" /></a></h6>
                                                    <ul>
                                                        <li><strong>Phone Nubmer 1 : </strong>(123) 123 456 7890</li>
                                                        <li><strong>Phone Nubmer 2 : </strong>(123) 123 456 7890</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="ec-vendor-detail-block ec-vendor-block-address mar-b-30">
                                                    <h6>Address<a href="javasript:void(0)" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal"><img src="assets/images/icons/edit.svg"
                                                        class="svg_img pro_svg" alt="edit" /></a></h6>
                                                    <ul>
                                                        <li><strong>Office : </strong>123, 2150 Sycamore Street, dummy text of
                                                            the, San Jose, California - 95131.</li>
                                                        <li><strong>Home : </strong>123, 2150 Sycamore Street, dummy text of
                                                                the, San Jose, California - 95131.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="ec-vendor-detail-block ec-vendor-block-contact">
                                                    <h6>Tax Information<a href="javasript:void(0)" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal"><img src="assets/images/icons/edit.svg"
                                                        class="svg_img pro_svg" alt="edit" /></a></h6>
                                                    <ul>
                                                        <li><strong>Tax ID Name : </strong>DEMO 123 456 7890</li>
                                                        <li><strong>SSN OR EIN : </strong>DEMO 123 456 7890</li>
                                                        <li><strong>PAN NO : </strong>DEMO 123 456 7890</li>
                                                        <li><strong>Business Type : </strong>Individual</li>
                                                        <li><strong>Bank Name : </strong>KKCLPDEMO Barcelona BANK</li>
                                                        <li><strong>Bank Account No : </strong>DEMO ******* DEMO DIGIT</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>

  );
}
export default Setting;