/* import tries from '../data/tries.json';

const { remote } = require('electron');
const fs = remote.require('fs');

function updateTries(data) {
  // Loop through the input data
  data.forEach(({ id, isCorrect }) => {
    // Look up the current trial count for this ID in the JSON file
    let currentTrial = tries[id]?.trial || 0;
    // Look up the current pass count for this ID in the JSON file
    let currentPass = tries[id]?.pass || 0;

    // Increment the trial count
    currentTrial += 1;

    // If the answer was correct, increment the pass count
    if (isCorrect) {
      currentPass += 1;
    }

    // Update the JSON object with the new trial and pass values
    tries[id] = { trial: currentTrial, pass: currentPass };
  });

  // Write the updated JSON object back to the file
  const filePath = 'tries.json';
  fs.writeFile(filePath, JSON.stringify(tries), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Tries file updated successfully!');
  });
}

export default updateTries;
 */