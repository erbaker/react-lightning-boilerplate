import React, { Component } from 'react';
import LCC from 'lightning-container';

import './App.css';

interface IAppState { exampleMessageValue: string; }
interface Props {}

class App extends React.Component<Props, IAppState> {
    state: IAppState = {
        exampleMessageValue: "Hello from React!"
      };
    
    componentDidMount(){
        LCC.addMessageHandler(this.messageRecievedHandler);
    }
    
    messageRecievedHandler(msg){
        const { name, value } = msg;
        
        console.log("Messaged received.");
        console.log(`Message name: ${name}`);
        console.log(`Message value: ${value}`);

        switch (name) {
            case "example":
                console.log('Handle Example Messgage')
                break;
            default:
                console.log('Do Nothing');
        }
    }
    
    sendMessage(msg){
        // Message format should be an object like { name: "messageName", value: "message value"}
        LCC.sendMessage(msg);
    }
    
    sendMessageExample(){
        // You can wrap the send message function to easily send specific message types.
        
        this.sendMessage(
            {
                name: "example",
                value: this.state.exampleMessageValue
            }
        );
    }
    
    render(){
        return (
            <div>
                <p>A React Component!</p>
                <button onClick={this.sendMessageExample.bind(this)}>A Button that sends a specific exampleMessage</button>
            </div>
        );
    }
}

export default App;