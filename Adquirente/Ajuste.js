cube(`Ajuste`, {
  sql: `SELECT * FROM dimensao.ajuste`,
  
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
    descricao: {
      sql: `descricao`,
      type: `string`
    },
    
    codigo: {
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
