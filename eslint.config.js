import js from '@eslint/js';
import globals from 'globals';

export default [
  // Ignorar carpetas generadas automáticamente
  { 
    ignores: ['coverage/', 'node_modules/'] 
  },
  
  // Reglas recomendadas por ESLint
  js.configs.recommended,
  
  // Configuración del equipo y reglas personalizadas
  {
    files: ['**/*.js'],
    languageOptions: { 
      globals: {
        ...globals.node,
        ...globals.es2021
      } 
    },
    rules: {
      // Regla recomendada por la práctica
      'no-var': 'error',                       // Exige const/let en lugar de var
      'eqeqeq': ['error', 'always'],            // Exige === y !== en lugar de == y !=
      
      // 5 Reglas personalizadas elegidas por el equipo:
      'prefer-const': 'error',                 // Sugiere const para variables que no se reasignan
      'no-duplicate-imports': 'error',          // Evita importar la misma librería en múltiples líneas
      'no-console': 'warn',                    // Advierte uso residual de console.log
      'curly': ['error', 'all'],                // Exige llaves {} en todas las estructuras de control
      'no-multiple-empty-lines': ['error', { max: 1 }] // Limita saltos de línea consecutivos
    },
  },
];