cube(`FatStatus`, {
  sql: `SELECT * FROM public.fat_status`,
  
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
    marcacao: {
      sql: `marcacao`,
      type: `string`
    },
    
    procInstId: {
      sql: `proc_inst_id_`,
      type: `string`,
      title: `Proc Inst Id `
    }
  },
  
  dataSource: `default`
});
