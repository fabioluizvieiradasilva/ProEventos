import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public filteredEvents: any = [];

  widthImg: number = 150;
  marginImg: number = 2;
  showImg: boolean = true;
  private _filterList: string = '';

  public get filterList(): string {
    return this._filterList;
  }

  public set filterList(value: string){
    this._filterList = value;
    this.filteredEvents = this.filterList ? this.filterEvents(this.filterList) : this.eventos;
  }

  filterEvents(value: string): any{
    value = value.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(value) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(value) !== -1
    );
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
      this.http.get('https://localhost:5001/api/evento').subscribe(
      response => {
        this.eventos = response;
        this.filteredEvents = this.eventos;
      },
      error => console.log(error)
      );
  }

  public showImage(){
    this.showImg = !this.showImg
  }

}
