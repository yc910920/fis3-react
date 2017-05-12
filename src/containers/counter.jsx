/**
 * @module counter
 * @author 小虎牙
 * @desc DOME1
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

    /**
     * @method 事件集
     * @return event coll
     */
    get methods() {
        const that = this;
        const { props } = this;
        return {
            
        };
    }


    /**
     * @desc 组件完成渲染
     */
    componentDidMount() {
        this.props.updateTimeAction();
        this.props.updateTimeAction2({vui: 'vui'});
        this.props.fetchInterfaceTestAction(`?vui=vui`);
    }


    /**
     * @desc JSX
     */
    render() {
        const { props, methods } = this;
        return (
            <div className="module-wrap">
                <div>
                    <Button size="small" disabled={props.count === props.countMax} onClick={props.addAction}> 加加 </Button>&nbsp;&nbsp;
                    <Button size="small" disabled={props.count === props.countMin} onClick={props.subtractAction}> 剪剪 </Button>&nbsp;&nbsp;
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