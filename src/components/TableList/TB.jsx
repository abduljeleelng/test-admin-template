import React, { Component } from 'react';
//import './css/jquery.datatables.css';
import 'datatables.net-dt/css/jquery.dataTables.css';
var $ = require("jquery");
$.DataTable = require("datatables.net");
//require( 'datatables.net' )( window, $ );

export default class TB extends Component {
    componentDidMount(){
        console.log(this.el);
        this.$el=$(this.el)
        this.$el.dataTable(
            {
                data:this.props.data,
                /*columns: [
                    { title: "name" },
                    { title: "position"},
                    { title: "salary" },
                    { title: "start_date"},
                    { title: "office"},
                    { title: "extn"}
                  ],
                  */
                  columns: [
                    { title: "name", data: "name" },
                    { title: "position", data: "position" },
                    { title: "salary", data: "salary" },
                    { title: "start_date", data: "start_date" },
                    { title: "office", data: "office" },
                    { title: "extn", data: "extn" }
                  ],
            }
        )
    }
    componentWillUnmount(){
    }
    render() {
        return (
            <div>
                <table className="display" width="100%" ref={el=>this.el=el}>
                </table>
            </div>
        )
    }
}
