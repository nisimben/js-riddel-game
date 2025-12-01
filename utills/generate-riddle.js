import MultipleChoiceRiddle from "../classes/multipleChoiceRiddle.js";
import Riddle from "../classes/riddel.js";
export  function createRiddleInstance(raw) {
  if (raw.type === 'multiple-choice') return new MultipleChoiceRiddle(raw);
  return new Riddle(raw);
}