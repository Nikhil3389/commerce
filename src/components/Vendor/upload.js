import React from "react";

const Upload = () => {
  return (
    <>
    <div class="sticky-header-next-sec  ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">Vendor Uploads</h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            {/* <!-- ec-breadcrumb-list start --> */}
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item"><a href="/">Home</a></li>
                                <li class="ec-breadcrumb-item active">Uploads</li>
                            </ul>
                            {/* <!-- ec-breadcrumb-list end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Ec breadcrumb end --> */}

    {/* <!-- Vendor upload section --> */}
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
                    <div class="ec-vendor-dashboard-card">
                        <div class="ec-vendor-card-body">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="ec-vendor-img-upload">
                                        <div class="ec-vendor-main-img">
                                            <div class="avatar-upload">
                                                <div class="avatar-edit">
                                                    <input type='file' id="imageUpload" class="ec-image-upload"
                                                        accept=".png, .jpg, .jpeg" />
                                                    <label for="imageUpload"><img src="assets/images/icons/edit.svg"
                                                            class="svg_img header_svg" alt="edit" /></label>
                                                </div>
                                                <div class="avatar-preview ec-preview">
                                                    <div class="imagePreview ec-div-preview">
                                                        <img class="ec-image-preview"
                                                            src="assets/images/product-image/vender-upload-preview.jpg"
                                                            alt="edit" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="thumb-upload-set colo-md-12">
                                                <div class="thumb-upload">
                                                    <div class="thumb-edit">
                                                        <input type='file' id="thumbUpload01" class="ec-image-upload"
                                                            accept=".png, .jpg, .jpeg" />
                                                        <label for="imageUpload"><img src="assets/images/icons/edit.svg"
                                                                class="svg_img header_svg" alt="edit" /></label>
                                                    </div>
                                                    <div class="thumb-preview ec-preview">
                                                        <div class="image-thumb-preview">
                                                            <img class="image-thumb-preview ec-image-preview"
                                                                src="assets/images/product-image/vender-upload-thumb-preview.jpg"
                                                                alt="edit" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="thumb-upload">
                                                    <div class="thumb-edit">
                                                        <input type='file' id="thumbUpload02" class="ec-image-upload"
                                                            accept=".png, .jpg, .jpeg" />
                                                        <label for="imageUpload"><img src="assets/images/icons/edit.svg"
                                                                class="svg_img header_svg" alt="edit" /></label>
                                                    </div>
                                                    <div class="thumb-preview ec-preview">
                                                        <div class="image-thumb-preview">
                                                            <img class="image-thumb-preview ec-image-preview"
                                                                src="assets/images/product-image/vender-upload-thumb-preview.jpg"
                                                                alt="edit" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="thumb-upload">
                                                    <div class="thumb-edit">
                                                        <input type='file' id="thumbUpload03" class="ec-image-upload"
                                                            accept=".png, .jpg, .jpeg" />
                                                        <label for="imageUpload"><img src="assets/images/icons/edit.svg"
                                                                class="svg_img header_svg" alt="edit" /></label>
                                                    </div>
                                                    <div class="thumb-preview ec-preview">
                                                        <div class="image-thumb-preview">
                                                            <img class="image-thumb-preview ec-image-preview"
                                                                src="assets/images/product-image/vender-upload-thumb-preview.jpg"
                                                                alt="edit" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="thumb-upload">
                                                    <div class="thumb-edit">
                                                        <input type='file' id="thumbUpload04" class="ec-image-upload"
                                                            accept=".png, .jpg, .jpeg" />
                                                        <label for="imageUpload"><img src="assets/images/icons/edit.svg"
                                                                class="svg_img header_svg" alt="edit" /></label>
                                                    </div>
                                                    <div class="thumb-preview ec-preview">
                                                        <div class="image-thumb-preview">
                                                            <img class="image-thumb-preview ec-image-preview"
                                                                src="assets/images/product-image/vender-upload-thumb-preview.jpg"
                                                                alt="edit" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="thumb-upload">
                                                    <div class="thumb-edit">
                                                        <input type='file' id="thumbUpload05" class="ec-image-upload"
                                                            accept=".png, .jpg, .jpeg" />
                                                        <label for="imageUpload"><img src="assets/images/icons/edit.svg"
                                                                class="svg_img header_svg" alt="edit" /></label>
                                                    </div>
                                                    <div class="thumb-preview ec-preview">
                                                        <div class="image-thumb-preview">
                                                            <img class="image-thumb-preview ec-image-preview"
                                                                src="assets/images/product-image/vender-upload-thumb-preview.jpg"
                                                                alt="edit" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="thumb-upload">
                                                    <div class="thumb-edit">
                                                        <input type='file' id="thumbUpload06" class="ec-image-upload"
                                                            accept=".png, .jpg, .jpeg" />
                                                        <label for="imageUpload"><img src="assets/images/icons/edit.svg"
                                                                class="svg_img header_svg" alt="edit" /></label>
                                                    </div>
                                                    <div class="thumb-preview ec-preview">
                                                        <div class="image-thumb-preview">
                                                            <img class="image-thumb-preview ec-image-preview"
                                                                src="assets/images/product-image/vender-upload-thumb-preview.jpg"
                                                                alt="edit" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="ec-vendor-upload-detail">
                                        <form class="row g-3">
                                            <div class="col-md-6">
                                                <label for="inputEmail4" class="form-label">Product name</label>
                                                <input type="text" class="form-control" id="inputEmail4"/>
                                            </div>
                                            <div class="col-md-6">
                                                <label  class="form-label">Select Categories</label>
                                                <select name="categories" id="Categories" class="form-select">
                                                    <optgroup label="Fashion">
                                                        <option value="t-shirt">T-shirt</option>
                                                        <option value="dress">Dress</option>
                                                    </optgroup>
                                                    <optgroup label="Furniture">
                                                        <option value="table">Table</option>
                                                        <option value="sofa">Sofa</option>
                                                    </optgroup>
                                                    <optgroup label="Electronic">
                                                        <option value="phone">I Phone</option>
                                                        <option value="laptop">Laptop</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="form-label">Sort Description</label>
                                                <textarea class="form-control"
                                                    rows="2"></textarea>
                                            </div>
                                            <div class="col-md-4 mb-25">
                                                <label class="form-label">Colors</label>
                                                <input type="color" class="form-control form-control-color"
                                                    id="exampleColorInput1" value="#ff6191" title="Choose your color"/>
                                                <input type="color" class="form-control form-control-color"
                                                    id="exampleColorInput2" value="#33317d" title="Choose your color"/>
                                                <input type="color" class="form-control form-control-color"
                                                    id="exampleColorInput3" value="#56d4b7" title="Choose your color"/>
                                                <input type="color" class="form-control form-control-color"
                                                    id="exampleColorInput4" value="#009688" title="Choose your color"/>
                                            </div>
                                            <div class="col-md-8 mb-25">
                                                <label class="form-label">Size</label>
                                                <div class="form-checkbox-box">
                                                    <div class="form-check form-check-inline">
                                                        <input type="checkbox" name="size1" value="size"/>
                                                        <label>S</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input type="checkbox" name="size1" value="size"/>
                                                        <label>M</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input type="checkbox" name="size1" value="size"/>
                                                        <label>L</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input type="checkbox" name="size1" value="size"/>
                                                        <label>XL</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input type="checkbox" name="size1" value="size"/>
                                                        <label>XXL</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">Price <span>( In USD
                                                        )</span></label>
                                                <input type="number" class="form-control" id="price1"/>
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">Quantity</label>
                                                <input type="number" class="form-control" id="quantity1"/>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="form-label">Ful Detail</label>
                                                <textarea class="form-control"
                                                    rows="4"></textarea>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="form-label">Product Tags <span>( Type and
                                                        make comma to separate tags )</span></label>
                                                <input type="text" class="form-control" id="group_tag" name="group_tag"
                                                    value="" placeholder="" data-role="tagsinput" />
                                            </div>
                                            <div class="col-md-12">
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
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
export default Upload;