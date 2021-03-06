import React, {Component} from "react";
import {Session} from "meteor/session";
import {Tracker} from 'meteor/tracker'

export default class LinksListFilter extends Component {
    constructor(props){
        super(props);

        this.state = {
            showVisible: true
        }
    }

    componentDidMount(){
        this.tracker = Tracker.autorun(() => {
            this.setState({
                showVisible: Session.get('showVisible')
            })
        });
    }

    componentWillUnmount(){
        this.tracker.stop();
    }

    render() {
        return (
            <div>
                <label className="linksfilter checkbox-inline">
                    <input className="checkbox" type="checkbox" checked={!this.state.showVisible} onChange={(e) => {
                        Session.set('showVisible', !e.target.checked)
                    }}/>
                    Show Saved Links
                </label>
            </div>
        )
    }
}