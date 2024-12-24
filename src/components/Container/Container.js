import React from 'react';
import PropTypes from 'prop-types';
import './Container.module.css';

const Container = ({ backgroundColor, margin, children }) => {
    const containerStyle = {
        backgroundColor: backgroundColor,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: margin,
    };

    return <div style={containerStyle}>{children}</div>;
};

Container.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Container.defaultProps = {
    backgroundColor: '#fff',
    backgroundColor: '0px',
};

export default Container;