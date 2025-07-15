const cursos = {
  "1er Ciclo": [
    { nombre: "Animales, sociedad y medio ambiente", requisitos: [] },
    { nombre: "Procesos Biológicos 1", requisitos: [] },
    { nombre: "Estructura y función", requisitos: [] },
    { nombre: "Prácticas veterinarias 1", requisitos: [] },
    { nombre: "Liderazgo personal", requisitos: [] },
  ],
  "2do Ciclo": [
    { nombre: "Comunicación", requisitos: [] },
    { nombre: "Desarrollo Humano y Social", requisitos: [] },
    { nombre: "Procesos Biológicos en Organismo Animal", requisitos: ["Procesos Biológicos 1"] },
    { nombre: "Prácticas Veterinarias 2", requisitos: ["Prácticas veterinarias 1"] },
    { nombre: "Integración de los Sistemas 1", requisitos: ["Estructura y función"] },
  ],
  "3er Ciclo": [
    { nombre: "Razonamiento Científico", requisitos: [] },
    { nombre: "Gestión y Búsqueda de Información Científica", requisitos: [] },
    { nombre: "Base de la Cría Animal", requisitos: ["Procesos Biológicos en Organismo Animal"] },
    { nombre: "Agresión y Defensa en Medicina Veterinaria 1", requisitos: ["Procesos Biológicos en Organismo Animal"] },
    { nombre: "Clínica y Conservación de Animales Silvestres", requisitos: ["Prácticas veterinarias 1"] },
    { nombre: "Integración de los Sistemas 2", requisitos: ["Estructura y función"] },
  ],
  "4to Ciclo": [
    { nombre: "Razonamiento Cuantitativo", requisitos: [] },
    { nombre: "Función y Disfunción de los Sistemas", requisitos: ["Integración de los Sistemas 1", "Integración de los Sistemas 2"] },
    { nombre: "Semiotecnia de Caninos y Felinos", requisitos: ["Integración de los Sistemas 1"] },
    { nombre: "Semiotecnia de Animales Grandes", requisitos: ["Integración de los Sistemas 1"] },
    { nombre: "Agresión y Defensa en Medicina Veterinaria 2", requisitos: ["Agresión y Defensa en Medicina Veterinaria 1"] },
  ],
  "5to Ciclo": [
    { nombre: "Estilos de Vida, Medio Ambiente y Salud", requisitos: [] },
    { nombre: "Principios de la Farmacología", requisitos: ["Función y Disfunción de los Sistemas", "Agresión y Defensa en Medicina Veterinaria 2"] },
    { nombre: "Bienestar Animal", requisitos: ["Clínica y Conservación de Animales Silvestres"] },
    { nombre: "Clínica de Porcinos", requisitos: ["Función y Disfunción de los Sistemas", "Agresión y Defensa en Medicina Veterinaria 2"] },
    { nombre: "Enfermedades de Animales Grandes", requisitos: ["Función y Disfunción de los Sistemas", "Semiotecnia de Animales Grandes", "Agresión y Defensa en Medicina Veterinaria 2"] },
    { nombre: "Enfermedades de Caninos y Felinos", requisitos: ["Función y Disfunción de los Sistemas", "Semiotecnia de Caninos y Felinos", "Agresión y Defensa en Medicina Veterinaria 2"] },
    { nombre: "Enfermedades de Aves", requisitos: ["Función y Disfunción de los Sistemas", "Agresión y Defensa en Medicina Veterinaria 2", "Principios de la Farmacología"] }
  ]
};

const container = document.getElementById("malla");
const aprobados = new Set(JSON.parse(localStorage.getItem("aprobados")) || []);

function crearBoton(curso) {
  const btn = document.createElement("button");
  btn.textContent = curso.nombre;
  btn.className = "curso";
  btn.dataset.nombre = curso.nombre;

  if (aprobados.has(curso.nombre)) {
    btn.classList.add("aprobado");
    btn.innerHTML = `<del>${curso.nombre} ✓</del>`;
  }

  const cumpleReqs = curso.requisitos.every(r => aprobados.has(r));
  if (!cumpleReqs && !aprobados.has(curso.nombre)) {
    btn.classList.add("bloqueado");
  }

  btn.addEventListener("click", () => {
    // ✅ Permitir marcar cualquier curso, incluso bloqueado
    btn.classList.toggle("aprobado");

    if (btn.classList.contains("aprobado")) {
      aprobados.add(curso.nombre);
      btn.innerHTML = `<del>${curso.nombre} ✓</del>`;
    } else {
      aprobados.delete(curso.nombre);
      btn.innerHTML = curso.nombre;
    }

    localStorage.setItem("aprobados", JSON.stringify(Array.from(aprobados)));
    renderMalla();
  });

  return btn;
}

function renderMalla() {
  container.innerHTML = "";
  for (const ciclo in cursos) {
    const col = document.createElement("div");
    col.className = "columna";
    const h3 = document.createElement("h3");
    h3.textContent = ciclo;
    col.appendChild(h3);

    for (const curso of cursos[ciclo]) {
      const btn = crearBoton(curso);
      col.appendChild(btn);
    }

    container.appendChild(col);
  }
}

// Inicial
renderMalla();
