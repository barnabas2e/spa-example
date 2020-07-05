import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  pages: Object = {
    'home' : {
      title: 'Home',
      subtitle: 'Welcome Hone!',
      content: 'content goes here',
      image: 'assets/images/bg/bg00.jpg'
    }, 
    'about' : {
      title: 'About',
      subtitle: 'About us',
      content: 'Information about goes here',
      image: 'assets/images/bg/bg01.jpg'
    },
    'contact' : {
      title: 'Contact',
      subtitle: 'Contact us',
      content: 'We located in the following address',
      image: 'assets/images/bg/bg02.jpg'
    }
  };
}
