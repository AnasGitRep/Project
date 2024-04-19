import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    standalone:true,
    selector:'[CustomIF]'
})
export class CustomStructuIF{
    constructor(private view:TemplateRef<any>,private template:ViewContainerRef){}

    @Input()set CustomIF(condition:boolean){
        if(condition){
            this.template.createEmbeddedView(this.view)
        }else{
            this.template.clear()
        }
    }
}