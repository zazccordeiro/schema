cube(`TipoPagamento`, {
  sql: `SELECT * FROM dimensao.tipo_pagamento`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dateTo, dateFrom]
    }
  },
  
  dimensions: {
    skTipoPagamento: {
      sql: `sk_tipo_pagamento`,
      type: `number`,
      primaryKey: true
    },
    descricao: {
      sql: `descricao`,
      type: `string`
    },
    
    codigo: {
      sql: `codigo`,
      type: `string`
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
