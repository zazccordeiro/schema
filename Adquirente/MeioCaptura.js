cube(`MeioCaptura`, {
  sql: `SELECT * FROM dimensao.meio_captura`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dateFrom, dateTo]
    }
  },
  
  dimensions: {
    skMeioCaptura: {
      sql: `sk_meio_captura`,
      type: `number`,
      primaryKey: true
    },
    nomeCaptura: {
      sql: `descricao`,
      type: `string`
    },
    
    codigoCaptura: {
      sql: `codigo`,
      type: `string`
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
