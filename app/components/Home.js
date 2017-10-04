var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>

                <div className='github-friends'></div>

                <h1> Github Battle: Battle your friends... and stuff.</h1>
                <Link className='button' to='/battle'>
                    Battle
                </Link>
            </div>
        )
    }
}

module.exports = Home;