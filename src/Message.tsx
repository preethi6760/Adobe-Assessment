// import {Button} from '@adobe/react-spectrum'
// function Message(){
//     return (
//     <div>
//         <Button variant="accent" onPress={() => console.log('Clicked by me')}> convert to roman numeral</Button>
//     </div>
//     );
// }
// export default Message;

import React, { useState } from 'react';
import { Button, TextField, Text } from '@adobe/react-spectrum';

const RomanNumeralConverter = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`http://localhost:8081/romannumeral?query=${input}`);
      const data = await response.json();
      setOutput(data.output);
    //  setOutput("XI");
    } catch (error) {
      console.error('Error fetching Roman numeral:', error);
      setOutput('Error occurred');
    }
  };

  return (
    <div>
      <TextField
        label="Enter a number"
        type="number"
        value={input}
        onChange={setInput}
        min={1}
        max={3999}
      />
      <Button variant="cta" onPress={handleButtonClick}>
        Convert to roman numerals converter
      </Button>
      <Text>{output}</Text>
    </div>
  );
};

export default RomanNumeralConverter;
