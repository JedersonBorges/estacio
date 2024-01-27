swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

shuffle = (vetor, quant) => {
    for (let i = 0; i < quant; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

bubble_sort = (vetor) => {
    const n = vetor.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

selection_sort = (vetor) => {
    const n = vetor.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(vetor, i, minIndex);
        }
    }
};

quick_sort = (vetor, start, end) => {
    if (start < end) {
        const pivotIndex = particionamento(vetor, start, end);
        quick_sort(vetor, start, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, end);
    }
};

particionamento = (vetor, start, end) => {
    const pivot = vetor[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (vetor[j] <= pivot) {
            i++;
            swap(vetor, i, j);
        }
    }

    swap(vetor, i + 1, end);
    return i + 1;
};

function adicionar() {
    const valorInput = document.getElementById("valor");
    const listaValores = document.getElementById("valores");
    const avisoDiv = document.getElementById("aviso");

    avisoDiv.innerHTML = "";

    if (valorInput.value.trim() === "") {
        avisoDiv.innerHTML = "Por favor, insira um número para adicionar à lista.";
        return;
    }

    const valorAtual = parseInt(valorInput.value);
    const valoresNaLista = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));
    if (valoresNaLista.includes(valorAtual)) {
        avisoDiv.innerHTML = "Este valor já está na lista. Insira um valor diferente.";
        return;
    }

    const node = document.createElement("li");
    const textNode = document.createTextNode(valorInput.value);
    node.appendChild(textNode);

    listaValores.appendChild(node);

    valorInput.value = "";
}


function ordenar() {
    const listaValores = document.getElementById("valores");
    const listaAlgoritmo = document.getElementById("algoritmo");

    const valores = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));

    let algoritmoSelecionado = listaAlgoritmo.value;

    switch (algoritmoSelecionado) {
        case "bubble_sort":
            bubble_sort(valores);
            break;
        case "selection_sort":
            selection_sort(valores);
            break;
        case "quick_sort":
            quick_sort(valores, 0, valores.length - 1);
            break;
        default:
            break;
    }

    listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).reduce((acc, curr) => acc + curr, "");
}

function misturar() {
    const listaValores = document.getElementById("valores");

    const valores = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));
    
    shuffle(valores, valores.length);

    listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).reduce((acc, curr) => acc + curr, "");
}

function limparLista() {
    const listaValores = document.getElementById("valores");
    listaValores.innerHTML = ""; 
}
















/*swap = (vetor, pos1, pos2) => {

}

shuffle = (vetor, quant) => {

}

bubble_sort = (vetor) => {

}

selection_sort = (vetor) => {

}

quick_sort = (vetor, start, end) => {
    
}

particionamento = (vetor, start, end, pivot) => {

}*/