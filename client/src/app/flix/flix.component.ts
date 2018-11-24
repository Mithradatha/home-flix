import { FlixService } from './flix.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Flix } from './flix.model';

@Component({
  selector: 'app-flix',
  templateUrl: './flix.component.html',
  styleUrls: ['./flix.component.scss']
})
export class FlixComponent implements OnInit, OnDestroy {
  flixes: Flix[];

  dtTrigger: Subject<Flix> = new Subject();

  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 10,
    rowCallback: (row: Node, data: any[] | Object, index: number) => {
      const self = this;

      $('td', row).unbind('click');
      $('td', row).bind('click', () => {
        self.handleRowClick(data);
      });

      return row;
    }
  };

  constructor(private flixService: FlixService, private router: Router) {}

  ngOnInit() {
    this.flixService.getFlixes().subscribe(next => {
      this.flixes = next;
      this.dtTrigger.next();
    });
  }

  handleRowClick(data: any[] | Object): void {
    this.router.navigate(['/flixes/' + data[0]]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
