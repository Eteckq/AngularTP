import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keyTranslate' })
export class KeyTranslatePipe implements PipeTransform {
    transform (value: string): string {
        switch (value) {
            case 'KeyW': return 'Z';
            case 'KeyA': return 'Q';
            case 'KeyS': return 'S';
            case 'KeyD': return 'D';
            case 'Numpad8': return '8';
            case 'Numpad4': return '4';
            case 'Numpad5': return '5';
            case 'Numpad6': return '6';
        }
    }
}

@Pipe({ name: 'arrowTranslate' })
export class ArrowTranslatePipe implements PipeTransform {
    transform (value: string): string {
        switch (value) {
            case 'KeyW': return '↑';
            case 'KeyA': return '←';
            case 'KeyS': return '↓';
            case 'KeyD': return '→';
            case 'Numpad8': return '↑';
            case 'Numpad4': return '←';
            case 'Numpad5': return '↓';
            case 'Numpad6': return '→';
        }
    }
}