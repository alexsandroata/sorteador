var jogadores = ["Bash", "Berex", "Caçador", "GORDINHO", "H1dro", "Killer", "mAI0NESY", "Maksmiller", "Mikasa", "Pivete", "QueenLatifa", "Rafaela", "Tiradentesgg", "Xandyn"];
var time1 = [];
var time2 = [];

window.onload = function() {
    for (var i = 0; i < jogadores.length; i++) {
        var li = document.createElement("li");
        li.textContent = jogadores[i];
        li.addEventListener("click", function(e) {
            var index = jogadores.indexOf(e.target.textContent);
            if (index !== -1) {
                jogadores.splice(index, 1);
                e.target.remove();
            }
        });
        document.getElementById("jogadores").appendChild(li);
    }

    // Adicione o evento de clique ao botão "Sortear Times"
    document.querySelector('button[onclick="adicionarJogador()"]').addEventListener('click', function() {
        document.getElementById('buttonLimitSound').play();
    });
    document.querySelector('button[onclick="sortearTimes()"]').addEventListener('click', function() {
        document.getElementById('buttonLimitSound').play();
    });
    document.querySelector('button[onclick="limparNomes()"]').addEventListener('click', function() {
        document.getElementById('buttonCleanSound').play();
    });
}

function adicionarJogador() {
    var nome = document.getElementById("nome").value;
    if (nome.trim() !== "") {
        jogadores.push(nome);
        document.getElementById("jogadores").innerHTML += "<li>" + nome + "</li>";
        document.getElementById("nome").value = "";
    }
}

function sortearTimes() {
    // Limpar as equipes
    time1 = [];
    time2 = [];
    document.getElementById("listaTime1").innerHTML = "";
    document.getElementById("listaTime2").innerHTML = "";

    // Embaralhar a lista de jogadores
    jogadores.sort(() => Math.random() - 0.5);

    // Distribuir os jogadores entre as equipes
    for (var i = 0; i < jogadores.length; i++) {
        if (i % 2 == 0) {
            time1.push(jogadores[i]);
            document.getElementById("listaTime1").innerHTML += "<li>" + jogadores[i] + "</li>";
        } else {
            time2.push(jogadores[i]);
            document.getElementById("listaTime2").innerHTML += "<li>" + jogadores[i] + "</li>";
        }
    }
}

function limparNomes() {
    jogadores = [];
    document.getElementById("jogadores").innerHTML = "";
}