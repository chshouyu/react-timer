import React, { Component } from 'react';
import '../css/timer.css';

class Timer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            mill: 0,
            passedMill: 0,
            isRunning: false,
            counts: []
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.count = this.count.bind(this);
    }
    start () {
        this.setState({isRunning: true});
        let d = Date.now();
        this.timer = setInterval(() => {
            this.setState({mill: Date.now() - d + this.state.passedMill});
        }, 100);
    }
    stop () {
        clearInterval(this.timer);
        this.setState({isRunning: false, passedMill: this.state.mill});
    }
    reset () {
        this.setState({mill: 0, passedMill: 0, counts: []});
    }
    count () {
        const { counts, mill } = this.state;
        counts.unshift(mill);
        this.setState({counts: counts});
    }
    parseTime (mill) {
        let seconds = Math.floor(mill / 1000);
        let millSeconds = Math.floor(mill % 1000 / 100);
        let mins = Math.floor(seconds / 60) % 60;
        let secs = seconds % 60;
        let hours = Math.floor(seconds / 3600);
        return `${hours}:${mins}:${secs}.${millSeconds}`.replace(/(^|:)(\d)(?=\:|\.)/g, '$10$2');
    }
    render () {
        const { mill, isRunning, counts } = this.state;
        let ctrlText = isRunning ? '停止' : '开始';
        let ctrlHandler = isRunning ? this.stop : this.start;
        let countText = isRunning ? '计次' : '复位';
        let countHandler = isRunning ? this.count : this.reset;
        return (
            <div className="wrapper">
                <header>计时器</header>
                <div className="btns">
                    <input type="button" value={ctrlText} onClick={ctrlHandler} />
                    <input type="button" value={countText} onClick={countHandler} />
                </div>
                <div className="time-screen">{this.parseTime(mill)}</div>
                {counts.length > 0 &&
                    <ul className="counts-list">
                        {counts.map((count, index) => <li key={index}>{this.parseTime(count)}</li>)}
                    </ul>
                }
            </div>
        );
    }

}

export default Timer;