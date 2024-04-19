import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive(
    {
        standalone: true,
        selector:'[setBackGround]'
    }
)
export class SetBackGround implements OnInit{
    constructor(private element:ElementRef){
    }
    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor='red'
    }
    
}