import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {

  public itemList = [
    { id: 1, background: '#b3b3b3', text: 'text1' },
    { id: 2, background: '#cceeff', text: 'text2' },
    { id: 3, background: '#b3ffe0', text: 'text3' },
    { id: 4, background: '#ffd1b3', text: 'text4' },
    { id: 5, background: '#ecb3ff', text: 'text5' },
    { id: 6, background: '#ff99c2', text: 'text' }
  ];

  public currentIndexItem: number;
  public cuttedItems: Array<{ id: number, background: string, text: string }>;
  public isEditMode: boolean;

  constructor() { }

  ngOnInit() {
  }

  public onEditItemOrder(): void {
    this.isEditMode = !this.isEditMode;
  }

  public onMoveUp(e): void {
    this.currentIndexItem = this.itemList.findIndex(x => x.id === Number(e.target.parentNode.parentNode.id));
    this.cuttedItems = this.itemList.splice(this.currentIndexItem - 2, 3).reverse();
    this.itemList.splice(this.currentIndexItem - 2, 0, this.cuttedItems[0], this.cuttedItems[1], this.cuttedItems[2]);
  }

  public onMoveRight(e): void {
    this.currentIndexItem = this.itemList.findIndex(x => x.id === Number(e.target.parentNode.parentNode.id));
    this.cuttedItems = this.itemList.splice(this.currentIndexItem, 2).reverse();
    this.itemList.splice(this.currentIndexItem, 0, this.cuttedItems[0], this.cuttedItems[1]);
  }

  public onMoveDown(e): void {
    this.currentIndexItem = this.itemList.findIndex(x => x.id === Number(e.target.parentNode.parentNode.id));
    this.cuttedItems = this.itemList.splice(this.currentIndexItem, 3).reverse();
    this.itemList.splice(this.currentIndexItem, 0, this.cuttedItems[0], this.cuttedItems[1], this.cuttedItems[2]);

  }

  public onMoveLeft(e): void {
    this.currentIndexItem = this.itemList.findIndex(x => x.id === Number(e.target.parentNode.parentNode.id));
    this.cuttedItems = this.itemList.splice(this.currentIndexItem - 1, 2).reverse();
    this.itemList.splice(this.currentIndexItem - 1, 0, this.cuttedItems[0], this.cuttedItems[1]);
  }

  public onClicked() {
    alert('test');
  }
}
