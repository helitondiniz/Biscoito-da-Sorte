// capture first and secund screen
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnReset = document.querySelector("#btnReset");
const openCookie = document.querySelector("#img1");
// events
openCookie.addEventListener("click", raffleMessage);
btnAgain.addEventListener("click", raffleMessage);

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen2.classList.contains("hide")) {
    raffleMessage();
  } else if (e.key == "Enter" && screen1.classList.contains("hide")) {
    raffleMessage();
  }
});

function raffleMessage() {
  toggleScreen();
  let randomNumber = Math.round(Math.random() * 10);

  switch (randomNumber) {
    case 0:
      screen2.querySelector("p").innerText =
        "Quem investe na fé, não precisa contar com a sorte.";
      break;
    case 1:
      screen2.querySelector("p").innerText = "A adversidade é um espelho que reflete o verdadeiro eu.";
      break;
    case 2:
      screen2.querySelector("p").innerText =
        "Quando faltar sorte, faça sobrar atitude. O azar morre de medo de pessoas determinadas.";
      break;
    case 3:
      screen2.querySelector("p").innerText =
        "A vida trará coisas boas se tiver paciência.";
      break;
    case 4:
      screen2.querySelector("p").innerText =
        "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.";
      break;
    case 5:
      screen2.querySelector("p").innerText =
        "Não compense na ira o que lhe falta na razão.";
      break;
    case 6:
      screen2.querySelector("p").innerText =
        "Defeitos e virtudes são apenas dois lados da mesma moeda.";
      break;
    case 7:
      screen2.querySelector("p").innerText =
        "A maior de todas as torres começa no solo.";
      break;
    case 8:
      screen2.querySelector("p").innerText =
        "Sorte é o resultado de muito esforço, trabalho e dedicação.";
      break;
    case 9:
      screen2.querySelector("p").innerText = "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?";
      break;
    case 10:
      screen2.querySelector("p").innerText = "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.";
      break;
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
