const ramos = {
  "Química orgánica": [],
  "Principios de estadística aplicada a las ciencias pecuarias": [],
  "Competencias comunicativas": [],
  "Iniciación a las ciencias pecuarias": [],
  "Biología celular": [],
  "Inglés I": [],

  "Epistemología": [],
  "Etología y bienestar animal": ["Iniciación a las ciencias pecuarias"],
  "Ética y bioética": [],
  "Antropología cultural": [],
  "Biología molecular": ["Principios de estadística aplicada a las ciencias pecuarias", "Biología celular"],
  "Bioquímica": ["Química orgánica"],
  "Biofísica": [],
  "Inglés II": ["Inglés I"],

  "Fisiología animal": ["Biofísica", "Bioquímica"],
  "Histología animal": ["Biología celular"],
  "Sociología rural": ["Antropología cultural"],
  "Anatomía animal": ["Biofísica"],
  "Economía agraria": [],

  "Suelos y recursos forrajeros": ["Iniciación a las ciencias pecuarias", "Química orgánica"],
  "Patología general": ["Histología animal"],
  "Parasitología y enfermedades parasitarias": ["Fisiología animal", "Anatomía animal"],
  "Microbiología veterinaria": ["Biología celular"],
  "Proyectos de investigación": ["Epistemología"],
  "Inmunología veterinaria": ["Biología celular"],

  "Enfermedades infecciosas": ["Parasitología y enfermedades parasitarias", "Microbiología veterinaria", "Inmunología veterinaria", "Patología general", "Fisiología animal", "Anatomía animal"],
  "Nutrición de monogástricos": ["Bioquímica"],
  "Nutrición de rumiantes": ["Suelos y recursos forrajeros"],
  "Patología sistémica": ["Patología general"],
  "Herencia, variación y mejoramiento genético animal": ["Principios de estadística aplicada a las ciencias pecuarias"],
  "Constitución política": [],

  "Medicina veterinaria preventiva y epidemiología": ["Enfermedades infecciosas"],
  "Farmacología y terapéutica veterinaria": ["Enfermedades infecciosas"],
  "Patología clínica": ["Enfermedades infecciosas"],
  "Semiología": ["Fisiología animal", "Anatomía animal"],
  "Desarrollo rural": ["Sociología rural"],
  "Sistemas de producción": [],

  "Reproducción animal": ["Enfermedades infecciosas"],
  "Cirugía veterinaria": ["Semiología", "Farmacología y terapéutica veterinaria"],
  "Salud pública veterinaria": ["Medicina veterinaria preventiva y epidemiología"],
  "Medicina interna": ["Farmacología y terapéutica veterinaria", "Semiología", "Medicina veterinaria preventiva y epidemiología"],
  "Toxicología médica y de la reproducción": ["Farmacología y terapéutica veterinaria"],
  "Administración y gerencia de empresas pecuarias": [],

  "Formulación y evaluación de proyectos": ["Reproducción animal", "Cirugía veterinaria", "Salud pública veterinaria", "Medicina interna", "Toxicología médica y de la reproducción", "Administración y gerencia de empresas pecuarias"],
  "Clínica de grandes animales": ["Reproducción animal", "Cirugía veterinaria", "Medicina interna"],
  "Clínica de pequeños animales": ["Reproducción animal", "Cirugía veterinaria", "Medicina interna"],

  "Producción y salud de ovinos y caprinos": ["Clínica de grandes animales"],
  "Producción y salud avícola": ["Clínica de grandes animales"],
  "Producción y salud de equinos": ["Clínica de grandes animales"],
  "Producción y salud de porcinos": ["Clínica de grandes animales"],
  "Producción y salud bovina": ["Clínica de grandes animales"],
  "Tecnología de alimentos": ["Clínica de grandes animales"],
  "Industrias pecuarias": ["Clínica de grandes animales"],

  "Pasantía": ["Producción y salud bovina"],
  "Opción de grado": ["Producción y salud bovina"]
};

const aprobado = new Set();
const contenedor = document.getElementById("malla");

function crearMalla() {
  contenedor.innerHTML = "";
  Object.keys(ramos).forEach(nombre => {
    const div = document.createElement("div");
    div.classList.add("ramo");

    const requisitos = ramos[nombre];
    const desbloqueado = requisitos.every(r => aprobado.has(r));

    if (!desbloqueado) div.classList.add("bloqueado");
    if (aprobado.has(nombre)) div.classList.add("aprobado");

    div.innerText = nombre;
    div.onclick = () => {
      if (!desbloqueado) return;
      aprobado.add(nombre);
      crearMalla();
    };

    contenedor.appendChild(div);
  });
}

crearMalla();

