import React from 'react';
import { M3eIcon } from '@m3e/react/icon';

// m3e-icon se masque lui-même — `aria-hidden="true"` dès qu'il n'a ni
// `aria-label` ni `aria-labelledby` — mais le mixin `Role` de @m3e/web lui
// pose malgré tout un `role="img"`. Les deux se contredisent sur le même
// nœud : `aria-hidden` l'emporte, rien n'est donc annoncé de travers, mais
// l'attribut laisse croire à une image sans alternative textuelle.
//
// Le mixin ne pose son rôle que si l'élément n'en porte pas déjà un
// (`this.role = this.role || "img"`), et React écrit l'attribut avant le
// `connectedCallback` : `role="none"` le devance, comme le `role="none"`
// déjà posé sur M3eDivider.
//
// Une icône porteuse de sens repasserait par `<Icon role="img"
// aria-label="…" />` — la diffusion des props passe après et reprend la main.
const Icon = (props) => <M3eIcon role="none" {...props} />;

export default Icon;
