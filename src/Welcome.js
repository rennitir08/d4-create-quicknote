import React from 'react';
import Layout from './Layout';

class Welcome extends React.Component {
    render() {
        return <Layout>
            <div className="panel panel-default panel-shadow">
                 <div className="panel-body">
                    <div className="form-group">
                        <div className="alert alert-success text-center" role="alert">Welcome to QuickNote! Start by adding your first Note below!</div>
                        <label className="font" for="title">Title</label>
                        <input type="text" className="form-control" placeholder="QuickNote Title"/>
                    </div>
                    <div className="form-group">
                        <label className="font" for="imageurl">Image URL</label>
                        <input type="text" className="form-control" placeholder="URL must end in .gif, .jpg, .jpeg, or .png"/>
                    </div>
                    <textarea className="form-control" rows="3" placeholder="Enter QuickNote description here..."></textarea>
                    <br/>
                    <button type="button" className="btn btn-success btn-block font"><i className="fa fa-plus-circle" aria-hidden="true"></i> Add</button>
                 </div>
                </div>
            </Layout>
    }
}
export default Welcome;