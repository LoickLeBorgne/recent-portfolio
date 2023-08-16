// contenu des projets


var modalInfo = {
  1: {
    title: "Portfolio",
    info: "Mon tout premier portfolio, langage utilisé : HTML + CSS",
    link: "https://loickleborgne.github.io/ancien-portfolio/",
    github: "https://github.com/LoickLeBorgne/ancien-portfolio"
  },
  2: {
    title: "Second portfolio",
    info: "Mon deuxième portfolio, langage utilisé : HTML + CSS + JavaScript",
    link: "https://loickleborgne.github.io/new-portfolio/",
    github: "https://github.com/LoickLeBorgne/new-portfolio"
  },
  3: {
    title: "Intégration Front-End",
    info: "Intégration Front-End à partir d'une maquette graphique, langage utilisé : HTML + CSS",
    link: "https://loickleborgne.github.io/new-portfolio/",
    github: "https://github.com/LoickLeBorgne/model-integration"
  },
  4: {
    title: "Snake Game (Jeu du serpent)",
    info: "Création du jeu SnakeGame, 2D / Canvas langage utilisé : JavaScript",
    link: "https://loickleborgne.github.io/SnakeGame-JS/",
    github: "https://github.com/LoickLeBorgne/SnakeGame-JS"
  },
  5: {
    title: "TodoList (Liste de tâche)",
    info: "Création d'une todo list avec base de données via une API (JSON, {JSON} Placeholder), Langage utilisé : HTML + CSS JavaScript + FrameWork : BootStrap 4",
    link: "#",
    github: "https://github.com/LoickLeBorgne/todo-front-end"
  },
  6: {
    title: "Création d'un site web avec WordPress, et quelques plugins",
    info: "Réalisation d'un site web avec WordPress, création d'une maquette et intégration sur WordPress, plugins utilisé : Elementor, YesCookies, Contact-Form 7",
    link: "https://act-now-loick.learningcampus.fr/",
    github: "#"
  },
  7: {
    title: "Création d'un site web avec prise de rendez-vous et panel d'administration",
    info: "Réalisation d'un site web avec PHP MySql, Fonctionnalités : Création de compte, système de connexion, prise de rendez-vous, article, paramètre du profil, système de bannissement renvoyant sur une page de bannissement. Panel administrateur : gestion prise de rendez-vous, gestion des utilisateurs, gestion des articles",
    link: "https://doctorphp.alwaysdata.net/",
    github: "https://github.com/LoickLeBorgne/doctor-php"
  }
};

// get les modules
var modal = document.getElementById('preview');

// ouvre les modules id
var btn = document.getElementsByClassName("button__project");

// <span> ferme les modules
var span = document.getElementsByClassName("close")[0];

// ouvre les modules
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var project = btn[i].parentElement;
    openModal(project);
  })
};

function openModal(project) {
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img) {
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function () {
    window.open(modalInfo[id].link, '_blank');
  }
  document.getElementById("github").onclick = function () {
    window.open(modalInfo[id].github, '_blank');
  }
}

// ferme les modules
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}