import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const folderAnimation = trigger('folder', [
  state('hidden', style({ height: '0', opacity: 0 })),
  state('visible', style({ height: '*', opacity: 1 })),
  transition('hidden => visible', animate('300ms ease-out')),
  transition('visible => hidden', animate('300ms ease-out')),
]);
