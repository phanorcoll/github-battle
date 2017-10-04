var React = require('react');
var PropTypes = require('prop-types');

var styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px',
        margin: '20px 0px 0px 0px'
    },
    marginAnim:{
        margin: '50px'
    }
}

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }

    render() {
        return (
            <div style={styles.marginAnim}>
                <div className="loader"></div>
                <p style={styles.content}>
                    {this.state.text}
                </p>
            </div>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
};

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
};

module.exports = Loading;