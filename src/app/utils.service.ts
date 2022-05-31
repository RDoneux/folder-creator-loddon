import { TemplateBindingParseResult } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  convertJSONName(name: string): string {
    const nameComponents: string[] = name.split(/(?=[A-Z])/);

    nameComponents.forEach((component) => {
      component = component.toLowerCase();
    });
    return nameComponents.join(' ');
  }

  capitaliseString(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  reverseDate(date: string): string {
    var splitDate: string[] = date.split('-');
    const start = splitDate[0];
    const end = splitDate[2];

    splitDate[0] = end;
    splitDate[2] = start;
    return splitDate.join('-');
  }
}
// export const Required = (target: Object, propertyKey: string) => {
//   let currentValue: any = target[propertyKey];
//   console.log("currentValue = " + currentValue);


//   Object.defineProperty(target, propertyKey, {
//     get() {
//       throw new Error("Property '${propertyKey}' is required");
//     },
//     set(value) {
//       Object.defineProperty(target, propertyKey, {
//         value,
//         writable: true,
//         configurable: true,
//       });

//     },
//     configurable: true,
//   });
//   // console.log("value"  + target[propertyKey]);

// }
