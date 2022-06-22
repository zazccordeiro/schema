cube(`adquirente`, {
  sql: `SELECT * FROM public.dim_adquirente`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    contador: {
      type: `count`
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
  },
  
  dataSource: `default`
});
