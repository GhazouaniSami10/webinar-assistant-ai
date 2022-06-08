import { Component, OnInit, OnDestroy ,ElementRef } from '@angular/core';
import { HttpService } from '../http.service'
import { ExchangeService } from '../exchange.service'



declare const window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  message: string;
  isShow = false;
  isShowDiv = true;

  constructor(public http: HttpService, private shared: ExchangeService,private hostElement: ElementRef,
    ) { }

  ngOnInit() {
  var chatroom = new window.Chatroom({
    host: "https://rasaassistantai.herokuapp.com",
    title: "Sara",
    container: document.querySelector(".chat-container"),
    welcomeMessage: " Hi! my name is Sara, i can assist you in : AI domain , tassahil informations and webinars details .",
    speechRecognition: "en-US",
    voiceLang: "en-US",
    height: "20px",
    fontSize: "10px"
  });
  chatroom.openChat();
    window.scrollTo(0, 0);
   
  }
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
    if(this.isShowDiv)
      {document.getElementById("ico").className="fa fa-times";
    }else{
      document.getElementById("ico").className="fa fa-comments";
    }}

  scrol() {
    this.isShow = true;
  }

}
