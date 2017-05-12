/**
 * @module home
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class extends Component {

    /**
     * @desc JSX
     */
    render() {
        return (
            <div className="home-page" temp=".0">
                <section className="header" temp=".0.1">
                    <div className="header-nav-container" temp=".0.1.0">
                        <div className="brand-name" temp=".0.1.0.0">
                            <a className="" href="#" temp=".0.1.0.0.0">
                                React Training
                            </a>
                        </div>
                        <nav className="header-nav" temp=".0.1.0.1">
                            <a className="" href="#" temp=".0.1.0.1.0">
                                Live
                            </a>
                            <a className="" href="#" temp=".0.1.0.1.1">
                                Online
                            </a>
                            <a href="#" temp=".0.1.0.1.2">
                                Open Source
                            </a>
                            <a href="#" temp=".0.1.0.1.3:$#contact">
                                Contact
                            </a>
                        </nav>
                    </div>
                    <div className="header-container header-banner" temp=".0.1.1">
                        <div className="logo" temp=".0.1.1.0">
                            <div className="logo-background" temp=".0.1.1.0.0">
                                <svg width="100%" height="100%" viewBox="0 0 403 359" version="1.1" temp=".0.1.1.0.0.0">
                                    <g temp=".0.1.1.0.0.0.0">
                                        <path d="M320.9,257.9 C316.3,234.6 306.9,208 293.4,179.6 C305.8,152.8 314.9,126.8 319.6,104 C329.6,55.6 322.5,17.8 301.1,5.5 C290.6,-0.6 276.3,-0.5 259.8,5.5 C244.6,11.1 227.8,21.7 211.2,36.1 C207.9,39 204.5,42.1 201.2,45.3 C199,43.2 196.8,41.1 194.5,39.1 C157.5,6.3 121.3,-6.4 99.9,5.9 C89.4,12 82.3,24.4 79.3,41.7 C76.6,57.6 77.3,77.5 81.6,99.1 C86.5,124 95.8,151.6 108.8,179.7 C95.5,208.5 86,236.8 81.2,262.1 C72.6,307.6 79.7,341.8 100.3,353.6 C105.7,356.7 112.2,358.3 119.5,358.3 C126.6,358.3 134.4,356.8 142.8,353.8 C158.9,348.1 176.4,337.3 193.4,322.4 C196.2,320 199,317.4 201.8,314.7 C205.4,318.2 209.1,321.5 212.7,324.6 C238.4,346.7 263.2,358.5 282.6,358.5 C289.7,358.5 296,356.9 301.5,353.8 C312.2,347.6 319.7,334.9 323,317.1 C326,300.7 325.3,280.2 320.9,257.9 L320.9,257.9 Z M265.7,21.8 C277.1,17.6 286.7,17.1 292.5,20.5 C298.7,24.1 303.3,33.1 305.5,46 C308,60.9 307,79.8 302.7,100.7 C299,118.7 292.4,138.8 283.4,159.9 C279.8,153 275.9,146 271.8,139 C253.7,107.7 233.4,79.7 213.1,57.8 C216.2,54.8 219.3,52 222.4,49.3 C237.5,36.2 252.5,26.7 265.7,21.8 L265.7,21.8 Z M201.7,290.5 C181.7,268.9 161.9,241.7 144.9,212.5 L144.9,212.5 C138.7,201.8 133,190.9 127.7,180.1 C132.9,169.2 138.6,158.3 144.8,147.7 L144.8,147.7 C161.8,118.3 181.2,91.5 201.1,70.1 C220.3,90.9 239.6,117.7 257,147.6 C263.3,158.6 269.1,169.3 274.3,179.8 C269.1,190.6 263.3,201.5 257,212.4 C239.2,243.4 220.3,270 201.7,290.5 L201.7,290.5 Z M98.5,96.1 C94.7,76.5 93.9,58.8 96.3,44.9 C98.4,32.9 102.7,24.4 108.6,21 C114.8,17.4 125,17.9 137.2,22.5 C151.4,27.8 167.3,38.1 183.2,52.2 C185.2,54 187.2,55.8 189.2,57.8 C168.2,80.3 147.8,108.3 130,139.1 C126,146 122.2,152.9 118.6,159.9 C109.2,137.5 102.3,115.8 98.5,96.1 L98.5,96.1 Z M108.8,339.1 C93.4,330.2 92.3,295.8 98,265.7 C101.8,245.9 108.9,223.4 118.6,200.3 C122.2,207.2 126,214.2 130,221.1 L130,221.1 C148,252.2 168.6,280.3 189.6,302.9 C187,305.4 184.5,307.7 181.9,309.9 C148.2,339.5 120.4,345.8 108.8,339.1 L108.8,339.1 Z M292.8,339.3 C277.4,348.2 247.1,332 223.8,311.9 C220.5,309 217.1,305.9 213.7,302.7 C233.4,281.1 253.3,253.4 272,220.9 C276.1,213.8 280,206.7 283.7,199.6 C293.5,221.9 300.4,242.7 304.1,261.3 C312.8,305.4 304.4,332.6 292.8,339.3 L292.8,339.3 Z"
                                        fill="#515151" temp=".0.1.1.0.0.0.0.0">
                                        </path>
                                        <path d="M301.1,5.6 C290.6,-0.5 276.3,-0.4 259.8,5.6 C244.6,11.2 227.8,21.8 211.2,36.2 C207.9,39.1 204.5,42.2 201.2,45.4 C199,43.3 196.8,41.2 194.5,39.2 C157.5,6.4 121.3,-6.3 99.9,6 C89.4,12.1 82.3,24.5 79.3,41.8 C76.6,57.7 77.3,77.6 81.6,99.2 C86.5,124.1 95.8,151.7 108.8,179.8 C111.9,186.5 115.2,193.3 118.7,200.1 C122.3,207 126.1,214 130.1,220.9 L130.1,220.9 C148.1,252 168.7,280.1 189.7,302.7 C193.7,307 197.7,311.1 201.7,314.9 C205.7,311.1 209.7,306.9 213.7,302.6 C233.4,281 253.3,253.3 272,220.8 C276.1,213.7 280,206.6 283.7,199.5 C287.2,192.8 290.4,186.2 293.5,179.6 C305.9,152.8 315,126.8 319.7,104 C329.6,55.7 322.5,18 301.1,5.6 L301.1,5.6 Z M302.8,100.7 C299.1,118.7 292.5,138.8 283.5,159.9 C280.7,166.5 277.7,173.1 274.4,179.8 C269.2,190.6 263.4,201.5 257.1,212.4 C239.2,243.5 220.3,270 201.7,290.5 C181.7,268.9 161.9,241.7 144.9,212.5 L144.9,212.5 C138.7,201.8 133,190.9 127.7,180.1 C124.4,173.3 121.4,166.6 118.6,159.9 C109.2,137.6 102.3,115.9 98.4,96.1 C94.6,76.5 93.8,58.8 96.2,44.9 C98.3,32.9 102.6,24.4 108.5,21 C114.7,17.4 124.9,17.9 137.1,22.5 C151.3,27.8 167.2,38.1 183.1,52.2 C185.1,54 187.1,55.8 189.1,57.8 C193.1,61.6 197.1,65.7 201.1,70.1 C205.1,65.8 209.1,61.7 213.1,57.8 C216.2,54.8 219.3,52 222.4,49.3 C237.5,36.2 252.4,26.7 265.7,21.8 C277.1,17.6 286.7,17.1 292.5,20.5 C298.7,24.1 303.3,33.1 305.5,46 C308,60.9 307.1,79.8 302.8,100.7 L302.8,100.7 Z"
                                        fill="#EB4949" temp=".0.1.1.0.0.0.0.1">
                                        </path>
                                        <circle fill="#FFFFFF" cx="201" cy="179.6" r="35.9" temp=".0.1.1.0.0.0.0.2">
                                        </circle>
                                        <path d="M201,262 C150.6,262 106.5,256 73.5,244.8 C52.1,237.5 33.9,227.8 21,216.7 C7.3,204.9 0,192.1 0,179.7 C0,156 26.1,132.7 69.8,117.5 C105.5,104.9 152.1,98 201,98 C248.9,98 295,104.8 330.6,117 C351.4,124.2 369,133.4 381.4,143.8 C394.9,155.1 402.1,167.5 402.1,179.6 C402.1,204.3 372.9,229.3 326,244.8 C292.7,255.9 248.3,262 201,262 L201,262 Z M201,115.2 C154.7,115.2 108.9,121.9 75.3,133.6 C46.3,143.7 17.1,161.9 17.1,179.6 C17.1,186.7 22.4,195.2 32.1,203.5 C43.4,213.2 59.6,221.8 79,228.4 C110.2,239.1 152.4,244.7 201,244.7 C246.5,244.7 289,238.9 320.6,228.5 C364.8,213.9 384.9,192.9 384.9,179.6 C384.9,172.8 379.7,164.8 370.4,157 C359.6,148 343.9,139.7 325,133.2 C291.1,121.6 247.1,115.2 201,115.2 L201,115.2 Z"
                                        fill="#FFFFFF" temp=".0.1.1.0.0.0.0.3">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <header className="header-banner-text" temp=".0.1.1.1">
                            <div className="header-banner-text-wrapper" temp=".0.1.1.1.0">
                                <div temp=".0.1.1.1.0.0">
                                    <div className="small-header-text" temp=".0.1.1.1.0.0.0">
                                        Proven, Expert
                                    </div>
                                    <div className="big-header-text" temp=".0.1.1.1.0.0.1">
                                        <span temp=".0.1.1.1.0.0.1.0">
                                            <span temp=".0.1.1.1.0.0.1.0.0">
                                                React Training
                                            </span>
                                            <sup temp=".0.1.1.1.0.0.1.0.1">
                                                ™
                                            </sup>
                                        </span>
                                    </div>
                                    <div className="tagline" temp=".0.1.1.1.0.0.2">
                                        From the creators of React Router
                                    </div>
                                </div>
                                <div className="cta-buttons-wrapper" temp=".0.1.1.1.0.1">
                                    <div temp=".0.1.1.1.0.1.0">
                                        <a className="header-button" href="#" temp=".0.1.1.1.0.1.0.$Attend a Workshop">
                                            Attend a Workshop
                                        </a>
                                        <a className="header-button" href="#" temp=".0.1.1.1.0.1.0.$View Online Courses">
                                            View Online Courses
                                        </a>
                                    </div>
                                    <div temp=".0.1.1.1.0.1.1">
                                        <a className="header-text-button" href="#" temp=".0.1.1.1.0.1.1.$Get Private Training">
                                            Get Private Training
                                        </a>
                                        <a className="header-text-button" href="#" temp=".0.1.1.1.0.1.1.$Host a Workshop">
                                            Host a Workshop
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                </section>
            </div>
        );
    }
}