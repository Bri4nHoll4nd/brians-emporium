"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const router = useRouter();

    return(
        <div id="main-page-body">
            <Navbar isLoggedIn={isLoggedIn}></Navbar>
            <main>
                <div id="noteworthy-sales">
                    <a>Chosen ad below but big</a>
                    <div id="noteworthy-sales-list">
                        <button>&larr;</button>
                        <button>First ad small</button>
                        <button>Second ad small</button>
                        <button>Third ad small</button>
                        <button>Fourth ad small</button>
                        <button>Fifth ad small</button>
                        <button>&rarr;</button>
                    </div>
                </div>
                <footer>
                    <div className="footer-column">
                        <div className="footer-column-content">
                            <h3>Shortcuts</h3>
                            <a>My Profile</a>
                            <a>My Orders</a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-content">
                            <h3>Help and Support</h3>
                            <a>Usually asked questions</a>
                            <a>Customer support</a>
                            <a>Contact us</a>
                            <a>Returns</a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-content">
                            <h3>Information</h3>
                            <a>About us</a>
                            <a>Open Positions</a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-content">
                            <h3>Socials</h3>
                            <a>Facebook</a>
                            <a>Twitter</a>
                            <a>Instagram</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}