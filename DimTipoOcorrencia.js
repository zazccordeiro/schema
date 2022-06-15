cube(`DimTipoOcorrencia`, {
  sql: `SELECT * FROM delivery.dim_tipo_ocorrencia`,
  
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
    tipoOcorrencia: {
      sql: `tipo_ocorrencia`,
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
  },skDimTipoOcorrencia: {
    sql: `sk_dim_tipo_ocorrencia`,
    type: `number`,
    primaryKey: true
  },
  
  dataSource: `default`
});
