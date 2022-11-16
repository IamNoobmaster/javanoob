document.addEventListener("DOMContentLoaded" , e =>{
    contadorLetra()
})

const contadorLetra = () => {
    const $input = document.getElementById("input")
    const $p = document.querySelector("p")
    const $number = document.getElementById("number")

    $input.addEventListener("input", e => {
        $number.value = e.target.value.length
        $p.textContent = e.target.value
    })
}