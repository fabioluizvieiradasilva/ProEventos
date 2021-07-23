import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() iconClass: string = 'fa fa-user';
  @Input() subtitulo: string = 'Desde 2021';
  @Input() botaoListar = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  listar(): void {
    this.router.navigate([`/${this.titulo.toLocaleLowerCase()}/lista`]);
  }

}
