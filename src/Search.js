import React from 'react';
import Layout from './Layout';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

var store = require('store')

class Search extends React.Component {

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
        let notes = this.props.sharedSearch.map((notes, key) => <Search key={key} {...notes} />)
        return <div>
                <span><i className="fa fa-plus-circle fa-4x pull-left plus" aria-hidden="true" onClick={() => store.set('notes', {...notes})}></i></span>  
                    <div className="navbar-form navbar-left search-panel pull-right" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search your QuickNotes"/>
                    </div>
                        <button type="button" className="btn btn-success">Go!</button>
                </div>  
                <Layout>
                <ul>
                    {notes}
                </ul>
                </Layout>
            </div> 
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedSearch: redux.state.notes
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Search)