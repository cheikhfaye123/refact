
import { useState } from 'react';
import { calculateResult } from '../utils/calculatorOperations';

export const useCalculator = () => {
    const [numbers, setNumbers] = useState({ num1: '', num2: '' });
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState('');

    const updateNumber = (field, value) => {
        setNumbers(prev => ({ ...prev, [field]: value }));
    };

    const performCalculation = (op) => {
        const { num1, num2 } = numbers;
        if (!num1 || !num2) return;

        const calculatedResult = calculateResult(op, num1, num2);
        setOperation(op);
        setResult(calculatedResult === null ? 'No se puede dividir por cero' : calculatedResult);
    };

    return {
        numbers,
        result,
        operation,
        updateNumber,
        performCalculation
    };
};


export const calculateResult = (operation, num1, num2) => {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => b === 0 ? null : a / b
    };

    return operations[operation]?.(Number(num1), Number(num2));
};


export const employees = [
    {
        id: 1,
        name: "Ana García",
        age: 28,
        hobbies: ["Cocina", "Senderismo"]
    },
    {
        id: 2,
        name: "Juan López",
        age: 34,
        hobbies: ["Fotografía", "Viajes"]
    },
    {
        id: 3,
        name: "María Sánchez",
        age: 31,
        hobbies: ["Lectura", "Yoga"]
    }
];


export const COMPANY_INFO = {
    name: 'Croquetas INC',
    rights: 'Todos los derechos reservados.',
    address: 'Simancas (Madriz)',
    phone: '917335673 - 635444912',
    email: 'croquetasINC@hotmail.com'
};