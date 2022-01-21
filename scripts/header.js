function header() {
    return `
    <div class="header">
           <div class = "header-fixed">
        
        <div class="header1">
            Now accepting Wine & Beer orders (Select stores, Mumbai Only). Delivery timings 10.00 AM to 8:00 PM
            subject to
            verification of permit and age by delivery person. Age criteria 21+ for mild beer and 25+ for strong
            beer and wine.
        </div>

        <div class="header2">
            
            <div id="header_img">
                <img src="./Images/logosnew.png" alt="">
            </div>

            
            <div class="header_search_login">

                <div class="header_location">

                    <div class="head_contact" id="head_loc"><span>Store Locator</span></div>
                    <div class="head_contact"><span>Contact Us</span></div>
                </div>

                <div class="search_items">

                    <div class="search_pincode">
                        <input type="text" id="search_pincode" placeholder="pincode">
                    </div>
                    <div class="search_place">
                        <select name="" id="search_place">
                            <option value="ajeetgarh">Ajeetgarh</option>
                            <option value="ajnala">Ajnala</option>
                            <option value="akaltara">AKALTARA</option>
                            <option value="akhnoor">Akhnoor</option>
                        </select>
                        <span class="drop_down_arrow_header"></span>
                    </div>

                    <!-- search bar=========================== -->
                    <div class="search_panel">
                        <input type="text" id="search_panel_items" value="Start shoping.....">

                    </div>
                </div>

            </div>
            <!-- last part (login and sign up) -->
            <div>

                <div class="login_reg_wrap">
                    <div id="login_popup">
                        <!-- <a href="login.html"> <button id = "login_popup_btn" onclick="login_popup()">Login</button></a> -->
                        <!-- <button class="login_popup_btn1"
                            onclick="document.getElementById('login_popup_btn').style.display='block'" style="width:auto;">Login</button> -->


                        <button onclick="document.getElementById('id01').style.display='block'"
                            style="width:auto;">Login</button>

                        <div id="id01" class="modal">

                            <form class="modal-content animate">
                                <div class="imgcontainer">
                                    <span onclick="document.getElementById('id01').style.display='none'"
                                        class="close" title="Close Modal">&times;</span>
                                </div>

                                <div class="container">
                                    <input class="input-field" type="email" placeholder="Enter Email" required
                                        aria-placeholder="Email Address" id="login_mail">

                                    <input type="password" placeholder="Enter Password" required
                                        aria-placeholder="Passward" id="login_pass">


                                    <button type="submit" id="login_submit" onclick="user_login()">Login</button>
                                    <span class="forgot_paw">Forgot Passward ?</span>

                                </div>


                            </form>
                        </div>
                    </div>
                    <!-- register---------------------------------------------------------------------------------- -->
                    <div id="reg_popup">
                        <!-- <a href="register.html"> <button id="reg_popup_btn"
                                onclick="reg_popup()">Register</button></a> -->

                        <button onclick="document.getElementById('id02').style.display='block'"
                            style="width:auto;">Register</button>

                        <div id="id02" class="modal">

                            <form class="modal-content animate" onsubmit="signUp()">
                                <div class="imgcontainer">
                                    <span onclick="document.getElementById('id02').style.display='none'"
                                        class="close" title="Close Register form">&times;</span>
                                </div>

                                <div class="container2">

                                    <input type="tel" placeholder="Phone Number" id="reg_phone">

                                    <input type="text" placeholder="OTP" id="reg_otp">


                                    <input class="input-field" type="email" placeholder="Enter Email"
                                        id="reg_email">


                                    <input type="password" placeholder="Enter Password" id="reg_pass">


                                    <button id="register_submit" type="submit">Register</button>

                                </div>


                            </form>
                        </div>

                    </div>
                </div>
                <!-- ---------------------------cart and wish list-------------------------------- -->
                <div class="fav_cart_wrap">
                    <div class="fav_cart_wrap1">
                        <a href="favorites.html">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ_FCVbugYKGjPTecoRtyfo6CyPeuTcWYjg&usqp=CAU"
                                alt=""></a>
                    </div>

                    <div class="fav_cart_wrap2">
                        <a href="cart.html">
                            <img src="./Images/shopping-cart-xxl.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Shop by categories------------------------------ -->
        <!-- <div class="shop_by_categories"> -->
        <nav class="navbar">
            <ul class="lists">
                <li>
                    <div class="nav_category">
                        <div>SHOP BY CATEGORY</div>
                    </div>
                </li>
                <li>PAST PURCHASES</li>
                <li>GIFTING</li>
                <li>REWARDS</li>
                <li>BLOG</li>
                <li>OFFERS</li>
                <li>CONNOISSEUR'S SELECTION</li>
                <li>BOOK STORE VISIT</li>
            </ul>
        </nav>

        </div>`
}

export default header