/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from '/src/constants';
import { addAction, subtractAction, fetchInterfaceTestAction } from '/src/actions/counter';
import { Button, Progress, message } from 'antd';



// connect: injection into components store