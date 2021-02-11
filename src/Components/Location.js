import React, { Component } from 'react'
import axios from 'axios'

export default class About extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({
                    post: response.data.slice(0, 10)
                })
            })
    }

    render() {
        const { post } = this.state;
        const postList = post.length ? (
            post.map(post => {
                return (
                    <div key={post.id}>
                        <h2> {post.title} </h2>
                        <p>{post.body}</p>
                    </div>
                )
            })
        ) : (
                <p>No post yet</p>
                    )
       
        return (
        <div>
            <h1 className='center'>Location</h1>
            { postList }
        </div>
    
        )
    }
}




