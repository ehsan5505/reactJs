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
        var numStars = Math.floor(Math.random()*9)+1;
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
        return (
            <div id="answer-frame">
                <div className="well">
                    <blockquote>Sometime the act of love is hardest to commit -- Solace </blockquote>  
                </div>
            </div>
        )
    }
});

var NumberFrame = React.createClass({
    render: function(){
        var numbers = [];
        
        for(var i=1;i<=9;i++){
            numbers.push(<div className="number">{i}</div>);
        }
        
        return (<div id="number-frame" className="well">
            {numbers}
        </div>);
    }
})

var Game = React.createClass({
    render: function(){
        return (
            <div>
                <div className="clearfix">
                    <h1>Nine Play</h1>
                    <hr/>
                    <StartFrame />
                    <ButtonFrame />
                    <AnswerFrame />
                </div>
                <NumberFrame />
            </div>
        )
    }
})

ReactDOM.render(<Game />,document.getElementById("container"));