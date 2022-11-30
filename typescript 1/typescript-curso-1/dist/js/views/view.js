export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${selector} não existe`);
        }
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
