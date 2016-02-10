var Card = React.createClass({
        getInitialState: function(){
            return {}
        },
        componentDidMount: function(){
            var component = this;
            $.get("https://api.github.com/users/"+ this.props.login,function(data){
                component.setState(data);
            })
        },
        render: function(){
            return (
                <div>
                <img src={this.state.avatar_url} width="80" />
                <h1>{this.state.login}</h1>
                <h3>{this.state.name}</h3>
                <h5>{this.state.company}</h5>
                <hr/>
                </div>
            )
        }
})

var Main = React.createClass({
    render: function(){
        return (
            <div>
            <Card login="Ehsan"/>
            <Card login="Ehsan5505"/>
            <Card login="Ehsan7"/>
            <Card login="Ehsan5"/>
            <Card login="NEX"/>
            <Card login="NEo"/>
            </div>
        )
    }
})

ReactDOM.render(<Main />,document.getElementById('root'));