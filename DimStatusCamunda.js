cube(`DimStatusCamunda`, {
  sql: `SELECT * FROM public.dim_status_camunda`,
  
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
    skDimStatusCamunda: {
      sql: `sk_dim_status_camunda`,
      type: `number`,
      primaryKey: true
    },
    descricaoStatus: {
      sql: `descricao_status`,
      type: `string`
    },
    
    variavel: {
      sql: `variavel`,
      type: `string`
    },
    
    operacao: {
      sql: `operacao`,
      type: `string`
    },
    
    depara: {
      sql: `depara`,
      type: `string`
    },
    
    categoriaStatus: {
      sql: `categoria_status`,
      type: `string`
    },

    codigoStatus: {
      sql: `ordenacao`,
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
