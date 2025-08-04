import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        // state variable
        // this.state = {
        //     count: 1,
        //     star: 1,
        // }

        this.state = {
            userInfo: {
                name: "hvhh",
                location: "Chennai",
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/priyacha123");

        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    // componentDidMount() {
    //             this.timer = setInterval(() => {
    //         console.log("hiii");
    //     }, 1000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer);
    //     console.log("unmount");
        
    // }

    render() {
        // destructuring props
        // const { name, id } = this.props
        // const { count, star } = this.state;

        const { name, location, id } = this.state.userInfo;

        return(
            <>
            {/* <h1>Count: {this.state.count} </h1> */}
            {/* <h2>Name: {this.props.name}</h2> */}
            {/* <h1>Count: {count} </h1>
            <h1>Star: {star} </h1> */}
            {/* <button
            onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    star: this.state.star + 1
                })
            } }
            >Increase</button> */}
            <img src="https://avatars.githubusercontent.com/u/181547380?v=4" alt="" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>ID: {id}</h3>
            </>
        )
    }
}

export default User;