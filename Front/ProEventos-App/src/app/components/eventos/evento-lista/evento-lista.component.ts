import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {

  modalRef = {} as BsModalRef;

  public eventos: Evento[] = [];
  public filteredEvents: Evento[] = [];

  public widthImg: number = 150;
  public marginImg: number = 2;
  public showImg: boolean = true;
  private _filterList: string = '';

  public get filterList(): string {
    return this._filterList;
  }

  public set filterList(value: string){
    this._filterList = value;
    this.filteredEvents = this.filterList ? this.filterEvents(this.filterList) : this.eventos;
  }

  public filterEvents(value: string): Evento[]{
    value = value.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(value) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(value) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    ) { }

  public ngOnInit(): void {
    this.spinner.show();
    this.getEventos();
  }

  public getEventos(): void {
      this.eventoService.getEventos().subscribe({
      next:(_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.filteredEvents = this.eventos;
      },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar os dados!', 'Erro!')
      },
      complete: () => this.spinner.hide()
    });
  }

  public showImage(): void{
    this.showImg = !this.showImg
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef.hide();
    console.log("teste");
    this.toastr.success('Evento excluído com sucesso!', 'Confirmação');
  }

  decline(): void {
    this.modalRef.hide();
  }

  detalheEvento(id: number): void {
    this.router.navigate([`eventos/detalhe/${id}`]);
  }

}
