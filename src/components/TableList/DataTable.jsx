import React from 'react';
//import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
const $ = require( 'jquery' );
require('datatables.net');
//require( 'jquery' );
//require( 'pdfmake' );
//require( 'datatables.net-dt' )();
///require( 'datatables.net-editor-dt' )();
//require( 'datatables.net-buttons-dt' )();
//require( 'datatables.net-buttons/js/buttons.colVis.js' )();
//require( 'datatables.net-buttons/js/buttons.html5.js' )();
//require( 'datatables.net-buttons/js/buttons.print.js' )();
//require( 'datatables.net-fixedheader-dt' )();
///require( 'datatables.net-keytable-dt' )();
//require( 'datatables.net-responsive-dt' )();
//require( 'datatables.net-rowgroup-dt' )();
//require( 'datatables.net-rowreorder-dt' )();
//require( 'datatables.net-scroller-dt' )();
//require( 'datatables.net-searchpanes-dt' )();
////require( 'datatables.net-select-dt' )();

export default class DataTable extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.dataTable = this.$el.DataTable({
            data: this.props.data,
            columns: this.props.columns,
            ...this.props.options
        });
    }

    componentWillUnmount() {
        this.dataTable.destroy(true);
    }

    render() {
        return <table ref={(el) => (this.el = el)} />;
    }
}