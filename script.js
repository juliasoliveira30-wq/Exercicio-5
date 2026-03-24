function iniciar() {
    const nome = document.getElementById("nome").value || "Guerreiro(a)";
    let cosmo = Number(document.getElementById("cosmo").value);

    const resultado = document.getElementById("resultado");

    // 🚨 VALIDAÇÃO
    if (!cosmo || cosmo <= 0) {
        alert("Digite um cosmo válido!");
        return;
    }

    const sacrificio = confirm("Deseja sacrificar seu sentido para dobrar o cosmo?");

    if (sacrificio) {
        cosmo *= 2;
    }

    cosmo -= 200;

    resultado.className = "mt-6 p-4 rounded shadow";

    if (cosmo >= 1000) {
        resultado.classList.add("bg-green-100", "text-green-800");
        resultado.innerHTML = `<strong>${nome}</strong>, você salvou Athena! Cosmo: ${cosmo}`;
    } 
    else if (cosmo > 0) {
        resultado.classList.add("bg-yellow-100", "text-yellow-800");
        resultado.innerHTML = `${nome}, você sobreviveu... mas falhou. Cosmo: ${cosmo}`;
    } 
    else {
        resultado.classList.add("bg-red-100", "text-red-800");
        resultado.innerHTML = `${nome}, você morreu na missão. Cosmo: ${cosmo}`;
    }

    resultado.classList.remove("hidden");
}

function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("cosmo").value = "";

    const resultado = document.getElementById("resultado");
    resultado.className = "mt-6 p-4 rounded hidden";
    resultado.innerHTML = "";
}