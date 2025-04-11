const personas = [
    new Persona('Rosa', 'Vela'),
    new Persona('Fernando', 'Tang')
]


function mostrarPersonas(){
    let  texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    let persons = document.querySelector('.personas');
    persons.innerHTML = texto;
    console.log(texto);
}
mostrarPersonas();

let btnAgregarPersona = document.querySelector('.btn-agregar-personas');
btnAgregarPersona.addEventListener('click', agregarPersona);

function agregarPersona(){
    let nombre = document.querySelector('.nombre');
    let apellido = document.querySelector('.apellido');
    let persona = new Persona(nombre.value,apellido.value);
    personas.push(persona);
    mostrarPersonas();
    nombre.value= '';
    apellido.value= '';
}

