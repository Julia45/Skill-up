import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class DataServiceService {

  constructor() { }

  getData() {
    const items: string[] = [];

    for(let i = 0; i < 10; i ++) {
      items[i] = `Элемент списка #${i}`
    }
    return items
  }
}
