import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, NgZone} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { UserReg } from '../../user.service';
import { interval, Subscription } from 'rxjs';
import {} from 'googlemaps';



declare var google;
var map;
var gcounter=0;
var scounter=0;
var gRoute=[];
var sRoute;
var resp;
var startMarker;
var endMarker;


@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.page.html',
  styleUrls: ['./navigate.page.scss'],
})
export class NavigatePage implements OnInit, AfterViewInit {
  @ViewChild('mapElement', { static: true }) mapNativeElement;
  @ViewChild('directionsPanel', {static: false }) directionsPanel: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay= new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
  currentLocation: any = {
  lat: 0,
  lng: 0
};
  subscribe : Subscription;
  GoogleAutocomplete: google.maps.places.AutocompleteService;
  autocomplete: { input: string; };
  autocomplete2: { input: string; };
  autocompleteItems: any[];
  autocompleteItems2: any[];
  location: any;
  placeid: any;
  loading: boolean = false;
  addressInput: string = '';
  predictions: Object[];
  selectedAddress: any;
  errorMessage: string;
  begin: string;
  fin: string;

  //point award system
  loggedInID: string;
  points: number = 0;
  getpoints: any;
  mainuser: AngularFirestoreDocument;
  subEvent: any;
  currPoint: number = 0;
  totalPoints: number = 0;
  lifetimePoints: number = 0;
  totalDistance: any;
  tier: string;
  toNextTierPoints: number = 0;

  test1: number;
  test2: number;

    constructor(private fb: FormBuilder, public alertController: AlertController, private geolocation: Geolocation,   public router: Router, public zone: NgZone, public user: UserReg, private afs: AngularFirestore) {
      this.createDirectionForm();

      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = { input: '' };
      this.autocomplete2 = { input: '' };
      this.autocompleteItems = [];
      this.autocompleteItems2 = [];


      this.mainuser = afs.doc(`users/${user.getUID()}`)
         this.subEvent = this.mainuser.valueChanges().subscribe(event => {
           this.currPoint = event.steps
           this.tier = event.tier
           //console.log("default tier: " , this.tier)
           //console.log("Curr points: " + this.currPoint) //
     })
    }


    createDirectionForm() {
      this.directionForm = this.fb.group({
        source: ['', Validators.required],
        destination: ['', Validators.required]
      });
    }

