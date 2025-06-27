import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { itinerarisData } from './itineraris/index.jsx';

export default function SearchGroups({ isOpen, onClose, onSelectAssignatura }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [allAssignatures, setAllAssignatures] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const { language } = useLanguage();

  // Tancar amb tecla Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Recopilar totes les assignatures de tots els itineraris (sense duplicats)
  useEffect(() => {
    const allSubjects = [];
    const seenSubjects = new Set(); // Per evitar duplicats

    Object.entries(itinerarisData).forEach(([itinerariKey, itinerariData]) => {
      itinerariData.assignatures.forEach(assignatura => {
        // Treiem les assignatures duplicades, ja que hi ha assignatures a més d'un itinerari
        const nomComplet = getNomComplet(assignatura.nom);
        const uniqueKey = nomComplet;
        
        if (!seenSubjects.has(uniqueKey)) {
          seenSubjects.add(uniqueKey);
          allSubjects.push({
            ...assignatura,
            itinerari: itinerariKey
          });
        }
      });
    });
    setAllAssignatures(allSubjects);
  }, []);

  // Funció per normalitzar text
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Elimina accents
      .replace(/[^a-z0-9\s]/g, "") // Elimina caràcters especials
      .replace(/\s+/g, " ") // Normalitza espais
      .trim();
  };

  // Filtrar resultats basats en el terme de cerca
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredResults([]);
      return;
    }
    const normalizedSearchTerm = normalizeText(searchTerm);
    const filtered = allAssignatures.filter(assignatura => {
      const code = normalizeText(assignatura.nom);
      const fullName = normalizeText(getNomComplet(assignatura.nom));
      // Cerca tant en l'abreviatura com en el nom complet
      return code.includes(normalizedSearchTerm) || 
             fullName.includes(normalizedSearchTerm);
    });
    
    setFilteredResults(filtered.slice(0, 10)); // Limitar a 10 resultats
  }, [searchTerm, allAssignatures, language]);

  const getItinerariName = (itinerari) => {
    const names = {
      basiques: language === 'ca' ? 'Bàsiques' : 'Básicas',
      informacio: language === 'ca' ? 'Tecnologies de la Informació' : 'Tecnologías de la Información',
      sistemes: language === 'ca' ? 'Sistemes de la Informació' : 'Sistemas de la Información',
      computacio: language === 'ca' ? 'Computació' : 'Computación',
      computadors: language === 'ca' ? 'Enginyeria de Computadors' : 'Ingeniería de Computadores',
      programari: language === 'ca' ? 'Enginyeria del Programari' : 'Ingeniería del Software',
      optatives: language === 'ca' ? 'Optatives' : 'Optativas'
    };
    return names[itinerari] || itinerari;
  };



  const getNomComplet = (code) => {
    const subjectNames = {
      // Bàsiques
      'ALG': language === 'ca' ? 'Àlgebra' : 'Álgebra',
      'AM': language === 'ca' ? 'Anàlisi Matemàtica' : 'Análisis Matemático',
      'EST': language === 'ca' ? 'Estadística' : 'Estadística',
      'FFI': language === 'ca' ? 'Fonaments Físics de la Informàtica' : 'Fundamentos Físicos de la Informática',
      'IMI': language === 'ca' ? 'Introducció a les Matemàtiques per a la Informàtica' : 'Introducción a las Matemáticas para la Informática',
      'LOG': language === 'ca' ? 'Lògica' : 'Lógica',
      'GC': language === 'ca' ? 'Grafisme i Computació' : 'Grafismo y Computación',
      'IA': language === 'ca' ? 'Intel·ligència Artificial' : 'Inteligencia Artificial',
      'PCPP': language === 'ca' ? 'Paradigmes de la Computació i Programació' : 'Paradigmas de la Computación y Programación',
      'EP': language === 'ca' ? 'Estructura de la Programació' : 'Estructura de la Programación',
      'IPO': language === 'ca' ? 'Interacció Persona-Ordinador' : 'Interacción Persona-Ordenador',
      'FP': language === 'ca' ? 'Fonaments de Programació' : 'Fundamentos de Programación',
      'PP': language === 'ca' ? 'Practiques de programació  ' : 'Prácticas de programación',
      'DPOO': language === 'ca' ? 'Disseny i Programació Orientada a Objectes' : 'Diseño y Programación Orientada a Objetos',
      'UBD': language === 'ca' ? 'Ús de Bases de Dades' : 'Uso de Bases de Datos',
      'DBD': language === 'ca' ? 'Disseny de Bases de Dades' : 'Diseño de Bases de Datos',
      'FC': language === 'ca' ? 'Fonaments de Computadors' : 'Fundamentos de Computadores',
      'EC': language === 'ca' ? 'Estructura de Computadors' : 'Estructura de Computadores',
      'SSOO': language === 'ca' ? 'Sistemes Operatius' : 'Sistemas Operativos',
      'XAI': language === 'ca' ? 'Xarxes d\'Àrea Internet' : 'Redes de Área Internet',
      'AXSO': language === 'ca' ? 'Administració de Xarxes i Sistemes Operatius' : 'Administración de Redes y Sistemas Operativos',
      'SSDD': language === 'ca' ? 'Sistemes Distribuïts' : 'Sistemas Distribuidos',
      'CCPTIC': language === 'ca' ? 'Competències Comunicatives per a Professionals TIC' : 'Competencias Comunicativas para Profesionales TIC',
      'TEX': language === 'ca' ? 'Tècniques d\'Expressió Escrita i Oral' : 'Técnicas de Expresión Escrita y Oral',
      'ENG1': language === 'ca' ? 'Anglès I' : 'Inglés I',
      'ENG2': language === 'ca' ? 'Anglès II' : 'Inglés II',
      'AGO': language === 'ca' ? 'Administració i gestió d\'organitzacions' : 'Administración y gestión de organizaciones',
      'GP': language === 'ca' ? 'Gestió de Projectes' : 'Gestión de Proyectos',
      'TFG': language === 'ca' ? 'Treball Final de Grau' : 'Trabajo Final de Grado',
      'ALGEBRA': language === 'ca' ? 'Àlgebra' : 'Álgebra',
      'GRAFS I COMPLEXITAT': language === 'ca' ? 'Grafs i Complexitat' : 'Grafos y Complejidad',
      'DED': language === 'ca' ? 'Desenvolupament d\'Aplicacions Distribüides' : 'Desarrollo de Aplicaciones Distribuidas',
      'AUTOMATES I GRAMATIQUES': language === 'ca' ? 'Autòmats i Gramàtiques' : 'Autómatas y Gramáticas',
      'REPRESENTACIO DEL CONEIXEMENT': language === 'ca' ? 'Representació del Coneixement' : 'Representación del Conocimiento',
      'APRENENTATGE COMPUTACIONAL': language === 'ca' ? 'Aprenentatge Computacional' : 'Aprendizaje Computacional',
      'COMPILADORS': language === 'ca' ? 'Compiladors' : 'Compiladores',
      'MINERIA DE DADES': language === 'ca' ? 'Mineria de Dades' : 'Minería de Datos',
      'ABD': language === 'ca' ? 'Administració de Bases de Dades' : 'Administración de Bases de Datos',
      'CRIPTOGRAFIA': language === 'ca' ? 'Criptografia' : 'Criptografía',
      'PRÀCTIQUES EN EMPRESA': language === 'ca' ? 'Pràctiques en Empresa' : 'Prácticas en Empresa'
    };
    
    return subjectNames[code] || code;
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px"
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '10px', 
          width: '100%',
          maxWidth: '600px',
          maxHeight: '80vh',
          overflow: 'auto',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{ 
          color: '#001B4C', 
          margin: 0,
          fontSize: '20px'
        }}>
          🔍 {language === 'ca' ? 'Buscador d\'Assignatures' : 'Buscador de Asignaturas'}
        </h2>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#666',
            padding: '5px'
          }}
        >
          ✕
        </button>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '20px',
        alignItems: 'center'
      }}>
        <input
          type="text"
          placeholder={language === 'ca' ? 'Assignatura' : 'Assignatura'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            padding: '12px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '2px solid #ddd',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#001B4C'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            style={{
              padding: '12px 16px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {language === 'ca' ? 'Neteja' : 'Limpiar'}
          </button>
        )}
      </div>

      {filteredResults.length > 0 && (
        <div>
          <h3 style={{ color: '#001B4C', marginBottom: '15px' }}>
            {language === 'ca' ? 'Resultats:' : 'Resultados:'}
          </h3>
          {filteredResults.map((assignatura, index) => (
            <div 
              key={index}
              onClick={() => {
                onSelectAssignatura(assignatura);
                onClose();
              }}
              style={{
                backgroundColor: 'white',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <h4 style={{ 
                    margin: '0 0 8px 0', 
                    color: '#001B4C',
                    fontSize: '18px'
                  }}>
                    📱 {getNomComplet(assignatura.nom)}
                  </h4>
                  <p style={{ 
                    margin: '0 0 8px 0', 
                    color: '#888',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    ({assignatura.nom})
                  </p>
                  <p style={{ 
                    margin: '0', 
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    📋 {getItinerariName(assignatura.itinerari)}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

      {searchTerm.trim() !== '' && filteredResults.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          color: '#666', 
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          {language === 'ca' 
            ? 'No s\'han trobat grups per a aquesta assignatura' 
            : 'No se han encontrado grupos para esta asignatura'
          }
        </div>
      )}
      </div>
    </div>
   );
} 