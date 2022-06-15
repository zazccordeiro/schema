cube(`DimPlataforma`, {
  sql: `SELECT * FROM delivery.dim_plataforma`,
  
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
    plataforma: {
      sql: `plataforma`,
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
  }, skDimPlataforma: {
    sql: `sk_dim_plataforma`,
    type: `number`,
    primaryKey: true
  },
  
  dataSource: `default`
});
