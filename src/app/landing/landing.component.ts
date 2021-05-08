import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ToastrService } from 'ngx-toastr';
import 'src/vendor/jitsi/external_api.js';
import { Subscription } from 'rxjs';
import { ExchangeService } from '../exchange.service'
declare const window: any;
declare var JitsiMeetExternalAPI: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  message = "";
  sirMail: string;
  ifram: any;
  madamMail: string;
  mail: string;
  title = 'sidenav';
  data1: any;
  domain: string = "beta.meet.jit.si";
  options: any;
  api: any;
  comlink = ""
  public stringLength = 30;
  public randomString: "";
  chatinput = "";
  chatoutput = "hellooo";
  id: any;
  sub: String;
  public data: any;
  messagerec: any;
  public sendingmes: any;
  subscription: Subscription;
  link = "here is the link";
  constructor(public http: HttpService, private toastr: ToastrService, private shared: ExchangeService) {

  }


  ngOnInit() {
    window.scrollTo(0, 0);
  }
  pickRandom() {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length)];
  }
  linkweb() {
    this.randomString = Array.apply(null, Array(this.stringLength)).map(this.pickRandom).join('');
    this.toastr.success(" Successfully generated", "Link")
    this.comlink = "https://" + this.domain + "/" + this.randomString;
    localStorage.setItem("link", this.comlink);

  }
  webinarfn() {
    if (this.comlink == "") {
      window.scrollTo(0, 0);
      this.toastr.warning(" Generate a link please", "Link")
    } else {
      this.options = {
        roomName: "HGFfEFR7FplSoQRDBCV98_CaPo",
        width: 1050,
        height: 550,
        parentNode: document.querySelector('#container1'),
        configOverwrite: { startWithAudioMuted: true },
        interfaceConfigOverwrite: { HIDE_DEEP_LINKING_LOGO: true, },
      }
      this.api = new JitsiMeetExternalAPI(this.domain, this.options);
      this.api.executeCommand('subject', this.sub);
      this.api.executeCommand('avatarUrl', 'http://st2.depositphotos.com/7755898/11914/v/450/depositphotos_119147314-stock-illustration-online-webinar-concept.jpg');
      this.api.addEventListeners({
        incomingMessage: (object: any) => {
          this.id = object.from;
          this.chatinput = object.message.toString();
          console.log('message :', this.chatinput);
          this.sendmes(this.id, this.chatinput);
        }
      });
    }
  }

  sendmes(id, mess) {
    this.data = {
      sender: id,
      message: mess
    };
    this.http.sendmessage(this.data).subscribe(
      res => {
        this.chatoutput = res[0].text;
        console.log("sara message", this.chatoutput);
        console.log('user id ', id);
        console.log('My id ', this.api._myUserID);
        this.api.executeCommand('overwriteConfig',
          {
            openBridgeChannel: true
          }
        );
        this.api.executeCommand('sendEndpointTextMessage', '', 'text');
        console.log("message  succefully sent")
      },
      err => {
        this.chatoutput = 'sorry !';
        console.log("sara message", this.chatoutput);
        this.api.executeCommand('sendEndpointTextMessage', '', this.data.chatoutput);
      }

    );

  }

  scrol() {
    document.documentElement.scrollTop = 350;

  }
  subject() {
    this.sub = (document.getElementById('sub') as HTMLInputElement).value;
    this.toastr.success("Successfully settled", "Subject")
  }
  mailing(person) {
    this.sirMail = (document.getElementById('sir') as HTMLInputElement).value;
    let user = {
      email: this.sirMail,
      link: this.comlink
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res: any = data;
        this.toastr.success("Successfully sent", "E-mail")
      },
      err => {
        console.log(err);
        this.toastr.error("Something wrong happened", "Error")
      }
    );
  }
}
