import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss'],
})
export class HealthBarComponent {
  @ViewChild('healthBar') healthBar: ElementRef;
  @ViewChild('bar') bar: ElementRef;
  @ViewChild('hit') hit: ElementRef;

  @Input()
  health: number;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.bar);
  }

  public applyDamage(amout: number) {
    var total = this.hit.nativeElement.data('total'),
      value = this.hit.nativeElement.data('value');

    var newValue = value - amout;
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (amout / value) * 100 + '%';

    // show hit bar and set the width
    this.hit.nativeElement.css('width', hitWidth);
    this.healthBar.nativeElement.data('value', newValue);

    setTimeout(function () {
      this.hit.nativeElement.css({ width: '0' });
      this.bar.nativeElement.css('width', barWidth + '%');
    }, 500);
  }
}
