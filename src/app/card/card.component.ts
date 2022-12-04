import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  posts : any[]=[{
    mainImageUrl: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
    category: 'freelancing',
    title: 'The Road to Freedom',
    description:
      'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
    authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
    authorName: 'John Smith',
    postDate: '10th August 2020',
  },
  {
    mainImageUrl: 'https://source.unsplash.com/e-S-Pe2EmrE/400x250',
    category: 'freelancing',
    title: 'The Road to Freedom',
    description:
      'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
    authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
    authorName: 'John Smith',
    postDate: '10th August 2020',
  },
  {
    mainImageUrl: 'https://source.unsplash.com/EAvS-4KnGrk/400x250',
    category: 'freelancing',
    title: 'The Road to Freedom',
    description:
      'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
    authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
    authorName: 'John Smith',
    postDate: '10th August 2020',
  },
  {
    mainImageUrl: 'https://source.unsplash.com/RP6Ba_6U154/400x250',
    category: 'freelancing',
    title: 'The Road to Freedom',
    description:
      'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
    authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
    authorName: 'John Smith',
    postDate: '10th August 2020',
  },
  {
    mainImageUrl: 'https://source.unsplash.com/I2YSmEUAgDY/400x250',
    category: 'freelancing',
    title: 'The Road to Freedom',
    description:
      'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
    authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
    authorName: 'John Smith',
    postDate: '10th August 2020',
  },
  {
    mainImageUrl: 'https://source.unsplash.com/hpTH5b6mo2s/400x250',
    category: 'freelancing',
    title: 'The Road to Freedom',
    description:
      'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
    authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
    authorName: 'John Smith',
    postDate: '10th August 2020',
  },
  {
    mainImageUrl: 'https://source.unsplash.com/2TQwrtZnl08/400x250',
    category: 'freelancing',
    title: 'The Road to Freedom',
    description:
      'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
    authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
    authorName: 'John Smith',
    postDate: '10th August 2020',
  },
  {
    mainImageUrl: 'https://source.unsplash.com/cGwfkwHmt98/400x250',
    category: 'freelancing',
    title: 'The Road to Freedom',
    description:
      'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
    authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
    authorName: 'John Smith',
    postDate: '10th August 2020',
  },];
  //data = this.posts ; 


  constructor() { }

  ngOnInit(): void {
  }

}
