function GuardarAlumno(){
    if(localStorage.getItem("Materias")===null){
        console.log("1");
        var matricula = document.getElementById();
        var materias = document.getElementById()
        
        localStorage.setItem("Alumnos",JSON.stringify(arrAlumnos));
        console.log(JSON.parse(localStorage.getItem("Alumnos")));
    }
    else if(localStorage.getItem("Alumnos")!==null){
        console.log("2");
        var arrAlumnos = JSON.parse(localStorage.getItem("Alumnos"));
        var largo = arrAlumnos.length;
        var ultimoAlumno = arrAlumnos[largo - 1];
        var matricula = ultimoAlumno["matricula"] + 1;
        var alumno = {"matricula": matricula,"nombre": document.getElementById("PrimerNombre").value, "segundoNombre": document.getElementById("SegundoNombre").value, "apellidoPaterno": document.getElementById("ApellidoPaterno").value, "ApellidoMaterno": document.getElementById("ApellidoMaterno").value, "Edad": document.getElementById("Edad").value}
        arrAlumnos.push(alumno);
        localStorage.setItem("Alumnos",JSON.stringify(arrAlumnos));
        console.log(JSON.parse(localStorage.getItem("Alumnos")));
        console.log(arrAlumnos)
    }
}