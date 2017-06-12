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
import { Time, Test } from '/src/components';
import { counterActions } from '/src/actions';



// injection into components store
@connect(
    state => state.counter,
    dispatch => bindActionCreators(counterActions, dispatch)
)
export default class extends Component {

    /**
     * @method 函数集
     * @return func coll
     */
    get methods() {
        const that = this;
        const { props } = this;
        return {

        };
    }


    /**
     * @desc 初次组件, 渲染完成
     */
    componentDidMount() {
        this.props.updateTimeAction();
        this.props.fetchInterfaceTestAction({name: 'shanchen', age: 22});
        this.props.fetchInterfaceTestAction2({name: 'shanchen', age: 22});
    }


    /**
     * @desc JSX
     */
    render() {
        const { props, methods } = this;
        return (
            <div className="module">
                <div>
                    <Button size="small" disabled={props.count === props.countMax} onClick={props.addAction}> 加加 </Button>&nbsp;&nbsp;
                    <Button size="small" disabled={props.count === props.countMin} onClick={props.subtractAction}> 剪剪 </Button>&nbsp;&nbsp;
                </div>
                <br />
                <br />
                <Progress type="circle" width={80} percent={props.count} />
                <br />
                <br />
                <div style={{position: 'relative', zIndex: 999}}>
                    <Test />
                    <Time />
                </div>
                <br />
                <br />
            </div>
        );
    }
}