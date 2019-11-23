import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
declare var google;
declare var map1;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('mapElement') mapNativeElement:ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;


  constructor(private fb: FormBuilder){
      this.createDirectionForm();
  }

  ngOnInit(){
  }

  createDirectionForm(){
    this.directionForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void{
      const map = new google.maps.Map(this.mapNativeElement.nativeElement,{
        zoom: 11,
        center: {lat: 1.3521, lng: 103.8198},
        disableDefaultUI: true
      });
      this.directionsDisplay.setMap(map);
  }

  calculateAndDisplayRoute(formValues){
    const that = this;
    this.directionsService.route({
      origin: formValues.source,
      destination: formValues.destination,
      travelMode: 'WALKING',
      unitSystem: google.maps.UnitSystem.METRIC,
      provideRouteAlternatives: true
    }, (response, status) => {
      if (status === 'OK') {
      this.getlatandlang(response.routes[0].overview_path)

        that.directionsDisplay.setDirections(response);
      }else{
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

   getlatandlang(selectedroute): void{
      let latlist:string[] = [""];
      let langlist:string[] = [""];
      let latlanglist:string[] = [""];
      //let userlatlang:string = "";
      //loop through the different latitude & longitude
      //between the Start and End point
      for (let i in selectedroute)
      {
        //get latitude & longitude between Start to End Point
      //  latlanglist[i] = (selectedroute[i].lat() + "," + selectedroute[i].lng());
         latlist[i] = [selectedroute[i].lat()];
         langlist[i] = [selectedroute[i].lng()];
      }

        this.trackroute(latlist, langlist)
      //this.trackroute(latlanglist)
    }

    // getPosition(): void
    // {
    //   let latlang:string = "";
    //   navigator.geolocation.getCurrentPosition(function(position){
    //     latlang = (position.coords.latitude + ", " + position.coords.longitude)
    //     return latlang
    //   });
    // }
    //latlist, langlist



    trackroute(latlist, langlist): void{
        let userlatlang:string = "";
        let distCheckpoint:string = "";
        let userlocation:string = "";
        let checkpoint:string = "";
        let useronthemove:string = "";
        let counter: number = 0;
        let marker: string = "";

        const map = new google.maps.Map(this.mapNativeElement.nativeElement,{
          zoom: 11,
          center: {lat: 1.3521, lng: 103.8198},
          disableDefaultUI: true
        });
        this.directionsDisplay.setMap(map);

        //get current position
        navigator.geolocation.getCurrentPosition(function(position){
          userlatlang = (position.coords.latitude + ", " + position.coords.longitude);
          userlocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);



         if(userlocation != latlist[latlist.length]){
            for (let i in latlist)
             {
              checkpoint = new google.maps.LatLng(latlist[i], langlist[i]);
              distCheckpoint = new google.maps.geometry.spherical.computeDistanceBetween(userlocation, checkpoint);
              if(userlocation == checkpoint){
                 userlocation = checkpoint
                 checkpoint = google.maps.LatLng(latlist[i + 1], langlist[i + 1]);
                 if(!marker){
                     marker = new google.maps.Marker({
                     position: userlocation,
                     map: map
                   });
                 }else{
                   this.marker.setPosition(location);
                   console.log("new checkpoint")
                 }
              }else{
                if(!marker){
                    marker = new google.maps.Marker({
                    position: userlocation,
                    map: map
                  });
                }else{
                  this.marker.setPosition(location);
                  console.log("current location")
                }
                break;
              }
             }
         }else{
          console.log("COMPLETED")
         }
            // if(userlocation != checkpoint)
            // {
            //     if (counter < 5)
            //     {
            //     userlocation = checkpoint;
            //     checkpoint  = new google.maps.LatLng(latlist[i+1], langlist[i+1]);
            //     }
            //     console.log("on track");
            //     counter = counter + 1;
            // }
            // else if(counter == 5 ){
            //   userlocation = new google.maps.LatLng(latlist[i], langlist[i]);
            //   checkpoint = new google.maps.LatLng(latlist[i], langlist[i]);
            //   counter = counter + 1;
            //   console.log("side track");
            // }
            // else if(latlist.slice(-1)[0] == latlist[i] )
            // {
            //   console.log("complete route");
            //   break;
            // }
            // else
            // {
            //   userlocation = checkpoint;
            //   checkpoint  = new google.maps.LatLng(latlist[i+1], langlist[i+1]);
            // }

        });
       }
     }
