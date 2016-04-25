var USER_DATA =  {
  name: "Christina Mitchell",
  username: "christinamitchell",
  image: "https://pbs.twimg.com/profile_images/671889846156132352/QwybCJky.jpg"
}


var React = require('react');
var ReactDOM = require('react-dom');

// fn(d) = v  not fn(d)= obj


// next three fn are helper components
var ProfilePic = React.createClass({
  render: function(){
    return <img src =  {this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render : function () {
    return (
      <div>
        <a href = {'https://www.github.com/' + this.props.username}>
        {this.props.username}
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render : function () {
    return (
      <div> {this.props.name} </div>
    )
  }
});

// encapsulate other compnents in this container component
var Avatar = React.createClass({
  render: function() {
    return (
      <div>

      </div>
    )
  }
})


// DEFINE - make a new component
    // from the react object has a create class property
var HelloWorld = React.createClass({
  render: function () { // render method - for UI return
    return (
      <div>Hello {this.props.name}!</div>
    )

  }
}); 


ReactDOM.render(<HelloWorld name="Christina" anySortOfData={29} />, document.getElementById('app'));

// where to render component to