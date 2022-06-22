cube(`DimTipoPagamento`, {
  sql: `SELECT * FROM delivery.dim_tipo_pagamento`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tipoPagamento]
    }
  },
  
  dimensions: {
    tipoPagamento: {
      sql: `tipo_pagamento`,
      type: `string`
    },
    skDimTipoPagamento: {
      sql: `sk_dim_tipo_pagamento`,
      type: `number`,
      primaryKey: true
    }
    
  
  },
  
  dataSource: `default`
});
