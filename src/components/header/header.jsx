
import React from 'react';
import { COMPANY_INFO } from '../../constants/companyInfo';

export const Header = () => (
    <header className="bg-blue-100 p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img
                    src="/api/placeholder/50/50"
                    alt={`${COMPANY_INFO.name} Logo`}
                    className="h-12"
                />
                <h1 className="text-2xl font-bold text-blue-800">{COMPANY_INFO.name}</h1>
            </div>
        </div>
    </header>
);

// src/components/Footer/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyInfo';

export const Footer = () => (
    <footer className="bg-gray-800 text-white p-6 mt-8">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="font-bold mb-2">{COMPANY_INFO.name} ©</p>
                    <p>{COMPANY_INFO.rights}</p>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <p>Dirección: {COMPANY_INFO.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <p>Teléfono: {COMPANY_INFO.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <p>Email: {COMPANY_INFO.email}</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);


import React from 'react';

export const EmployeeCard = ({ employee }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-lg">{employee.name}</h3>
        <p className="text-gray-600">Edad: {employee.age}</p>
        <p className="text-gray-600">Hobbies: {employee.hobbies.join(', ')}</p>
    </div>
);


import React from 'react';
import { Users } from 'lucide-react';
import { employees } from '../../data/employees';
import { EmployeeCard } from './EmployeeCard';

export const EmployeeList = () => (
    <section className="my-8">
        <div className="flex items-center gap-2 mb-4">
            <Users className="text-blue-600" />
            <h2 className="text-xl font-bold">Nuestro Equipo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employees.map(employee => (
                <EmployeeCard key={employee.id} employee={employee} />
            ))}
        </div>
    </section>
);


import React from 'react';
import { Calculator as CalcIcon } from 'lucide-react';
import { useCalculator } from '../../hooks/useCalculator';

export const Calculator = () => {
    const {
        numbers,
        result,
        operation,
        updateNumber,
        performCalculation
    } = useCalculator();

    return (
        <section className="my-8">
            <div className="flex items-center gap-2 mb-4">
                <CalcIcon className="text-blue-600" />
                <h2 className="text-xl font-bold">Calculadora</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <input
                            type="number"
                            value={numbers.num1}
                            onChange={(e) => updateNumber('num1', e.target.value)}
                            placeholder="Primer número"
                            className="border p-2 rounded flex-1"
                        />
                        <input
                            type="number"
                            value={numbers.num2}
                            onChange={(e) => updateNumber('num2', e.target.value)}
                            placeholder="Segundo número"
                            className="border p-2 rounded flex-1"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {['+', '-', '*', '/'].map(op => (
                            <button
                                key={op}
                                onClick={() => performCalculation(op)}
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            >
                                {op === '*' ? '×' : op === '/' ? '÷' : op}
                            </button>
                        ))}
                    </div>
                    {result !== null && (
                        <div className="mt-4 p-4 bg-gray-100 rounded">
                            <p className="text-center">
                                {typeof result === 'number'
                                    ? `${numbers.num1} ${operation} ${numbers.num2} = ${result}`
                                    : result}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};