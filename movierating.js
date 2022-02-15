import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";


Sentry.init({
    dsn: "https://39a6be02fe4944949e5d5eb81ba2aa51@o1142889.ingest.sentry.io/6201912",
    integrations: [new BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });


  // Sentry.init({
  //   dsn: "https://8d57d08050e24e449d3d047fccc8f897@o1142889.ingest.sentry.io/6202008",
  //   integrations: [new BrowserTracing()],
  
  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //   tracesSampleRate: 1.0,
  // });



  try {
    console.log("entering try block");
    throw "thrown message";
    console.log("this message is never seen");
  }
  catch (e) {
    console.log("entering catch block");
    console.log(e);
    console.log("leaving catch block");
  }

// targetting function 
$(document).ready(function(){

    // to get access to the api
     var apikey = "b0eab57c"

     //targetting form by id
     $("#movieform").submit(function(event){
         //prevents auto submission
         event.preventDefault()

         //to store movie input
         var movie = $("#movie").val()

         var result = ""

         //connecting query
         var url = "http://www.omdbapi.com/?apikey="+apikey

         $.ajax({
             method:'GET',
             url:url+"&t="+movie,
             
             //will retrn the data when the request is succesful
             success:function(data){

                 console.log(data); 

                 //showing result
                 result = `
                 
                 <img style = "float:left" class="img-thumnail" width ="400" height ="400" src = "${data.Poster}"/>
                 <h2 >Title:</h2>
                 <h4>${data.Title}</h4>
                 <h2>Released Date:</h2>
                 <h4>${data.Released}</h4>
                 <h2>Runtime:</h2>
                 <h4>${data.Runtime}</h4>
                 <h2>No of votes:</h2>
                 <h4>${data.imdbVotes}</h4>
                 <h2>Rating:</h2>
                 <h4>${data.imdbRating}</h4>
                 
                 
                 
                 `;
                 $("#result").html(result)

             } 
         })
     })
 })