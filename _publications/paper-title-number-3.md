---
title: "[CVPR highlight] QuCOOP: A Versatile Framework for Solving Composite and Binary-Parametrised Problems on Quantum Annealers"
collection: publications
permalink: /publication/paper-title-number-3
excerpt: '**Natacha Kuete Meli**, Vladislav Golyanik, Marcel Seelbach Benkner, Michael Moeller'
date: 2025-06-01
venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: 'https://doi.org/10.1109/CVPRxxxxxxxxxxxx'
teaser: '../files/paper3/paper3_banner.png'
poster: '../files/paper3/paper3_poster.pdf'
authors: '<b>Natacha Kuete Meli</b>, Vladislav Golyanik, Marcel Seelbach Benkner, Michael Moeller'
arxiv: 'https://arxiv.org/abs/2503.19718v1'
code: 'https://github.com/nkuetemeli/QuCOOP'
project: 'https://4dqv.mpi-inf.mpg.de/QuCOOP/'
bibtex: true
---

{{ page.authors }}

<img src="/files/paper3/paper3_banner.png" width='700'/>

---
**Abstract:**

>There is growing interest in solving computer vision problems such as mesh or point set alignment using Adiabatic Quantum Computing (AQC). 
Unfortunately, modern experimental AQC devices such as D-Wave only support Quadratic Unconstrained Binary Optimisation (QUBO) problems, which severely limits their applicability. 
This paper proposes a new way to overcome this limitation and introduces QuCOOP, an optimisation framework extending the scope of AQC to composite and binary-parametrised, possibly non-quadratic problems. 
The key idea of QuCOOP is to iteratively approximate the original objective function by a sequel of local (intermediate) QUBO forms, whose binary parameters can be sampled on AQC devices.
We experiment with quadratic assignment problems, shape matching, and point set registration without knowing the correspondences in advance. 
Our approach achieves state-of-the-art results across multiple instances of tested problems.

---
**Ressources**

{% if page.paperurl %}<a href=" {{ page.paperurl }} ">[pdf (coming soon)]</a>{% endif %} 
{% if page.arxiv %}<a href=" {{ page.arxiv }} ">[arxiv]</a>{% endif %} 
{% if page.code %}<a href=" {{ page.code }} ">[github]</a>{% endif %} 
{% if page.video %}<a href=" {{ page.video }} ">[video]</a>{% endif %} 
{% if poster %}<a href=" {{ page.poster }} ">[poster]</a>{% endif %}
{% if poster %}<a href=" {{ page.project }} ">[project page]</a>{% endif %}

---
**Cite [BibTex]:**

    @article{meli2025qucoop,
      title={QuCOOP: A Versatile Framework for Solving Composite and Binary-Parametrised Problems on Quantum Annealers},
      author={Meli, Natacha Kuete and Golyanik, Vladislav and Benkner, Marcel Seelbach and Moeller, Michael},
      journal={arXiv preprint arXiv:2503.19718},
      year={2025}
    }
