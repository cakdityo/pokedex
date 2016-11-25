var React = require('React');

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Pok&#233;dex</a>
                    </div>
                </div>
            </nav>
        );
    }
}

module.exports = Navbar;