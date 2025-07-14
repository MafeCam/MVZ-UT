const semestres = {
  "1° Semestre": [
    "Química orgánica",
    "Principios de estadística aplicada a las ciencias pecuarias",
    "Competencias comunicativas",
    "Iniciación a las ciencias pecuarias",
    "Biología celular",
    "Inglés I"
  ],
  "2° Semestre": [
    "Epistemología",
    "Etología y bienestar animal",
    "Ética y bioética",
    "Antropología cultural",
    "Biología molecular",
    "Bioquímica",
    "Biofísica",
    "Inglés II"
  ],
  "3° Semestre": [
    "Fisiología animal",
    "Histología animal",
    "Sociología rural",
    "Anatomía animal",
    "Economía agraria"
  ],
  "4° Semestre": [
    "Suelos y recursos forrajeros",
    "Patología general",
    "Parasitología y enfermedades parasitarias",
    "Microbiología veterinaria",
    "Proyectos de investigación",
    "Inmunología veterinaria"
  ],
  "5° Semestre": [
    "Enfermedades infecciosas",
    "Nutrición de monogástricos",
    "Nutrición de rumiantes",
    "Patología sistémica",
    "Herencia, variación y mejoramiento genético animal",
    "Constitución política"
  ],
  "6° Semestre": [
    "Medicina veterinaria preventiva y epidemiología",
    "Farmacología y terapéutica veterinaria",
    "Patología clínica",
    "Semiología",
    "Desarrollo rural",
    "Sistemas de producción"
  ],
  "7° Semestre": [
    "Reproducción animal",
    "Cirugía veterinaria",
    "Salud pública veterinaria",
    "Medicina interna",
    "Toxicología médica y de la reproducción",
    "Administración y gerencia de empresas pecuarias"
  ],
  "8° Semestre": [
    "Formulación y evaluación de proyectos",
    "Clínica de grandes animales",
    "Clínica de pequeños animales"
  ],
  "9° Semestre": [
    "Producción y salud de ovinos y caprinos",
    "Producción y salud avícola",
    "Producción y salud de equinos",
    "Producción y salud de porcinos",
    "Producción y salud bovina",
    "Tecnología de alimentos",
    "Industrias pecuarias"
  ],
  "10° Semestre": [
    "Pasantía",
    "Opción de grado"
  ]
};

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

  "Enfermedades infecciosas": [
    "Parasitología y enfermedades parasitarias",
    "Microbiología veterinaria",
    "Inmunología veterinaria",
    "Patología general"
  ],
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
  "Medicina interna": [
    "Farmacología y terapéutica veterinaria",
    "Semiología",
    "Medicina veterinaria preventiva y epidemiología"
  ],
  "Toxicología médica y de la reproducción": ["Farmacología y terapéutica veterinaria"],
  "Administración y gerencia de empresas pecuarias": [],

  "Formulación y evaluación de proyectos": [
    "Reproducción animal",
    "Cirugía veterinaria",
    "Salud pública veterinaria",
    "Medicina interna",
    "Toxicología médica y de la reproducción",
    "Administración y gerencia de empresas pecuarias"
  ],
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
const malla = document.getElementById("malla");

function crearMalla() {
  malla.innerHTML = "";
  for (const [semestre, ramosSemestre] of Object.entries(semestres)) {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");

    const h2 = document.createElement("h2");
    h2.textContent = semestre;
    divSemestre.appendChild(h2);

    const contenedor = document.createElement("div");
    contenedor.classList.add("grid-container");

    for (const ramo of ramosSemestre) {
      const div = document.createElement("div");
      div.classList.add("ramo");

      const requisitos = ramos[ramo] || [];
      const desbloqueado = requisitos.every(r => aprobado.has(r));

      if (!desbloqueado) div.classList.add("bloqueado");
      if (aprobado.has(ramo)) div.classList.add("aprobado");

      div.innerText = ramo;
      div.onclick = () => {
        if (!desbloqueado) return;
        aprobado.add(ramo);
        crearMalla();
      };

      contenedor.appendChild(div);
    }

    divSemestre.appendChild(contenedor);
    malla.appendChild(divSemestre);
  }
}

crearMalla();
