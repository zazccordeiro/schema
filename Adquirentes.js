cube(`Adquirentes`, {
  sql: `SELECT * FROM public.dim_adquirente`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
  },
  
  measures: {
    quantidadeRegistros: {
      type: `count`,
      drillMembers: [nome],
      shown: true,
    }
  },
  
  dimensions: {
    skAdministradoraId: {
      sql: `sk_administradora_id`,
      type: `number`,
      primaryKey: true,
    },

    nome: {
      sql: `nome`,
      type: `string`,
      shown: true,
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`,
      shown: false,
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`,
      shown: false,
    }
  },
  
  dataSource: `default`
});
