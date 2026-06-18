import { useState } from "react";

type searchBarProps = {
    items: any[], //should be items type not any
    onSearch: any
}

//export default function SearchBar(props: searchBarProps) {
export default function SearchBar() {
    //const {items, onSearch} = props;
    const [searchTerm, setSearchTerm] = useState("");

    function clearSearch(e: any) {
        e.preventDefault();

        setSearchTerm("");
        //handleSearch(e, true);
    }

    /* function handleSearch(e: any, clear: boolean) {
        e.preventDefault();

        let searchedItems: any[]; //should be items type not any

        //Might not work
        if (!clear) {
            searchedItems = items.filter(item =>
                item.userid.toLowerCase().includes(searchTerm.toLowerCase())
            )
        } else {
            searchedItems = items.filter(item =>
                item.userid.toLowerCase().includes("")
            )
        }

        onSearch(searchedItems);
    } */

    return (
        <form id="navbar-top-searchbar">
            <input id="navbar-top-searchbar-input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className={`navbar-top-searchbar-clear ${searchTerm == "" ? 'hidden' : ''}`} onClick={clearSearch}>x</button>
        </form>
    );
}