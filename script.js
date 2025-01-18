const convertToMeters = () => {
  const inputOpt = prompt(`
    Option :
    ------------------------
    Type 1 for a random number of yards
    Type 2 to enter your own value
  `);

  const selectOpt = Number(inputOpt);

  if (selectOpt === 1) {

    let randomYard = Math.floor(Math.random() * 1000);

    const meter = Math.floor(randomYard * 0.9144);

    const finalMessage = `from ${randomYard} convert to ${meter} meters `;

    const finalMessage2 = createMessage(randomYard);

    alert(`${finalMessage} ${finalMessage2} `);

  } else if (selectOpt === 2) {

    const inputYards = prompt(`Enter yeards units : `);

    yards = Number(inputYards);

    const meter = yards * 0.9144;

    const finalMessage = `from ${yards} convert to ${meter} meters `;
    
    const finalMessage2 = createMessage(yards);

    alert(`${finalMessage} ${finalMessage2} `);


  } else {
    
    return convertToMeters();
  }
};

const createMessage = (yards) => {
  
  let message = ``;

  const numYards = yards;

  if (numYards < 26) {
    let message = `That is as long as a tennis court!`;
  } else if (numYards < 100) {
    message = `that is as long as a football field `;
  } else if (numYards < 1760) {
    message = `that is as long as a mile`;
  } else if (numYards < 3520) {
    message = `that is as long as 2 miles `;
  } else if (numYards < 8800) {
    message = `that is as long as 5 miles`;
  } else {
    message = `that is as long as whole city`;
  }
  return message;
};


convertToMeters();
