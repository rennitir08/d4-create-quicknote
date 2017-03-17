import React from 'react';

class Layout extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-sm-9 col-sm-offset-2">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

export default Layout;