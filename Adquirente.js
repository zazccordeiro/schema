cube(`Adquirente`, {
  sql: `SELECT * FROM public.dim_adquirente`,
  
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
    skAdministradoraId: {
      sql: `sk_administradora_id`,
      type: `number`,
      primaryKey: true
    },
    
    nomeAdquirente: {
      sql: `nome`,
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
