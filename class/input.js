export class Input {
  constructor(type, placeholder) {
    this.type = type;
    this.placeholder = placeholder;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");
    const input = document.createElement("input");
    input.type = this.type;
    input.placeholder = this.placeholder;
    input.setAttribute("required", true);
    if(this.type === "number"){
        input.setAttribute("step", '1');
        input.setAttribute("min", '0');
        input.setAttribute("max", '100');
    }
    wrapper.appendChild(input);
    return wrapper;
  }
}
