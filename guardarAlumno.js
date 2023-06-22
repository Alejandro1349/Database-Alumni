function GuardarAlumno(){
    if(localStorage.getItem("Alumnos")===null){
        var arrAlumnos=[];
        arrAlumnos = [{ "matricula": 100101, "nombre": document.getElementById("PrimerNombre").value, "segundoNombre": document.getElementById("SegundoNombre").value, "apellidoPaterno": document.getElementById("ApellidoPaterno").value, "ApellidoMaterno": document.getElementById("ApellidoMaterno").value, "Edad": document.getElementById("Edad").value}];
        localStorage.setItem("Alumnos",JSON.stringify(arrAlumnos));
        console.log(JSON.parse(localStorage.getItem("Alumnos")));
    }
    else if(localStorage.getItem("Alumnos")!==null){
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
/*(Object.keys(alumno)).forEach(key => {
    
});*/