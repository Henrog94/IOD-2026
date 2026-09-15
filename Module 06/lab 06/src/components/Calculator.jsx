import { useState } from 'react'

function Calculator() {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(null)

  const calculate = (e) => {
    e.preventDefault()

    const a = Number(number1)
    const b = Number(number2)

    if (number1 === '' || number2 === '') {
      setResult('Please enter two numbers.')
      return
    }

    let answer

    switch (operator) {
      case '+':
        answer = a + b
        break
      case '-':
        answer = a - b
        break
      case '*':
        answer = a * b
        break
      case '/':
        answer = b === 0 ? 'Cannot divide by zero.' : a / b
        break
      default:
        answer = 'Invalid operator'
    }

    setResult(answer)
  }

  return (
    <div className="componentBox calculator">
      <form onSubmit={calculate}>
        <div>
          <label>
            First number:
            <input
              type="number"
              step="any"
              value={number1}
              onChange={e => setNumber1(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Operator:
            <select
              value={operator}
              onChange={e => setOperator(e.target.value)}
            >
              <option value="+">+</option>
              <option value="-">−</option>
              <option value="*">×</option>
              <option value="/">÷</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Second number:
            <input
              type="number"
              step="any"
              value={number2}
              onChange={e => setNumber2(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Calculate</button>
      </form>

      <h2>Result: {result === null ? '—' : result}</h2>
    </div>
  )
}

export default Calculator
