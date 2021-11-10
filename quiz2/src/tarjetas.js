
import { getDatabase, ref, push, set } from 'firebase/database';

export class tarjetas {
    constructor(course){
        this.course = course; 
    }
//-------------------------------------------------------------------------------------------------------------
   depura(){
        let tjta = document.createElement("div");
        tjta.className = "fondoTarjetaCurso";
        let course = document.createElement("p");
        course.className = "cursoText"
        course.innerHTML = this.course.cursoText;
        let student = document.createElement("p");
        student.className = "studianteText"
        student.innerHTML = this.course.studianteText;
        let code = document.createElement("p");
        code.className = "codigoText"
        code.innerHTML = this.course.codigoText;

        let points= document.createElement('h4');
        points.className="puntosText";
        points.innerHTML = this.course.puntosText;

       //-------------------------------------------------------------------------------------------------  
        //Botones
         let eliminarBtn=document.createElement('button');
         eliminarBtn.className = "eliminarBtn";
         eliminarBtn.innerHTML = "x";

         eliminarBtn.addEventListener("click", (e, ev)=>{
            const db = getDatabase();
            const courseRef = ref(db,'courses/'+this.course.id);
            set(courseRef, null);
        });
       
        let puntosFinalesBtn=document.createElement('button');
        puntosFinalesBtn.className = "puntosFinalesBtn";
        puntosFinalesBtn.innerHTML = "+";
        puntosFinalesBtn.addEventListener ("click", (e, ev)=>{
            const db = getDatabase();
            const courseRef = ref(db,'courses/'+this.course.id+ '/points');
            set(courseRef, this.course.points+1);
        });
 //--------------------------------------------------------------------------------------------------------------------
        tjta.appendChild(ststudianteTextdent);
        tjta.appendChild(codigoText);
        tjta.appendChild(puntosText);
        tjta.appendChild(puntosFinalesBtn);
        tjta.appendChild(eliminarBtn);

        return tjta;
    }
}