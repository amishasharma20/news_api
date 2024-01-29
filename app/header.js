function Header() {
	return(
		<>
            <div className="row1">
                <div className="News">
                    <p>NewsAPI  Org</p>
                </div>
            </div>
            
            <div class="container">
                <div class="center">
                    <input type="text" id="search-bar" placeholder="Search" />
                    <button id="search-button">Go</button>
                </div>
            </div>
            
            <div className="row2"></div>
            	
		</>
    );
};

export default Header;

