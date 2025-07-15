const childrenMap = {
  "Procesos Biológicos 1": ["Procesos Biológicos en Organismo Animal"],
  "Estructura y función": ["Integración de los Sistemas 1", "Integración de los Sistemas 2"],
  "Prácticas veterinarias 1": ["Prácticas Veterinarias 2", "Clínica y Conservación de Animales Silvestres"],
  "Procesos Biológicos en Organismo Animal": ["Base de la Cría Animal", "Agresión y Defensa en Medicina Veterinaria 1"],
  "Prácticas Veterinarias 2": [
    "Semiotecnia de Caninos y Felinos",
    "Semiotecnia de Animales Grandes",
    "Principios de la Farmacología",
    "Clínica de Porcinos",
    "Enfermedades de Caninos y Felinos"
  ],
  "Integración de los Sistemas 1": [
    "Función y Disfunción de los Sistemas",
    "Semiotecnia de Caninos y Felinos",
    "Semiotecnia de Animales Grandes"
  ],
  "Agresión y Defensa en Medicina Veterinaria 1": ["Agresión y Defensa en Medicina Veterinaria 2"],
  "Clínica y Conservación de Animales Silvestres": ["Bienestar Animal"],
  "Integración de los Sistemas 2": [
    "Función y Disfunción de los Sistemas",
    "Semiotecnia de Caninos y Felinos",
    "Semiotecnia de Animales Grandes"
  ],
  "Razonamiento Científico": ["Metodología de la Investigación Científica"],
  "Gestión y Búsqueda de Información Científica": ["Metodología de la Investigación Científica"],
  "Agresión y Defensa en Medicina Veterinaria 2": [
    "Principios de la Farmacología",
    "Clínica de Porcinos",
    "Enfermedades de Animales Grandes",
    "Enfermedades de Caninos y Felinos",
    "Nutrición Animal",
    "Enfermedades de Aves"
  ],
  "Función y Disfunción de los Sistemas": [
    "Principios de la Farmacología",
    "Clínica de Porcinos",
    "Enfermedades de Animales Grandes",
    "Enfermedades de Caninos y Felinos",
    "Nutrición Animal",
    "Enfermedades de Aves"
  ],
  "Semiotecnia de Animales Grandes": ["Enfermedades de Animales Grandes"],
  "Principios de la Farmacología": [
    "Farmacología y Toxicología Veterinaria",
    "Nutrición Animal",
    "Enfermedades de Aves"
  ],
  "Bienestar Animal": ["Seminario Integrador 1", "Externado"],
  "Clínica de Porcinos": ["Seminario Integrador 1", "Externado"],
  "Enfermedades de Animales Grandes": ["Clínica de Animales Grandes 1"],
  "Enfermedades de Caninos y Felinos": ["Clínica de Caninos y Felinos"],
  "Farmacología y Toxicología Veterinaria": ["Seminario Integrador 1", "Externado"],
  "Nutrición Animal": ["Seminario Integrador 1", "Externado"],
  "Clínica de Caninos y Felinos": ["Seminario Integrador 1", "Externado"],
  "Clínica de Animales Grandes 1": ["Seminario Integrador 1", "Externado"],
  "Enfermedades de Aves": ["Seminario Integrador 1", "Externado"],
  "Metodología de la Investigación Científica": [
    "Epidemiología y Salud Pública 1",
    "Proyecto de Investigación 1"
  ],
  "Seminario Integrador 1": ["Seminario Integrador 2"],
  "Externado": ["Internado 1"],
  "Proyecto de Investigación 1": ["Curso de Trabajo de Investigación - Proyecto de Investigación 2"],
  "Seminario Integrador 2": ["Seminario Integrador 3"],
  "Internado 1": ["Internado 2"]
};

