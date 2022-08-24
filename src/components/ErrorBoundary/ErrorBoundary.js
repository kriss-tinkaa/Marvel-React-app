import React, { Component } from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage'

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    // static getDevivedStateFromError(error) {
    //     return {error: true}
    // }
    componentDidCatch(error, errorInfo) {
        //console.log(error, errorInfo) 
        this.setState({
            error: true
        })
    }

    render () {
        if(this.state.error) {
            return <ErrorMessage />
        }

        return this.props.children
    }
}
