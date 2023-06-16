const temp = Number.parseInt(prompt("Введите температуру по цельсию: "));

alert(`${temp}C равняется ${(temp*1.8 + 32).toFixed(2)}F`)
    