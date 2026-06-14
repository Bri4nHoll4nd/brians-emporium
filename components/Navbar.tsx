import SearchBar from "@/components/SearchBar";

export default function Navbar() {
    return (
        <header id="navbar">
            <div id="navbar-top">
                <a>Brian's Emporium</a>
                <SearchBar></SearchBar>
                <a>Login / Profile</a>
                <a>Cart</a>
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