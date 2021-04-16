import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
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
  health: number = 100;

  @Input()
  maxHealth: number = 100;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.maxHealth) {
      return;
    }
    if (changes.health) {
      this.applyDamage(
        changes.health.previousValue - changes.health.currentValue
      );
    }

    if (this.health < 0) {
      this.health = 0;
    }
  }

  public applyDamage(amout: number) {
    var total = this.healthBar.nativeElement.dataset['total'],
      value = this.healthBar.nativeElement.dataset['value'];

    var newValue = value - amout;
    if (newValue < 0) {
      newValue = 0;
    }
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (amout / value) * 100 + '%';

    // show hit bar and set the width
    this.hit.nativeElement.style.width = hitWidth;
    this.healthBar.nativeElement.dataset['value'] = newValue;

    setTimeout(() => {
      this.hit.nativeElement.style.width = '0';
      this.bar.nativeElement.style.width = barWidth + '%';
    }, 300);
  }
}
