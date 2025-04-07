const button = document.getElementById('theme-toggle');
const html = document.documentElement;
const icon = document.getElementById('icon-theme');

// Detecta o tema salvo ou o do sistema
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'light') {
  html.classList.add('light');
  icon.setAttribute('name', 'moon');
} else if (!savedTheme && !prefersDark) {
  html.classList.add('light');
  icon.setAttribute('name', 'moon');
} else {
  icon.setAttribute('name', 'sunny');
}

button.addEventListener('click', () => {
  html.classList.toggle('light');

  if (html.classList.contains('light')) {
    icon.setAttribute('name', 'moon');
    localStorage.setItem('theme', 'light');
  } else {
    icon.setAttribute('name', 'sunny');
    localStorage.setItem('theme', 'dark');
  }
});

const frases = [
  "Conectando você aos meus links...",
  "Sinta-se à vontade!",
  "Clique nos botões abaixo!",
  "Seja Bem-vindo(a)...!"
];

const container = document.getElementById("typing-container");
let i = 0; // frase atual
let j = 0; // caractere atual

function digitar() {
  if (j < frases[i].length) {
    container.textContent += frases[i][j];
    j++;
    setTimeout(digitar, 100); // velocidade da digitação
  } else {
    setTimeout(() => {
      container.textContent = "";
      i = (i + 1) % frases.length;
      j = 0;
      digitar();
    }, 2000); // tempo entre frases
  }
}

digitar();

const falas = [
  "Oiê! Precisa de ajuda?",
  "Clique em algum link acima!",
  "Como vai a Albedo Bot?",
  "Sayo está olhando você!",
  "Chama meu mestre no Discord se quiser algo.",
  "Gostou dos serviços da nossa bot albedo",
  "Meu mestre não ama você, mais eu sim Hihi ^-^",
  "Te Amooo",
  "Oiiê, faz cafune em mim ^^",
  "Cheirinho na venta ^^",
  "Lembre-se, só chame meu mestre se precisar",
  "Não vá perturba meu dono.."
];

const fala = document.getElementById("fala-mascote");

function mostrarFala() {
  const texto = falas[Math.floor(Math.random() * falas.length)];
  fala.textContent = texto;
  fala.style.opacity = 1;
  fala.style.transform = "translateY(0)";

  setTimeout(() => {
    fala.style.opacity = 0;
    fala.style.transform = "translateY(10px)";
  }, 4000);
}

// Troca a fala a cada 8 segundos
setInterval(mostrarFala, 8000);

// Primeira fala depois de 2 segundos
setTimeout(mostrarFala, 2000);