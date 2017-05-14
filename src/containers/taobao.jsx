/**
 * @module 淘宝网
 * @author 小虎牙
 * @desc DOME3
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Time, Test } from '/src/components';
import { counterAction } from '/src/actions';



// injection into components store
@connect(
    null,
    dispatch => bindActionCreators(counterAction, dispatch)
)
export default class extends Component {

    /**
     * @desc 组件完成渲染
     */
    componentDidMount() {
        // *** dispatch(action)
        this.props.updateTimeAction();
        
        // *** fetch.get
        // this.props.fetchInterfaceTestAction(`vui=vui`);
        
        // *** fetch.post
        // this.props.fetchInterfaceTestAction2({vui: 'vui'});
        
        // *** fetch.jsonp
        // this.props.fetchInterfaceTestAction3(`vui=vui`);
    }


    /**
     * @desc JSX
     */
    render() {
        return (
            <div className="module">
                <br />
                <br />
                <div style={{position: 'relative', zIndex: 999}}>
                    <Test />
                    <Time />
                </div>
                <br />
                <br />
                <iframe className="iframe" src="//taobao.com"></iframe>
            </div>
        );
    }
}