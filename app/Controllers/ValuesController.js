import { ProxyState } from "../AppState.js";
import { Aardvark } from "../Models/aadrvark.js";
import { Bat } from "../Models/bat.js";
import { Cat } from "../Models/cat.js";
import { Deer } from "../Models/deer.js";
import { Eel } from "../Models/eel.js";
import { Ferret } from "../Models/ferret.js";
import { Galago } from "../Models/galago.js";
import { Heron } from "../Models/heron.js";
import { Impala } from "../Models/impala.js";
import { Jackal } from "../Models/jackal.js";
import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";

let animals = [
    new Aardvark("Arthur", "Brown", "M", 30, 2, true),
    new Bat("Barry", "Black", "F", 3, 55, false, false),
    new Cat("Clarence", "Tabby", "M", 30, 17, false, true),
    new Deer("Drake", "Brown", "M", 178, 28, true, true),
    new Eel("Elmer", "Gray", "F", 1500, 88, true),
    new Ferret("Feral", "Orange", "F", 1, 22, false),
    new Galago("Gerry", "Blue", "M", 10, 23, true),
    new Heron("Harrison", "Orange", "M", 22, 90, true),
    new Impala("Igor", "Brown", "F", 66, 23, true),
    new Jackal("Jeremy", "Spotted", "M", 55, 32, false)
  ]
  
  let jeremy = new Jackal("Jeremy", "Spotted", "M", 55, 32, false)
  
  let igor = new Impala("Igor", "Brown", "F", 66, 23, true)
  
  let heron = new Heron("Harrison", "Orange", "M", 22, 90, true)
let newAnimals = [jeremy, igor, heron]




//Private
function _draw() {
  let values = animals;
  let cardsTemplate = ''
  values.forEach(v => animals += v.name)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.sayNames()">Add Value</button>  
    <div class="values d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `
}

//Public
export class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    valuesService.addValue()
  }

  async removeValue(id) {
    const yes = await Pop.confirm('Remove Value')
    if (yes) {
      valuesService.removeValue(id)
    }
  }

  sayNames() {
    newAnimals.forEach(a => {console.log(a.name) })
    newAnimals.forEach(a => {console.log(a.name) })
  }

}

