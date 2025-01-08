// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // Pega o valor digitado no campo de formulário com ID inNome a atribui a variável nome
    resp.innerText = `Olá, ${nome}!` // Altera o conteúdo de h3 que está no HTML, neste caso atribui a mensagem Olá + o nome digitado

    e.preventDefault() //Evita o comportamento padrão de envio do formulário
})