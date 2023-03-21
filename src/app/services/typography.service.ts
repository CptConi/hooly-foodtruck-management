import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypographyService {
  constructor() {}

  public capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}
