import React from 'react';
import Layout from './Layout';
import { browserHistory } from 'react-router'

class Newnote extends React.Component {
      
    render() {

        return <Layout>
            <div className="panel panel-default panel-shadow">
                 <div className="panel-body">
                    <div className="form-group">
                        <label className="font">Title</label>
                        <input type="text" className="form-control" placeholder="QuickNote Title"/>
                    </div>
                    <div className="form-group">
                        <label className="font" >Image URL</label>
                        <input type="text" className="form-control" placeholder="URL must end in .gif, .jpg, .jpeg, or .png"/>
                    </div>
                    <textarea className="form-control" rows="3" placeholder="Enter QuickNote description here..."></textarea>
                    <br/>
                    <button type="button" className="btn btn-success btn-block font" onClick={() => browserHistory.push('/Search')}><i className="fa fa-plus-circle" aria-hidden="true"></i> Add</button>
                 </div>
                </div>
            </Layout>
    }
}


export default Newnote;
