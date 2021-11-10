import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirebaseConfig } from './firebase-config';
import{initializeApp} from "firebase/app";
import{getDatabase, ref, set, onValue, get, push} from "firebase/database";
import {getFirebaseConfig} from "./firebase-config";
import { courseCard } from "./courseCard";
//---------------------------------------------------------------------------------------
const student = document.getElementById("student");
const code = document.getElementById("code");
const nameCourse = document.getElementById("course");
const addCourseBtn = document.getElementById("courseBtn");
const listSinBono = document.getElementById("listSinBono");
const listBonoPlata = document.getElementById("listBonoPlata");
const listBonoOro = document.getElementById("listBonoOro");
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
//---------------------------------------------------------------------------------------

//METODOS
function courseRegister (course){                 
    const grup = getDatabase();
    const newCourseRef = push (ref(grup, 'courses'));
    course["id"] = newCourseRef.key;
    set(newCourseRef, course);
}
function getCourses(){
    const grup = getDatabase();
    const refgrup =ref(grup, 'courses');
    onValue(refgrup, (snapshot) =>{
        const data = snapshot.val();
        currentList(data);
    });
}
function currentList(info){
    if(info){
        listSinBono.innerHTML = "";
        listBonoPlata.innerHTML = "";
        listBonoOro.innerHTML = "";
        Object.keys(info).forEach((k,index)=>{
            console.log(k, index);
            const course = new courseCard(info[k]);
            if(info[k].points<=5){
                listSinBono.appendChild(course.render());
            }else if(info[k].points>5 && info[k].bonus<=10){
                listBonoPlata.appendChild(course.render());
            }else if(info[k].points>10){
                listBonoOro.appendChild(course.render());
            }
        });
    }else{
        listSinBono.innerHTML = "NA";
        listBonoPlata.innerHTML = "NA";
        listBonoOro.innerHTML = "NA";
    }
}
courseBtn.addEventListener('ENTER', eventCourse);
getCourses();
const eventCourse = (e, event) =>{
    if(student.value!="" || code.value!="" || course.value!="" ){
        const course = {
            student: student.value,
            code: code.value,
            course: course.value,
            points: 0
        }
        courseRegister(course);
        student.value='';
        code.value='';
        course.value='';
    }
}


