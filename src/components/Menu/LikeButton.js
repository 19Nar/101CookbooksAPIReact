import React from "react";

class LikeButton extends React.Component {
  state = {
    likes: 0,
  };
  render() {
    return (
      <button onClick={this.addLike} id={this.props.itemId}>
        Likes: {this.state.likes}
      </button>
    );
  }
  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount,
    });
  };
}

export default LikeButton;

/*
class LikeButton extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
		count : 0
		}
		this.go = this.go.bind(this)
	}

	go () {

		this.setState (  prevState => {
			return {
				count : prevState.count + 1
			}
		})
	} 

	render() {
		return (
			<div> 
				<center>
				<p> {this.state.count}  <button onClick= {this.go} > like! </button> </p>
				</center>
			</div>
		)
	}
}
*/
