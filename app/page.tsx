"use client"

import SearchBar from "@/components/SearchBar";

export default function Home() {
    return(
        <div>
            <header>
                <div id="navbar-top">
                    <a>Bingus' emporium</a>
                    <SearchBar></SearchBar>
                    <a>Login / Profile</a>
                    <a>Cart</a>
                </div>
                <div id="navbar-bottom">
                    <a>Computing</a>
                    <a>Phone</a>
                    <a>Tv & Sound</a>
                    <a>Gaming</a>
                    <a>Home & Leisure</a>
                    <a>Toys & Hobby</a>
                    <a>Clothing</a>
                </div>
            </header>
            <div id="noteworthy-sales">
                <a>Chosen ad below but big</a>
                <div id="noteworthy-sales-list">
                    <a>Left facing arrow</a>
                    <a>First ad small</a>
                    <a>Second ad small</a>
                    <a>Third ad small</a>
                    <a>Fourth ad small</a>
                    <a>Fifth ad small</a>
                    <a>Right facing arrow</a>
                </div>
            </div>
            <footer>
                <div id="footer-shortcuts">
                    <a>My Profile</a>
                    <a>My Orders</a>
                </div>
                <div id="footer-customer-support">
                    <a>Usually asked questions</a>
                    <a>Customer support</a>
                    <a>Contact us</a>
                    <a>Returns</a>
                </div>
                <div id="footer-about">
                    <a>About us</a>
                    <a>Open Positions</a>
                </div>
                <div id="footer-socials">
                    <a>Facebook</a>
                    <a>Twitter</a>
                    <a>Instagram</a>
                </div>
            </footer>
        </div>
    );
}