cube(`ClienteCnpjCpf`, {
  sql: `SELECT * FROM public.dim_cliente_cnpjcpf`,
  
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
    skDimClienteCnpjCpf: {
      sql: `sk_dim_cliente_cnpjcpf`,
      type: `number`,
      primaryKey: true
    },

    cnpjcpf: {
      sql: `cnpjcpf`,
      type: `string`
    },
  },
  
  dataSource: `default`
});
