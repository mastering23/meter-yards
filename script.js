const convertToMeters = () => {  

  const inputYards = prompt(`Enter yeards units : `);

  const yards = Number(inputYards);

  const meter = yards * 0.9144;

  const finalMessage = `from ${yards} convert to ${meter} meters `;

  const finalMessage2 = createMessage(yards);

  alert(`${finalMessage} ${finalMessage2} `);
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
