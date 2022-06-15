cube(`ResultadoConsultaAgendaCerc`, {
  sql: `SELECT * FROM registradora.resultado_consulta_agenda_cerc`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    indicadoresconsistencia: {
      sql: `indicadoresconsistencia`,
      type: `string`
    },
    
    agendas: {
      sql: `agendas`,
      type: `string`
    },
    
    referenciaexterna: {
      sql: `referenciaexterna`,
      type: `string`
    },
    
    documentousuariofinalrecebedor: {
      sql: `documentousuariofinalrecebedor`,
      type: `string`
    },
    
    protocolorequisicao: {
      sql: `protocolorequisicao`,
      type: `string`
    },
    
    dataConsultaAgenda: {
      sql: `data_consulta_agenda`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
