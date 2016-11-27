var React = require('react');
var { Link } = require('react-router');

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link to='/' className="navbar-brand">Pok&#233;dex</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

module.exports = Navbar;