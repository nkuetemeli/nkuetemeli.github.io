---
title: "A universal quantum algorithm for weighted maximum cut and Ising problems"
collection: publications
permalink: /publication/paper-title-number-2
excerpt: '**Natacha Kuete Meli**, Florian Mannel and Jan Lellmann'
date: 2023-10-01
venue: 'Springer Quantum Inf Process'
paperurl: 'https://doi.org/10.1007/s11128-023-04025-x'
teaser: '/files/paper2/paper2_banner.png'
poster: '/files/paper2/paper2_poster.pdf'
authors: '<b>Natacha Kuete Meli</b>, Florian Mannel and Jan Lellmann'
arxiv: 'https://arxiv.org/abs/2306.06539'
code: 'https://github.com/nkuetemeli/UQMaxCutAndIsing'
bibtex: true
---

{{ page.authors }}

<img src="/files/paper2/paper2_banner.png" width='1000'/>

---
**Abstract:**

>We propose a hybrid quantum-classical algorithm to compute approximate solutions of binary combinatorial problems. We employ a shallow-depth quantum circuit to implement a unitary and Hermitian operator that block-encodes the weighted maximum cut or the Ising Hamiltonian. Measuring the expectation of this operator on a variational quantum state yields the variational energy of the quantum system. The system is enforced to evolve toward the ground state of the problem Hamiltonian by optimizing a set of angles using normalized gradient descent. Experimentally, our algorithm outperforms the state-of-the-art quantum approximate optimization algorithm on random fully connected graphs and challenges D-Wave quantum annealers by producing good approximate solutions.

---
**Ressources**

{% if page.paperurl %}<a href=" {{ page.paperurl }} ">[pdf]</a>{% endif %} 
{% if page.arxiv %}<a href=" {{ page.arxiv }} ">[arxiv]</a>{% endif %} 
{% if page.code %}<a href=" {{ page.code }} ">[github]</a>{% endif %} 
{% if page.video %}<a href=" {{ page.video }} ">[video]</a>{% endif %} 
{% if poster %}<a href=" {{ page.poster }} ">[poster]</a>{% endif %}


---
**Cite [BibTex]:**


    @article{kuete2023universal,
      title={A universal quantum algorithm for weighted maximum cut and Ising problems},
      author={Kuete Meli, Natacha and Mannel, Florian and Lellmann, Jan},
      journal={Quantum Information Processing},
      volume={22},
      number={7},
      pages={279},
      year={2023},
      publisher={Springer}
    }
