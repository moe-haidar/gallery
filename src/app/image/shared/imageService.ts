import{Injectable } from '@angular/core';



@Injectable()
export class ImageService{

         visibleImages =[] as any;

         getImages(){
                  return this.visibleImages=IMAGES.slice(0);
         }

         getImage(id : number){
                  return IMAGES .slice(0).find(image => image.id==id);
         }

}


const IMAGES=[

         {"id":1,
         "category":"boats"
         ,"caption":"view from the boat",
         "url":"assets/img/boat_01.jpeg"},

         {"id":2,
         "category":"boats"
         ,"caption":"Sailing the coast",
         "url":"assets/img/boat_02.jpeg"},

         {"id":3,
         "category":"boats"
         ,"caption":"sunset pier",
         "url":"assets/img/boat_03.jpeg"},

         {"id":4,
         "category":"boats"
         ,"caption":"Sunday after noon",
         "url":"assets/img/boat_04.jpeg"},

         {"id":5,
         "category":"boats"
         ,"caption":"sunset at the docks",
         "url":"assets/img/boat_05.jpeg"},

         {"id":6,
         "category":"camping"
         ,"caption":"Kim and Jessie",
         "url":"assets/img/camping_01.jpeg"},

         {"id":7,
         "category":"camping"
         ,"caption":"view from the top",
         "url":"assets/img/camping_02.jpeg"},

         {"id":8,
         "category":"camping"
         ,"caption":"on the tri",
         "url":"assets/img/camping_03.jpeg"},

         {"id":9,
         "category":"camping"
         ,"caption":"our camping spot",
         "url":"assets/img/camping_04.jpeg"},

         {"id":10,
         "category":"camping"
         ,"caption":"Rv live",
         "url":"assets/img/camping_05.jpeg"},
         
         {"id":11,
         "category":"library"
         ,"caption":"Old Books",
         "url":"assets/img/library_01.jpeg"},

         {"id":12,
         "category":"library"
         ,"caption":"Big Library",
         "url":"assets/img/library_02.jpeg"},

         {"id":13,
         "category":"library"
         ,"caption":"Old Library",
         "url":"assets/img/library_03.jpeg"},

         {"id":14,
         "category":"library"
         ,"caption":"Amazing Library",
         "url":"assets/img/library_04.jpeg"},

         {"id":15,
         "category":"library"
         ,"caption":"New Era",
         "url":"assets/img/library_05.jpeg"}

         


]