import { View } from "./view.js";
export class MensagemVolumeView extends View {
    template(model) {
        return `
    <p>${model}</p>
  `;
    }
}
