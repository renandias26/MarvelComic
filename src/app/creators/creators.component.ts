import { Component, OnInit } from '@angular/core';
import { CreatorsService } from '../services/creators.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creators',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './creators.component.html',
  styleUrl: './creators.component.scss'
})
export class CreatorsComponent implements OnInit {

  test: string = '';

  constructor(
    private creatorService: CreatorsService
  ) { 

    
  }

  ngOnInit(): void {
    this.getTest();
    
  }


  getTest() {

    this.creatorService.getAllCreators().subscribe({next:
      (response) => {
        const teste: string = response.body.message 

        this.test = teste
        console.log('response', this.test)
      }
    })
    return
  }

}
