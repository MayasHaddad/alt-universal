import Alt from 'alt'
import React, { Component } from 'react'

const alt = new Alt()

class MessageActions {
  updateMessage(message) {
    return message
  }
}

const AltMessageActions = alt.createActions(MessageActions)

class MessageStore {
  constructor() {
    this.message = ''

    this.bindListeners({
      handleUpdateMessage: AltMessageActions.UPDATE_MESSAGE
    })
  }

  handleUpdateMessage(message) {
    this.message = message
  }
}

const AltMessageStore = alt.createStore(MessageStore, 'MessageStore')

class HelloWorld extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      message: ''
    }
  }

  onChange() {
    console.log(AltMessageStore.getState().message)
    this.setState({ message: AltMessageStore.getState().message })
  }

  componentDidMount() {
    AltMessageStore.listen(this.onChange)
  }

  render() {
    return <div> Hello World, or { this.state.message } </div>
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.updateMessage = this.updateMessage.bind(this)
  }

  updateMessage() {
    AltMessageActions.updateMessage(this.messageInput.value)
  }

  render() {
    return <div>
      <HelloWorld />
      <input type="text" onChange={ this.updateMessage } ref={(ref) => this.messageInput = ref } />
    </div>
  }
}
