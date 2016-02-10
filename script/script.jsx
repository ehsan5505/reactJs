var Test = React.createClass({
    render: function(){
        return (
            <div>
                <h1>System running fine</h1>
            </div>
        )
    }
});

var StartFrame = React.createClass({
    render: function(){
        var stars = [];
        var numStars = this.props.stars;
        for(var i =0; i<numStars;i++){
            stars.push(<i className='fa fa-star'></i>);
        }
    return (
            <div id="start-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        )
    }
});

var ButtonFrame = React.createClass({
    render: function(){
        return (
            <div id="button-frame">
                <div className="button-frame">
                    <button className="btn btn-primary btn-lg">=</button>
                </div>
            </div>
        )
    }
});

var AnswerFrame = React.createClass({
    render: function(){
        var param = this.props;
        var test = param.numberSelect;
        var isolated = param.numberSelect.map(function(i){
            return (
            <span onClick={param.unclick}>{i}</span>
            )
        })
        return (
            <div id="answer-frame">
                <div className="well">
                    {isolated}  
                </div>
            </div>
        )
    }
});

var NumberFrame = React.createClass({
    render: function(){
        var numbers = [],className,
        clickEvent = this.props.clicker,
        selectedNumber=this.props.disableNumber;
        
        for(var i=1;i<=9;i++){
            className = 'number select-'+ (selectedNumber.indexOf(i)>=0);            
            numbers.push(<div className={className} onClick={clickEvent.bind(null,i)}>{i}</div>);
        }
        
        return (<div id="number-frame" className="well">
            {numbers}
        </div>);
    }
})

var Game = React.createClass({
    getInitialState: function(){
        return {selectedNumber: [],
            stars:Math.floor(Math.random()*9)+1
        };  
    },
    numberClicker: function(clickedNumber){
        if(this.state.selectedNumber.indexOf(clickedNumber)<0){
            this.setState({selectedNumber:this.state.selectedNumber.concat(clickedNumber)})
        }
    },
    unselectNumber: function(clickerNumber){
        var selectNumber = this.state.selectedNumber;
        var indexSelect = this.state.selectedNumber.indexOf(selectNumber);
        selectNumber.splice(indexSelect,1);
        this.setState({selectedNumber: selectNumber});
    },
    render: function(){
        return (
            <div>
                <div className="clearfix">
                    <h1>Nine Play</h1>
                    <hr/>
                    <StartFrame stars={this.state.stars}/>
                    <ButtonFrame />
                    <AnswerFrame numberSelect={this.state.selectedNumber} unclick={this.unselectNumber} />
                </div>
                <NumberFrame disableNumber={this.state.selectedNumber} clicker={this.numberClicker} />
            </div>
        )
    }
})

ReactDOM.render(<Game />,document.getElementById("container"));