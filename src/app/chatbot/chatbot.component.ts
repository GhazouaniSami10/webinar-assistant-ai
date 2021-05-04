import { Component, OnInit } from '@angular/core';
declare const window: any;
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor() { }
  isShowDiv = true;
  ngOnInit(): void {
 
  var chatroom = new window.Chatroom({
    host: "http://localhost:5005",
    title: "Sara",
    container: document.querySelector(".chat-container"),
    welcomeMessage: "Hi! my name is Sara, i can assist you in : AI domain , tassahil informations and webinars details .",
    speechRecognition: "en-US",
    voiceLang: "en-US",
    height: "20px",
    fontSize: "10px"
  });
  chatroom.openChat();
}
toggleDisplayDiv() {
  this.isShowDiv = !this.isShowDiv;
  if (!this.isShowDiv) {
    document.getElementById("ico").className = "fa fa-times";
  } else {
    document.getElementById("ico").className = "fa fa-comments";
  }
}
}
