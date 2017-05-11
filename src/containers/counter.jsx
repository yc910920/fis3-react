/**
 * @module counter
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Progress, message } from 'antd';
import { Time } from '/src/components';
import { counterAction } from '/src/actions';



// injection into components store
@connect(
    state => state.counter,
    dispatch => bindActionCreators(counterAction, dispatch)
)
export default class extends Component {

    get methods() {
        const that = this;
        const { props } = this;
        return {
            
        };
    }


    componentDidMount() {
        this.props.fetchInterfaceTestAction(`?t=${Date.now()}`);
    }


    render() {
        const { props, methods } = this;
        return (
            <div style={{padding: 30}}>
                <div>
                    <Button size="small" disabled={props.count === props.countMax} onClick={props.addAction}> 加加加 </Button>&nbsp;&nbsp;
                    <Button size="small" disabled={props.count === props.countMin} onClick={props.subtractAction}> 剪剪剪 </Button>&nbsp;&nbsp;
                </div>
                <br />
                <Progress type="circle" width={80} percent={props.count} />
                <br />
                <br />
                <Time />
            </div>
        );
    }
}