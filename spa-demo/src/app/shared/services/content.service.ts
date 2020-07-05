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
      content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      image: 'assets/images/bg/bg00.jpg'
    }, 
    'about' : {
      title: 'About',
      subtitle: 'About us',
      content: 'Information about goes here',
      image: 'assets/images/bg/bg02.jpg'
    },
    'contact' : {
      title: 'Contact',
      subtitle: 'Contact us',
      content: 'We are located at the following address',
      image: 'assets/images/bg/bg02.jpg'
    }
  };
}
