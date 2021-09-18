import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from '../../services/character.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Avatar', 'Name', 'Role', 'Actions'];
  dataSource: MatTableDataSource<Character> = new MatTableDataSource<Character>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  characters: Character[] = [];

  constructor(
    private service: CharacterService,
    private modalService: NgbModal,
    private general: GeneralService
    ) { 
  }

  ngOnInit(): void {
    this.characters = this.service.get()
    this.dataSource = new MatTableDataSource<Character>(this.characters)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openModal(index: number){
    const modal = this.modalService.open(DialogComponent,{
      ariaLabelledBy: 'modal-basic-title',
      windowClass: '',
      size: 'lg'
    })

    modal.result.then(
      this.handleModal.bind(this),
      this.handleModal.bind(this)
    )

    modal.componentInstance.index = index;
  }
  delete(index: number){
    this.service.delete(index)
    this.loadData()
  }
  loadData(){
    this.characters = this.service.get()
    this.dataSource = new MatTableDataSource<Character>(this.characters)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  handleModal(response: any){
    if(this.general.getDismissResponse()){
      this.loadData();
    }
  }
}
