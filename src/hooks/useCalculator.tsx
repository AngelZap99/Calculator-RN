import {useState} from 'react';

export const useCalculator = () => {
  const [pastResult, setPastResult] = useState('0');
  const [result, setResult] = useState('235234');
  const [operator, setOperator] = useState('');

  const handleReset = () => {
    if (result === '0') {
      setPastResult('0');
      setOperator('');
    } else {
      setResult('0');
    }
  };

  const handleOperator = (operation: string) => {
    if (result !== '0') {
      setPastResult(result);
      setResult('0');
      setOperator(operation);
    } else {
      setResult('-0');
    }
  };

  const handleGoBack = () => {
    setResult(result.slice(0, result.length - 1));
    if (result.length - 1 === 0) {
      setResult('0');
    } else if (result.length - 1 === 1 && result[0] === '-') {
      setResult('0');
    }
  };

  const handleNumber = (number: string) => {
    if (number === '.' && !result.includes('.')) {
      setResult(value => value + number);
    } else if (result === '0' || result === '-0') {
      result === '0' ? setResult(number) : setResult('-' + number);
    } else if (number !== '.') {
      setResult(value => value + number);
    }
  };

  const handleResult = () => {
    // setPastResult(result);
    switch (operator) {
      case '%': {
        setResult(String(Number(pastResult) % Number(result)));
        break;
      }
      case '/': {
        setResult(String(Number(pastResult) / Number(result)));
        break;
      }
      case 'x': {
        setResult(String(Number(pastResult) * Number(result)));
        break;
      }
      case '-': {
        setResult(String(Number(pastResult) - Number(result)));
        break;
      }
      case '+': {
        setResult(String(Number(pastResult) + Number(result)));
        break;
      }
      default:
        return;
    }
  };

  return {
    //states
    pastResult,
    result,
    operator,
    //methods
    handleReset,
    handleGoBack,
    handleNumber,
    handleOperator,
    handleResult,
  };
};

export default useCalculator;
