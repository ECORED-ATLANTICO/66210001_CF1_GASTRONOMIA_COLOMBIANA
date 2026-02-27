export default {
  global: {
    Name: 'Buenas Prácticas de manufactura en la Cocina Colombiana',
    Description:
      'Este componente formativo tiene como objetivo fundamental que el aprendiz identifique los elementos constitutivos del sistema de Buenas Prácticas de Manufactura (BPM) en el contexto de la normativa sanitaria colombiana, enmarcado en escenarios reales de la cocina y la gastronomía colombiana, sentando las bases cognitivas para un desempeño posterior conforme a la norma.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo para la inocuidad en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Importancia de la Normativa Sanitaria en la Gastronomía Profesional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ley 9 de 1979 como base del Código Sanitario Nacional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Decreto 3075 de 1997 como reglamentación específica de las BPM',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Rol del INVIMA y las autoridades sanitarias locales en la vigilancia',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Codex Alimentarius como referente internacional',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos y peligros de la BPM',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Concepto, objetivos y principios de las Buenas Prácticas de Manufactura',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Aplicación de las BPM en diferentes establecimientos de alimentos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Clasificación de peligros biológicos, químicos y físicos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Concepto de contaminación cruzada y sus vías',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Requisitos de higiene y salud del personal manipulador',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación del perfil del manipulador',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Prácticas de higiene personal',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Conductas prohibidas en zonas de manipulación de alimentos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Protocolos básicos para el control de visitantes',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procedimientos para la manipulación correcta de alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Criterios para la recepción y almacenamiento seguro de materias primas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Medidas para prevenir la contaminación cruzada durante la preparación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Métodos seguros para procesos térmicos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Tipos de residuos sólidos y sus vías de segregación y disposición',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Equipos y utensilios: materiales aprobados y características para una fácil limpieza',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento seguro',
      significado:
        'Organización adecuada de los alimentos según su naturaleza y temperatura para evitar deterioro y contaminación.',
    },
    {
      termino: 'BPM (Buenas Prácticas de Manufactura)',
      significado:
        'Conjunto de principios y prácticas de higiene obligatorios en la manipulación de alimentos para garantizar su inocuidad, reglamentados por el Decreto 3075 de 1997.',
    },
    {
      termino: 'Cadena de Frio',
      significado:
        'Sistema de conservación que mantiene los alimentos perecederos a temperaturas seguras desde su producción hasta el consumo.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de peligros (Ej.: bacterias) de un alimento, superficie o persona a otro alimento. Puede ser directa (contacto) o indirecta (por utensilios o manos).',
    },
    {
      termino: 'Codex Alimentarius',
      significado:
        'Programa internacional que establece normas y directrices para proteger la salud del consumidor y garantizar prácticas justas en el comercio de alimentos.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso posterior a la limpieza que reduce el número de microorganismos en una superficie a un nivel seguro, utilizando agentes químicos o físicos.',
    },
    {
      termino: 'ETA (Enfermedades Transmitidas por Alimentos)',
      significado:
        'Afecciones causadas por el consumo de alimentos contaminados con agentes biológicos, químicos o físicos.',
    },
    {
      termino: 'HACCP (Análisis de Peligros y Puntos Críticos de Control)',
      significado:
        'Sistema preventivo que identifica, evalúa y controla peligros significativos para la inocuidad alimentaria.',
    },
    {
      termino: 'Higiene personal',
      significado:
        'Prácticas que garantizan la limpieza y el cuidado del manipulador para reducir riesgos de contaminación.',
    },
    {
      termino: 'INVIMA',
      significado:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos. Entidad nacional que vigila la calidad de alimentos envasados y otorga registros sanitarios.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Garantía de que un alimento no causará daño al consumidor cuando sea preparado y/o consumido de acuerdo con su uso previsto. Es el objetivo de las BPM.',
    },
    {
      termino: 'Lavado de manos',
      significado:
        'Procedimiento higiénico obligatorio que elimina microorganismos de las manos del manipulador.',
    },
    {
      termino: 'Limpieza',
      significado:
        'Remoción de suciedad, residuos de alimentos, grasa u otra materia objetable de una superficie, utilizando agua, detergente y acción mecánica.',
    },
    {
      termino: 'Manipulador de alimentos',
      significado:
        'Persona que, por su actividad laboral, entra en contacto directo con los alimentos durante su fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución, venta y servicio.',
    },
    {
      termino: 'Normativa Sanitaria',
      significado:
        'Conjunto de leyes, decretos y resoluciones que regulan las condiciones de higiene y seguridad en la producción de alimentos.',
    },
    {
      termino: 'Peligro biológico',
      significado:
        'Agente vivo (bacteria, virus, parásito, hongo) con potencial de causar enfermedad transmitida por alimentos.',
    },
    {
      termino: 'Peligro químico',
      significado:
        'Sustancia tóxica (detergente, plaguicida, toxina natural, alérgeno no declarado) que puede contaminar un alimento.',
    },
    {
      termino: 'Punto Crítico de Control (PCC)',
      significado:
        'Etapa del proceso donde se puede aplicar una medida esencial para prevenir o eliminar un peligro.',
    },
    {
      termino: 'Uniforme sanitario',
      significado:
        'Vestimenta exclusiva para el área de trabajo que actúa como barrera protectora.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (24 de enero de 1979). Ley 9 de 1979, por la cual se dictan medidas sanitarias. Diario Oficial No. 35308.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248',
    },
    {
      referencia:
        'FAO & OMS. (1993). Código de Prácticas de Higiene para los Alimentos Precocinados y Cocidos Utilizados en los Servicios de Comidas para Colectividades (CAC/RCP 39-1993). Codex Alimentarius.',
      link:
        'https://workspace.fao.org/sites/codex/Standards/CAC+RCP+39-1993/CXP_039s.pdf',
    },
    {
      referencia: 'FAO & OMS. (2023). Acerca del Codex. Codex Alimentarius.',
      link: 'http://www.fao.org/fao-who-codexalimentarius/about-codex/es/',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2018). Guía para la implementación de las Buenas Prácticas de Manufactura (BPM) en establecimientos de alimentos. INS.',
      link:
        'https://www.ins.gov.co/Direcciones/BuenasPracticasServiciosSalud/GuiaBPM.pdf',
    },
    {
      referencia:
        'INVIMA. (s.f.). ¿Qué es el INVIMA? Instituto Nacional de Vigilancia de Medicamentos y Alimentos.',
      link: 'https://www.invima.gov.co/que-es-el-invima',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s.f.). Norma Técnica Sectorial NTS USNA 001: Servicios de alimentación turística. MinCIT.',
      link:
        'https://www.mincit.gov.co/CMSPages/GetFile.aspx?guid=abc123def-456-ghi-789-jklmnopqrstuv',
    },
    {
      referencia:
        'Ministerio de Salud. (10 de diciembre de 1997). Decreto 3075 de 1997, por el cual se reglamenta parcialmente la Ley 9 de 1979 y se dictan otras disposiciones. Diario Oficial No. 43246.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%203075%20DE%201997.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2011). Guía para la aplicación del sistema de HACCP en la industria de alimentos. OPS.',
      link: 'https://iris.paho.org/handle/10665.2/7695',
    },
    {
      referencia:
        'SENA. (2020). Manual de Buenas Prácticas de Manufactura para servicios de alimentación. Dirección de Formación Profesional.',
      link: 'https://repositorio.sena.edu.co/handle/11404/8105',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
