function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

document.getElementById('calcular').addEventListener('click', function() {
    let n = parseInt(document.getElementById('numero').value);
    if (isNaN(n) || n < 1) {
        alert('Por favor, ingrese un número válido mayor que 0.');
        return;
    }
    let resultado = fibonacci(n);
    document.getElementById('resultado').textContent = `Los primeros ${n} números de Fibonacci son:`;
    let lista = document.getElementById('lista-fibonacci');
    lista.innerHTML = '';
    resultado.forEach((num, index) => {
        let li = document.createElement('li');
        li.textContent = `Fibonacci(${index}) = ${num}`;
        lista.appendChild(li);
    });
});

document.getElementById('limpiar').addEventListener('click', function() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('lista-fibonacci').innerHTML = '';
});

document.getElementById('salir').addEventListener('click', function() {
    if (confirm('¿Está seguro que desea salir?')) {
        window.close();
    }
});