const mallaPorCiclo = {
  "1er Ciclo": [
    "Animales, sociedad y medio ambiente",
    "Procesos Biológicos 1",
    "Estructura y función",
    "Prácticas veterinarias 1",
    "Liderazgo personal"
  ],
  "2do Ciclo": [
    "Comunicación",
    "Desarrollo Humano y Social",
    "Procesos Biológicos en Organismo Animal",
    "Prácticas Veterinarias 2",
    "Integración de los Sistemas 1"
  ],
  "3er Ciclo": [
    "Razonamiento Científico",
    "Gestión y Búsqueda de Información Científica",
    "Base de la Cría Animal",
    "Agresión y Defensa en Medicina Veterinaria 1",
    "Clínica y Conservación de Animales Silvestres",
    "Integración de los Sistemas 2"
  ],
  "4to Ciclo": [
    "Razonamiento Cuantitativo",
    "Función y Disfunción de los Sistemas",
    "Semiotecnia de Caninos y Felinos",
    "Semiotecnia de Animales Grandes",
    "Agresión y Defensa en Medicina Veterinaria 2"
  ],
  "5to Ciclo": [
    "Estilos de Vida, Medio Ambiente y Salud",
    "Principios de la Farmacología",
    "Bienestar Animal",
    "Clínica de Porcinos",
    "Enfermedades de Animales Grandes",
    "Enfermedades de Caninos y Felinos"
  ],
  "6to Ciclo": [
    "Farmacología y Toxicología Veterinaria",
    "Nutrición Animal",
    "Clínica de Caninos y Felinos",
    "Clínica de Animales Grandes 1",
    "Enfermedades de Aves"
  ],
  "7mo Ciclo": [
    "Ética y Profesionalismo",
    "Gestión en Medicina Veterinaria",
    "Metodología de la Investigación Científica"
  ],
  "8vo Ciclo": [
    "Epidemiología y Salud Pública 1",
    "Seminario Integrador 1",
    "Externado",
    "Proyecto de Investigación 1"
  ],
  "9no Ciclo": [
    "Seminario Integrador 2",
    "Epidemiología y Salud Pública 2",
    "Internado 1"
  ],
  "10mo Ciclo": [
    "Curso de Trabajo de Investigación - Proyecto de Investigación 2",
    "Seminario Integrador 3",
    "Internado 2"
  ]
};
// Construimos el mapa de prerequisitos al revés
const prerequisitesMap = {};
for (const [parent, children] of Object.entries(childrenMap)) {
  for (const child of children) {
    if (!prerequisitesMap[child]) prerequisitesMap[child] = [];
    prerequisitesMap[child].push(parent);
  }
}

// Convierte nombres a IDs seguros
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

// Obtiene el contenedor principal del HTML
const container = document.getElementById('grid-container');
container.innerHTML = ''; // Limpia si había algo

// Crea las columnas por ciclo y cursos dentro
for (const [ciclo, cursos] of Object.entries(mallaPorCiclo)) {
  const col = document.createElement('div');
  col.className = 'column';

  const title = document.createElement('div');
  title.className = 'column-title';
  title.textContent = ciclo;
  col.appendChild(title);

  cursos.forEach(nombre => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = slugify(nombre);
    cell.innerHTML = `<div class="name">${nombre}</div>`;
    (prerequisitesMap[nombre] ? cell.classList.add('locked') : cell.classList.add('enabled'));
    col.appendChild(cell);
  });

  container.appendChild(col);
}

// Al hacer clic en un curso habilitado, se aprueba
container.addEventListener('click', e => {
  const cell = e.target.closest('.cell');
  if (!cell || !cell.classList.contains('enabled')) return;
  cell.classList.toggle('approved');
  updateUnlocks();
});

// Función para actualizar qué cursos están habilitados
function updateUnlocks() {
  Object.entries(prerequisitesMap).forEach(([curso, prereqs]) => {
    const el = document.getElementById(slugify(curso));
    if (el.classList.contains('approved')) return;
    const desbloqueado = prereqs.every(p =>
      document.getElementById(slugify(p)).classList.contains('approved')
    );
    el.classList.toggle('enabled', desbloqueado);
    el.classList.toggle('locked', !desbloqueado);
  });
}

// Ejecutamos una vez al cargar
updateUnlocks();
