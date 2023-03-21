import { Injectable } from '@angular/core';

import * as fr from '../localization/fr.translation.json';
import { Translation } from '../models/translation.model';
import { TypographyService } from './typography.service';

@Injectable({
  providedIn: 'root',
})
export class HumanizeService {
  // Will be used as a kind of i18n service, but lighter (MVP version)
  constructor(private typographyService: TypographyService) {}

  public humanize = <T extends Translation>(key: keyof T): string => {
    return (
      ((fr as any)[key] as T[keyof T]) ||
      this.typographyService.capitalize(String(key))
    );
  };
}
