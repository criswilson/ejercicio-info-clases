let materias = {
  fisica: [`Pérez`, `Pedro`, `Pepito`, `Cofla`, `María`],
  programacion: [`Wilson`, `Pedro`, `Juan`, `Pepito`],
  logica: [`Hernández`, `Pedro`, `Juan`, `Pepito`, `Cofla`, `María`],
  quimica: [`Rodríguez`, `Pedro`, `Juan`, `Pepito`, `Cofla`, `María`],
};

const inscribir = (alumno, materia) => {
  personas = materias[materia];
  if (personas.length >= 21) {
    document.write(
      `Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas<br><br>`
    );
  } else {
    personas.push(alumno);
    if (materia == `fisica`) {
      materias = {
        fisica: personas,
        programacion: materias[`programacion`],
        logica: materias[`logica`],
        quimica: materias[`quimica`],
      };
    } else if (materia == `programacion`) {
      materias = {
        fisica: materias[`fisica`],
        programacion: personas,
        logica: materias[`logica`],
        quimica: materias[`quimica`],
      };
    } else if (materia == `logica`) {
      materias = {
        fisica: materias[`fisica`],
        programacion: materias[`programacion`],
        logica: personas,
        quimica: materias[`quimica`],
      };
    } else if (materia == `quimica`) {
      materias = {
        fisica: materias[`fisica`],
        programacion: materias[`programacion`],
        logica: materias[`logica`],
        quimica: personas,
      };
    }
    document.write(
      `¡Felicidades <b>${alumno}</b>! Te has inscripto a <b>${materia}</b> correctamente<br><br>`
    );
  }
};

document.write(`${materias["fisica"]}<br>`);

inscribir(`Pedrito`, `fisica`);
inscribir(`Jorgito`, `fisica`);
inscribir(`Ramses`, `fisica`);
inscribir(`Wacho1`, `fisica`);
inscribir(`Zafaroni`, `fisica`);
inscribir(`Waldo`, `fisica`);
inscribir(`Jorge`, `fisica`);
inscribir(`Sergtio`, `fisica`);
inscribir(`Xavi`, `fisica`);
inscribir(`Xabi`, `fisica`);
inscribir(`Isabel`, `fisica`);
inscribir(`Portugal`, `fisica`);
inscribir(`Minino`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Maxi`, `fisica`);
inscribir(`Casero`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);
inscribir(`Pedrito`, `fisica`);

document.write(`<br>${materias["fisica"]}`);
