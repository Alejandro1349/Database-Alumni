class alumno {
    primerNombre;
    SegundoNombre;
    ApellidoPaterno;
    ApellidoMaterno;
    Edad;
    Materias;
    Calificaciones;
    matricula;

    constructor(matricula, primerNombre, SegundoNombre, ApellidoPaterno, ApellidoMaterno, Edad) {
        this.matricula = matricula;
        this.primerNombre = primerNombre;
        this.SegundoNombre = SegundoNombre;
        this.ApellidoPaterno = ApellidoPaterno;
        this.ApellidoMaterno = ApellidoMaterno;
        this.Edad = Edad;
        this.Materias = "";
        this.Calificaciones = "";
    }

    asignarMateria (materia) {
        this.materia = materia;
    }
    asignarCalificacion (calificacion) {
        this.calificacion = calificacion;
    }

}