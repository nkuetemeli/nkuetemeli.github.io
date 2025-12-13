import type { SocialLink, } from './types';
import {Arxiv, Orcid, Linkedin, GitHub, GoogleScholar} from './components/Icons';


export const socialLinks: SocialLink[] = [
  { icon: GoogleScholar, href: 'https://scholar.google.de/citations?user=FVFqtbEAAAAJ&hl=en&oi=ao' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/natacha-kuete-meli-b0378a15a' },
  { icon: GitHub, href: 'https://github.com/nkuetemeli' },
  { icon: Arxiv, href: 'https://arxiv.org/search/?query=Natacha+kuete+meli&searchtype=all&source=header#%20URL%20-%20Update%20with%20the%20correct%20link%20to%20your%20profile' },
  { icon: Orcid, href: 'https://orcid.org/0009-0001-9989-1012' },
];
