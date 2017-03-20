import React from 'react';
import Layout from './Layout';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

var store = require('store')

class Welcome extends React.Component {

    constructor(props) {
        super(props)
        this.addNote = this.addNote.bind(this)

        this.state = {
            notes: []
        }
    }
        componentWillMount() {
        this.addNote()
    }
       addNote() {
        // Get notes from localStorage via store.js library
        let notes = store.get('notes')
        // If there were no notes yet
        if ( ! notes) {
            notes = []
        }
        // Push our state object onto the notes array
        notes.push(this.state)
        // Persist the notes array into the notes key in localStorage
        store.set('notes', notes)
        browserHistory.push('/Search')
    }
    render() {
         let notes = this.props.sharedWelcome.map((notes, key) => <Welcome key={key} {...notes} />)

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
                    <button type="button" className="btn btn-success btn-block font" onClick={() => store.set('notes', {...notes})}><i className="fa fa-plus-circle" aria-hidden="true"></i> Add</button>
                 </div>
                </div>
            </Layout>
    }
}
// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedWelcome: redux.state.notes
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Welcome)