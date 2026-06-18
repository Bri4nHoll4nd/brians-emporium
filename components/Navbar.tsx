import SearchBar from "@/components/SearchBar";

//className={`navbar-top-searchbar-clear ${searchTerm == "" ? 'hidden' : ''}`} onClick={clearSearch}

type NavbarProps = {
    isLoggedIn: boolean
}

export default function Navbar({ isLoggedIn }: NavbarProps) {
    return (
        <header id="navbar">
            <div id="navbar-top">
                <a id="navbar-top-logo">Emporium</a>
                <SearchBar></SearchBar>
                {isLoggedIn ? (
                    <a id="navbar-top-profile">
                        <img src="/images/Profile.svg"
                        alt="Profile Logo"/>
                        <span>Profile</span>
                    </a>
                ) : (
                    <a id="navbar-top-login">
                        <img src="/images/Login.svg"
                        alt="Profile logo"/>
                        <span>Login</span>
                    </a>
                )}
                <a id="navbar-top-cart">
                    <img src="/images/Cart.svg"
                    alt="Cart logo"/>
                    <span>Cart</span>
                </a>
            </div>
            <div id="navbar-bottom">
                <button>Computing</button>
                <button>Phone</button>
                <button>Tv & Sound</button>
                <button>Gaming</button>
                <button>Home & Leisure</button>
                <button>Toys & Hobby</button>
                <button>Clothing</button>
            </div>
        </header>
    );
}