
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [numeropadrao, setNumeroPadrao] = useState('0');
  const [primeironumero, setPrimeironumero] = useState('0');
  const [conta, setConta] = useState('');

  const handleOnClear = () => {
    setNumeroPadrao('0')
    setPrimeironumero('0')
    setConta('')
  };

  const handleAddNumber = (num) => {
    setNumeroPadrao(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(primeironumero === '0'){
        setPrimeiroNumero(String(numeropadrao));
        setNumeroPadrao('0')
        setConta('+')
    }else {
      const sum = Number(primeironumero) + Number(numeropadrao);
      setNumeroPadrao(String(sum))
      setConta('')
    }

  }

  const handleMinusNumbers = () => {

    if(primeironumero === '0'){
        setPrimeironumero(String(numeropadrao));
        setNumeroPadrao('0')
        setConta('-')
    }else {
      const sum = Number(primeironumero) - Number(numeropadrao);
      setNumeroPadrao(String(sum))
      setConta('')
    }

  }

  const handleEquals = () => {

    if(primeironumero !== '0' && conta !== '' && numeropadrao !== '0'){
        switch(conta){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={numeropadrao}/>
        <Row>
          <Button label="x"/>
          <Button label="/"/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
