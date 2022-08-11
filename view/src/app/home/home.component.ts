import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../fooditem';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public adder=0;
  public reducer=0;
  foodItems: any;
  fromParent:any;
  billItems:any=[];
  totalPrice=0;


  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getItems().subscribe((data: FoodItem[])=>{
              console.log(data)
              this.foodItems=data;
              this.fromParent = this.foodItems;    
              this.foodItems.forEach((currentValue:any, index: any) => {
                let key=currentValue.item_id;
                this.billItems[--key]=Object.assign(currentValue,{price:0});
          
              });  
              console.log(JSON.stringify(this.billItems))

    });
  }

  adderEventHander($event:any){
    this.adder+=$event;
    this.billItems[--$event].price+=parseInt(this.billItems[$event].cost);
     console.log(this.billItems)
     console.log('-->'+JSON.stringify(this.billItems[$event].cost))
     this.totalPrice+=parseInt(this.billItems[$event].cost);
       
    }
    

  

  reducerEventHander($event:any){
    this.reducer-=$event;
    this.billItems[--$event].price-=parseInt(this.billItems[$event].cost);
    console.log(this.billItems)
    this.totalPrice-=parseInt(this.billItems[$event].cost);
  }

}
