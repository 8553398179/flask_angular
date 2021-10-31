import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TASKPVP';
  name: String;
  Data= {}

  constructor(private http:HttpClient){}
  ngOnInit()
  {
	  this.http.get('https://flaskpvp11.herokuapp.com/opinion')
	  .subscribe((data)=>{
      this.Data = data;
		  console.warn(this.Data)
      // for (var i in this.Data) {
        // console.log(this.Data[i].nm)
     
      // console.warn(this.Data);
      
	  })
  }
  onSubmit(dataPost){
      console.warn(dataPost)
      this.http.post("https://flaskpvp11.herokuapp.com/opinion",dataPost)
      .subscribe((data)=>{
      this.Data =data;  
      console.warn(data)})
    }
// this.http.post("https://flask5pvp.herokuapp.com/login",dataPost)
//   postData(){
//   console.log(this.name) ;
//   let url ="http://localhost:5000/login";
// "http://httpbin.org/post"
//   // let url = "https://flask5pvp.herokuapp.com/login";
//   this.http.post(url,{nm:this.name})
//   .toPromise().then((data: any)=>{
//   console.log(data)

// })

  }





