const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  const tempo = Number(frm.inTempo.value);

  const arredondar = Math.ceil(tempo / 15);
  const aPagar = arredondar * valor;

  resp.innerText = `Valor a pagar R$ ${aPagar.toFixed(2)}`;
});
