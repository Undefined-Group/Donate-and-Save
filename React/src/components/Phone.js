import React, { Component } from 'react'

export default class Phone extends Component {
    render() {
        console.log('objecddddddddddddddddddddt')
        const { i, donor } = this.props
        return (
            <>
                <div className="modal fade" id={`mobileModal${i}`}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">
                                    ×
                            </button>
                            </div>
                            <div className="modal-body text-center">
                                <a className="display-4" href={`tel:+${donor.phone}`}>{`${donor.phone}`}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}