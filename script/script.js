var Button = React.createClass({
    // getInitialState: function(){
    //     return { counter: 0 };
    // },
    // handleClick: function(){
    //     this.setState({ counter: this.state.counter+1 });
    // },
    localHandler: function(){
        this.props.localHandler(this.props.increment);
    },
    render: function(){
        return (<button onClick={this.localHandler}>{this.props.increment}</button>)
    }
});

var Result = React.createClass({
    render: function(){
        return (
            <div>{this.props.showInterval}</div>    
        )
    }
});

var Main = React.createClass({
    getInitialState: function(){
        return { counter: 0 };
    },
    handleClick: function(increment){
        this.setState({counter: this.state.counter+increment});  
    },
    render: function(){
        return (
            <div>
                <Button localHandler={this.handleClick} increment={1}/>
                <Button localHandler={this.handleClick} increment={5}/>
                <Button localHandler={this.handleClick} increment={10}/>
                <Button localHandler={this.handleClick} increment={100}/>
                <Result showInterval = {this.state.counter} />
            </div>
        )
    }
})



ReactDOM.render(<Main />,document.getElementById('root'));