    ngOnInit(){
      this.loggedInID = this.user.getUID();
    }
    ngAfterViewInit(): void {
      map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        zoom: 11,
        center: {lat: 1.290270, lng: 103.851959}
      });
      this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    }


    updateSearchResults(){
    if (this.autocomplete.input == " ") {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({
      input: this.autocomplete.input,
      componentRestrictions:{country: 'sg'}
    },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
    }
    updateSearchResults2(){
      if (this.autocomplete2.input == '') {
        this.autocompleteItems2 = [];
        return;
      }
      this.GoogleAutocomplete.getPlacePredictions({
        input: this.autocomplete2.input,
        componentRestrictions:{country: 'sg'}
      },
      (predictions, status) => {
        this.autocompleteItems2 = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems2.push(prediction);
          });
        });
    });
    }
    selectSearchResult(item) {
      console.log(item)
      this.location = item
      this.begin = this.location.description
      console.log('source = '+ this.begin)
      this.autocomplete.input = this.begin
      this.autocompleteItems = [];
    }

    selectSearchResult2(item) {
      console.log(item)
      this.location = item
      this.fin = this.location.description
      console.log('destination = '+ this.fin)
      this.autocomplete2.input = this.fin
      this.autocompleteItems2 = [];

    }

    async invalidRoute(status) {
      const alert = await this.alertController.create({
        header: 'Alert',
        //CHANGE THE ERROR MESSAGE
        //message: 'Directions request failed due to ' + status,
        message: 'Directions request failed due to ' + status.replace(/_/g, ' ').toLowerCase() + ".",
        buttons: ['OK']
    });
      await alert.present();
    }

    async resetDisqualified() {
      const quit = await this.alertController.create({    //pop-up alert function
        header: 'So sorry...',
        subHeader: 'You have diverted from the route for too long.',
        message: 'Please select route again!',
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }]
      });
      await quit.present();
    }

    async routeCompleted(points) {
      const redirect = await this.alertController.create({    //pop-up alert function
        header: 'Congratulations! You have Completed the Route!', //u fill
        message: 'You have been awarded ' + points + ' points for completing this journey.',
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }]
      });
      await redirect.present();
    }


    generateRoute(formValues) {
      const that = this;
      if (scounter != 0){
          sRoute.setMap(null);
          this.directionsDisplay.setMap(null);
          this.directionsDisplay.set('directions', null);
        }
      scounter = 0;
      this.directionsService.route({
        origin: formValues.source,
        destination: formValues.destination,
        travelMode: 'WALKING',
        provideRouteAlternatives: true
      }, (response, status) => {
              if (status === 'OK') {

                resp = response;
                if (gcounter != 0){
                  for (var i = 0; i<gcounter; i++){
                    gRoute[i].setMap(null);
                  }
                  gcounter = 0;
                  startMarker.setMap(null);
                  endMarker.setMap(null);
                }

                that.drawRoute(resp, 0, null);
              }
              else {
               that.invalidRoute(status);
             }

      });
      //this.router.navigate(['/home/feedback'])
    }

    drawRoute(response, checker, routenum){
      const self = this;
      var color = [
        "green",
        "red",
        "blue"
      ];
      if (checker == 0) {
        var bounds = new google.maps.LatLngBounds();
         for (var h = 0, len = response.routes.length; h < len; h++) {
           gRoute[h] = new google.maps.Polyline({
             path: [],
             strokeColor: color[h],
             strokeWeight: 3,
             zIndex:h
           });
          var legs = response.routes[h].legs;
            for (var i = 0; i < legs.length; i++) {
              var steps = legs[i].steps;
             for (var j = 0; j < steps.length; j++) {
               var nextSegment = steps[j].path;
               for (var k = 0; k < nextSegment.length; k++) {
                 gRoute[h].getPath().push(nextSegment[k]);
                 bounds.extend(nextSegment[k]);
               }
             }
           }
           map.fitBounds(bounds);
         gRoute[h].setMap(map);
         gRoute[h].addListener('click', function(e) {
            self.drawRoute(resp, 1, this.zIndex);
             });
        gcounter++;
       }
        startMarker = new google.maps.Marker({
         position:gRoute[0].getPath().getAt(0),
         label: {
           text: 'A',
           color: 'white',
         },
         map:map
        });
        endMarker =  new google.maps.Marker({
          position:gRoute[0].getPath().getAt(gRoute[0].getPath().getLength()-1),
          label: {
            text: 'B',
            color: 'white',
          },
          map:map
        });
     }
      else{
        if (gcounter != 0){
          for (var i = 0; i<gcounter; i++){
            gRoute[i].setMap(null);
          }
          gcounter = 0;
        }
        if (scounter != 0){
            sRoute.setMap(null);
            scounter = 0;
        }
        startMarker.setMap(null);
        endMarker.setMap(null);
        this.getlatandlang(response.routes[routenum].overview_path);
        sRoute = new google.maps.DirectionsRenderer({
            polylineOptions: {
              strokeColor: "black",
              strokeOpacity: 0.5
            },
            map: map,
            directions: response,
            routeIndex: routenum,

        });
        for(var i = response.routes.length-1; i >= 0; i--){
          if( i == routenum && i != 0 && i == response.routes.length-1){
          response.routes.splice(0, i);
            }
          else if( i == routenum && i != 0 && i != response.routes.length-1){
            response.routes.pop();
            response.routes.splice(0, i-1);
          }
          else{
            response.routes.splice(i, response.routes.length-1);
          }
          }
        this.directionsDisplay.setMap(map);
        this.directionsDisplay.setDirections(response);
        this.totalDistance = google.maps.geometry.spherical.computeLength(gRoute[routenum].getPath());
        console.log("number 1: " , this.totalDistance); //<---- the route distance
        scounter++;
      }
    }


  getlatandlang(selectedroute): void{

          let latlist:string[] = [""];
          let longlist:string[] = [""];
          let latlonglist:string[] = [""];
          let count: number = 0;
          for (let i in selectedroute)
          {
             latlist[i] = [selectedroute[i].lat()];
             longlist[i] = [selectedroute[i].lng()];
             latlonglist[i] = latlist[i] + "," + longlist[i];
          }
          //RESTART TRACKING FUNCTION EVERY 2 SECONDS
          const sub = interval(2000);
          this.subscribe = sub.subscribe((val) => {
            count = count + 1;
            this.trackroute(latlist, longlist, latlonglist, count);

          });
        }

  //TRACKING FUNCTION
  trackroute(latlist, longlist, latlonglist, count): void{

      const that = this;
      let userlatlong:string = "";

      let distCheckpoint:number = 0;
      let checkpoint:number = 0;
      let distCheck:number[] = [];

      let distComplete:number = 0;
      let complete: number = 0;
      let starting: number = 0;
      let distance: number = 0;

      let userlocation:string = "";
      let smallest : number = 0;
      let marker: string = "";
      let markerg: string[] = [];


      //GET CURRENT LOCATION
      navigator.geolocation.getCurrentPosition(function(position){
        userlatlong = (position.coords.latitude + ", " + position.coords.longitude);
        userlocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        console.log("start tracking");
        //ISSUE**: MARKER NEED TO REAPPLY EVERY SINGLE LOOP, NOW IT KEEP STACKING.
        marker = new google.maps.Marker({
          position: userlocation,
          map: map
        });

        //CALCULATE USER's DISTANCE FROM ROUTE
        for (let i in latlonglist)
        {
          checkpoint = new google.maps.LatLng(latlist[i],longlist[i]);
          distCheckpoint = google.maps.geometry.spherical.computeDistanceBetween(userlocation,checkpoint);
          distCheck[i] = distCheckpoint;
        }

        //THE SHORTEST DISTANCE
        smallest = distCheck[0];

        for (var i=0; i < distCheck.length; i++ )
        {
          if (distCheck[i] < smallest){
            smallest = distCheck[i]
          }
        }
        console.log(smallest)

        //CHECK HOW FAR IS THE USER LOCATED FROM THE ROUTE
        if (smallest > 200){
          count+1;
          console.log("Diverted from track");
          console.log(count);
          if (count==10){
            //ISSUE**: app will reload the map, clear everything
            console.log("user is disqualified");
            that.resetDisqualified();
            that.subscribe.unsubscribe();
            map = new google.maps.Map(that.mapNativeElement.nativeElement, {
              zoom: 11,
              center: {lat: 1.290270, lng: 103.851959}
            });
            that.directionsDisplay.setMap(null);
            that.directionsDisplay.set('directions',null);
          }
        }
        else{
          console.log("on track");
        }

        //TRACKING DISTANCE BETWEEN DESTINATION AND USER
        complete = new google.maps.LatLng(latlist[latlist.length-1],longlist[longlist.length-1]);
        starting = new google.maps.LatLng(latlist[0],longlist[0]);
        distance = google.maps.geometry.spherical.computeDistanceBetween(starting,complete);
        distComplete = google.maps.geometry.spherical.computeDistanceBetween(userlocation,complete);

        //vairable for total distance
        console.log("Distance from Destination = " + distance);
        //IF DISTANCE IS LOWER THAN 300M, USER COMPLETE ROUTE
        if (distComplete < 100){
          //ISSUE**: app will add rewardpoints and route start&end tagged to uid, and will be redirected to history route page.
          console.log("Route Completed");
          console.log("start: " + that.begin);
          console.log("end: " + that.fin);
          that.subscribe.unsubscribe();

          //alert user route has completed + points awarded for that trip
          that.routeCompleted(that.pointsAwarded(that.totalDistance));
          //console.log("logged in test " , that.loggedInID)

          //award current points to user
          console.log("usable points: " , that.calculatePoints(that.pointsAwarded(that.totalDistance)))
          let awardPoints = {}
          awardPoints['steps'] = that.calculatePoints(that.pointsAwarded(that.totalDistance))
          that.user.add_points(awardPoints, that.loggedInID);

          //award lifetime points to user
          that.test1 =  that.getLifetimePoints(that.pointsAwarded(that.totalDistance))
          console.log("Lifetime points: " , that.test1)
          let lifetimeP = {}
          lifetimeP['lifetimePoints'] = that.test1;
          that.user.add_totalPoints(lifetimeP, that.loggedInID);

          //update user tier to DB based on lifetimePoints
          //console.log("Tier: " + that.updateTier(that.getLifetimePoints(that.pointsAwarded(that.totalDistance))))
          let latestTier = {}
          latestTier['tier'] = that.updateTier(that.test1)
          that.user.update_tier(latestTier, that.loggedInID);

          //update user toNextTierPoints
          console.log("To next tier points: " + that.toNextTier(that.getLifetimePoints(that.pointsAwarded(that.totalDistance))))
          let toNextTierL = {}
          toNextTierL['toNextTier'] = that.toNextTier(that.getLifetimePoints(that.pointsAwarded(that.totalDistance)))
          that.user.update_tier(toNextTierL, that.loggedInID);


          //insert history route to DB with start and end location as its field
          let hroute = {}
          hroute['startloc'] = that.begin
          hroute['endloc'] = that.fin
          that.user.add_historyRoutes(hroute, that.loggedInID).then(e => {
            console.log("History route added: ", e)
          })
          that.router.navigate(['/home/routehistory'])
        }


      });
    }

   //total points (curret points + newly awarded points)
     calculatePoints(addedPoints){
       this.totalPoints = addedPoints + this.currPoint
       console.log ("Usable points: " + this.totalPoints)
       return this.totalPoints
     }

     //points awarded for that particular trip
     pointsAwarded(distanceTravelled){
       this.points = distanceTravelled * 0.025
       this.points = Math.round((this.points * 100) / 100)
       console.log ("Points awarded for this trip: " + this.points)
       return this.points
     }

     //get lifetime points (to determine tier)
     getLifetimePoints(addedPoints){
       this.lifetimePoints = this.lifetimePoints + addedPoints
       //console.log ("Lifetime points: " + this.lifetimePoints)
       return this.lifetimePoints
     }

     //update Tier
     updateTier(lifetimePoints){
       if (lifetimePoints <= 1500){
         this.tier = "Bronze"
       } else if (lifetimePoints <= 3000){
         this.tier = "Silver"
       } else if (lifetimePoints > 3000) {
         this.tier = "Gold"
       } else { //if no tier
         this.tier = "Bronze"
       }
       return this.tier;
     }

     //update toNextTier
     toNextTier(lifetimePoints){
       if (lifetimePoints <= 1500){
         this.toNextTierPoints = 1500 - lifetimePoints
       } else if (lifetimePoints <= 3000){
         this.toNextTierPoints = 3000 - lifetimePoints
       }  else if (lifetimePoints > 3000 && lifetimePoints < 4500) {
         this.toNextTierPoints = 4500 - lifetimePoints
       } else if (lifetimePoints > 4500){
         this.toNextTierPoints = 0
       }
       else { //if no lifetimepoints
         this.toNextTierPoints = 1500
       }
       return this.toNextTierPoints;
     }


     ngOnDestroy() {
       this.subscribe.unsubscribe();
     }
   }
