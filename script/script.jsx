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
        return (
            <div id="start-frame">
                <div className="well">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
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

var Game = React.createClass({
    render: function(){
        return (
            <div className="clearfix">
                <h1>Nine Play</h1>
                <hr/>
                <StartFrame />
                <ButtonFrame />
                <AnswerFrame />
            </div>
        )
    }
})

ReactDOM.render(<Game />,document.getElementById("container"));