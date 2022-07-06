cube(`BrTransComercioVarejistaSubdistritoIfood`, {
  sql: `SELECT * FROM receita_federal_atual.br_trans_comercio_varejista_subdistrito_ifood`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [subdistritoid]
    }
  },
  
  dimensions: {
    cnpj: {
      sql: `cnpj`,
      type: `string`,
      primaryKey: true
    },
    
    subdistritoid: {
      sql: `subdistritoid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
