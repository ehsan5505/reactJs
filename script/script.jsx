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

var Form = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var loginInput = ReactDOM.findDOMNode(this.refs.inputLogin);
        // add this to main login
        this.props.addCard(loginInput.value);
        
        loginInput.value = '';
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" ref="inputLogin" name="name" placeholder="Please enter the github username" />
                <input type="submit" value="Go!" />
            </form>
        )
    }
})

var Main = React.createClass({
    getInitialState: function(){
        return {logins : []}
    },
    addCard: function(addToLogin){
      this.setState({logins: this.state.logins.concat(addToLogin)})  
    },
    render: function(){
        var cards = this.state.logins.map(function(login){
            return (<div><Card login={login} /></div>)
        });
        return (<div><Form addCard={this.addCard} /><br/>{cards}</div>);
    }
})

ReactDOM.render(<Main />,document.getElementById('root'));