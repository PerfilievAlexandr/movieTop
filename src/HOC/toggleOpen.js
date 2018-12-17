import React, {Component}  from 'react'

export default (WrappedComponent) => {
    return class DecoratedComponent extends Component {
        state = {
            open: false
        }

        render(){
            return (
                <WrappedComponent 
                    {...this.props}
                    {...this.state}
                    onChange = {this.onChange}
                />
            )
        }

        onChange = (open) => {
            this.setState({
                open: !this.state.open 
            })
        }
    } 
}
