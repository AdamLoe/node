/**
 * Created by Adam on 7/28/2017.
 */
var React = require('react');
var Request = require('../request/Request.js');

class Approver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:      this.props.state.user,
            filters: {
                status: { value: 'In Process', options: [

                ]},
                property: { value: 'ALL', options: [

                ]},
                nextApprover: { value: this.props.state.user.name, options: [

                ]},
                period: { value: '1 Month', options: [

                ]}
            },
            requests: [
                {
                    requestId: 1107, requestName:'HVAC',
                    requesterName: 'John Liberty', requesterId: 17,
                    nextApproverName: 'Hannah Valentine', nextApproverId: 13,
                    status: 'In Process',  amount: 1900.00,
                    propertyName: 'Signature Place', propertyId: 103,
                    unitName: '81-081',  itemType: 'Financial',
                    requestorComment: '', createDate: '', lastEditDate: '',
                    attributes: [
                        ['Price', '2524'],['Shipping', '0'],
                        ['Tax', '0'], ['OtherCost', '0']
                    ],
                    comments: [
                        ['Date, text, user']
                    ]
                },
                {
                    requestId: 1108,
                    details: {
                        requestName: 'Washing Machine', status: 'In Process',
                        amount: 5100.00, property: 'Charleston Square',
                        unitName: '8675309', itemType: 'Sexy'
                    },
                    attributes: {

                    }
                }
            ]
        }
    }

    componentDidMount() {

    }

    render() {
        console.log('rendereing approver', this.props);
        return (
            <div className='ApproverContainer'>
                <div className='FilterContainer'>
                    <h1> Filter Container </h1>
                </div>
                <div className='ListContainer'>
                    {this.state.requests.map( request =>
                        <Request
                            state={request}
                            key={request.requestId}
                        />
                    )}
                </div>

            </div>
        )
    }
}

module.exports = Approver;