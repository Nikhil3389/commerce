import React from "react";

const Dashboard = () => {
  return (
    <>




<div class="sticky-header-next-sec  ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">Vendor Dashboard</h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            {/* <!-- ec-breadcrumb-list start --> */}
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item"><a href="/">Home</a></li>
                                <li class="ec-breadcrumb-item active">Dashboard</li>
                            </ul>
                            {/* <!-- ec-breadcrumb-list end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Ec breadcrumb end --> */}

    {/* <!-- Vendor dashboard section --> */}
    <section class="ec-page-content ec-vendor-dashboard section-space-p">
        <div class="container">
            <div class="row">
                {/* <!-- Sidebar Area Start --> */}
                <div class="ec-shop-leftside ec-vendor-sidebar col-lg-3 col-md-12">
                    <div class="ec-sidebar-wrap">
                        {/* <!-- Sidebar Category Block --> */}
                        <div class="ec-sidebar-block">
                            <div class="ec-vendor-block">
                                <div class="ec-vendor-block-bg"></div>
                                <div class="ec-vendor-block-detail">
                                    <img class="v-img" src="assets/images/vendor/5.jpg" alt="vendor image"/>
                                    <h5>ActiBe Fashion</h5>
                                </div>
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
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="ec-vendor-dashboard-sort-card color-blue">
                                <h5>Products</h5>
                                <h3>625</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="ec-vendor-dashboard-sort-card color-pink">
                                <h5>Orders</h5>
                                <h3>56<span>/ Day</span></h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="ec-vendor-dashboard-sort-card color-green">
                                <h5>Earnings</h5>
                                <h3>₹56<span>/ Day</span></h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="ec-vendor-dashboard-sort-card color-orange">
                                <h5>Sales</h5>
                                <h3>550<span>/ Mo</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="ec-vendor-dashboard-card space-bottom-30">
                        <div class="ec-vendor-card-header">
                            <h5>Latest Order</h5>
                            <div class="ec-header-btn">
                                <a class="btn btn-lg btn-primary" href="#">View All</a>
                            </div>
                        </div>
                        <div class="ec-vendor-card-body">
                            <div class="ec-vendor-card-table">
                                <table class="table ec-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Method</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><span>225</span></th>
                                            <td><img class="prod-img" src="assets/images/product-image/1.jpg"
                                                    alt="product image"/></td>
                                            <td><span>Stylish baby shoes</span></td>
                                            <td><span>COD</span></td>
                                            <td><span>Pending</span></td>
                                            <td><span>₹320</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span>548</span></th>
                                            <td><img class="prod-img" src="assets/images/product-image/2.jpg"
                                                    alt="product image"/></td>
                                            <td><span>Sweat Pullover Hoodie</span></td>
                                            <td><span>Cash</span></td>
                                            <td><span>Pending</span></td>
                                            <td><span>₹214</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span>684</span></th>
                                            <td><img class="prod-img" src="assets/images/product-image/3.jpg"
                                                    alt="product image"/></td>
                                            <td><span>T-shirt for girl</span></td>
                                            <td><span>Ewallets</span></td>
                                            <td><span>On Way</span></td>
                                            <td><span>₹548</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span>987</span></th>
                                            <td><img class="prod-img" src="assets/images/product-image/4.jpg"
                                                    alt="product image"/></td>
                                            <td><span>Wool hat for men</span></td>
                                            <td><span>Bank Transfers</span></td>
                                            <td><span>Delivered</span></td>
                                            <td><span>₹200</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="ec-vendor-dashboard-card space-bottom-30">
                        <div class="ec-vendor-card-header">
                            <h5>Product List</h5>
                            <div class="ec-header-btn">
                                <a class="btn btn-lg btn-primary" href="#">View All</a>
                                <a class="btn btn-lg btn-primary" href="#">Add</a>
                            </div>
                        </div>
                        <div class="ec-vendor-card-body">
                            <div class="ec-vendor-card-table">
                                <table class="table ec-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><span>684</span></th>
                                            <td><img class="prod-img" src="assets/images/product-image/3.jpg"
                                                    alt="product image"/></td>
                                            <td><span>T-shirt for girl</span></td>
                                            <td><span>Ewallets</span></td>
                                            <td><span>On Way</span></td>
                                            <td><span>₹548</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span>225</span></th>
                                            <td><img class="prod-img" src="assets/images/product-image/1.jpg"
                                                    alt="product image"/></td>
                                            <td><span>Stylish baby shoes</span></td>
                                            <td><span>COD</span></td>
                                            <td><span>Pending</span></td>
                                            <td><span>₹320</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span>987</span></th>
                                            <td><img class="prod-img" src="assets/images/product-image/4.jpg"
                                                    alt="product image"/></td>
                                            <td><span>Wool hat for men</span></td>
                                            <td><span>Bank Transfers</span></td>
                                            <td><span>Delivered</span></td>
                                            <td><span>₹200</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span>548</span></th>
                                            <td><img class="prod-img" src="assets/images/product-image/2.jpg"
                                                    alt="product image"/></td>
                                            <td><span>Sweat Pullover Hoodie</span></td>
                                            <td><span>Cash</span></td>
                                            <td><span>Pending</span></td>
                                            <td><span>₹214</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="ec-vendor-dashboard-card">
                        <div class="ec-vendor-card-header">
                            <h5>Growth statastics</h5>
                            <div class="ec-header-btn">
                                <a class="btn btn-lg btn-primary" href="#">View All</a>
                            </div>
                        </div>
                        <div class="ec-vendor-card-body">
                            <canvas id="growthChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


  
    
    </>

  );
}
export default Dashboard;