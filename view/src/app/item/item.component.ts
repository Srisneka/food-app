import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() fromParent: any;
  @Output() adderEvent =new EventEmitter<any>();
  @Output() reducerEvent =new EventEmitter<any>();
  count=0
  constructor() {
    
   }

  ngOnInit(): void {
  }
  addHandler(item_id : any){
    this.adderEvent.emit(item_id);
    ++this.count;
  }

  redHandler(item_id : any){
    this.reducerEvent.emit(item_id);
    --this.count;
  }

}
