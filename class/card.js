import { Input } from "./input.js"
export class Card{
    constructor(title,text,inputs){
        this.title = title;
    }
    
    
    render(){
        const row = document.createElement("div");
        row.classList.add("row");
        const title= document.createElement("div");
        title.classList.add("title");
        title.innerHTML = this.title;
        const inputs = document.createElement("form");
        inputs.classList.add("inputs");
        const webPrograming = new Input("number","Web Programing");
        const maths = new Input("number","Maths");
        const Computer= new Input("number","Computer");
        const Physics = new Input("number","Physics");
        const wrapperBtn= document.createElement("div");
        wrapperBtn.classList.add("wrapper-btn");
        const btn = document.createElement("button");
        btn.innerHTML = "Show Percentage";
        wrapperBtn.appendChild(btn);
        const result = document.createElement("div");
        result.classList.add("result");
        result.innerHTML = "Result:";
        inputs.append(webPrograming.render(),maths.render(),Computer.render(),Physics.render(),wrapperBtn,result);
        row.append(title,inputs);
        return row;
       }
       
    
}