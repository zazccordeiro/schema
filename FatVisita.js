cube(`FatVisita`, {
  sql: `SELECT * FROM public.fat_visita`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [procInstId]
    }
  },
  
  dimensions: {
    procInstId: {
      sql: `proc_inst_id_`,
      type: `string`,
      title: `Proc Inst Id `
    }
  },
  
  dataSource: `default`
});
