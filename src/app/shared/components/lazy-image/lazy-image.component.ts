import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if( this.url.length === 0 ) throw new Error('Se requiere la propiedad "url"');
  }


  onLoad(): void {
    console.log(this.hasLoaded)
    this.hasLoaded = true;
  }

}
