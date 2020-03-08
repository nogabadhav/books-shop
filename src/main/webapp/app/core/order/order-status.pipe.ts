import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderStatus' })
export class OrderStatusPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    if (value === 'NEW') {
      return 'נרשם';
    }
    if (value === 'ON THE WAY') {
      return 'בדרך ללקוח';
    }
    if (value === 'DELIVERED') {
      return 'הגיע';
    }
  }
}
