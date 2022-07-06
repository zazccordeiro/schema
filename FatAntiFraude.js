cube(`FatAntiFraude`, {
  sql: `SELECT * FROM public.fat_status`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    DimEndereco: {
    relationship: `belongsTo`,
    sql: `${FatAntiFraude}.sk_dim_endereco = ${DimEndereco.skDimEndereco}`
  },
  DimOperacao: {
    relationship: `belongsTo`,
    sql: `${FatAntiFraude}.sk_dim_operacao = ${DimOperacao.skDimOperacao}`
  },
  DimStatusCamunda: {
    relationship: `belongsTo`,
    sql: `${FatAntiFraude}.sk_dim_status_camunda = ${DimStatusCamunda.skDimStatusCamunda}`
  },
  DimProcessos: {
    relationship: `belongsTo`,
    sql: `${FatAntiFraude}.sk_dim_processos = ${DimProcessos.skDimProcessos}`
  },

  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [procInstId]
    }
  },
  
  dimensions: {
    idStatus: {
      sql: `idstatus`,
      type: `number`,
      primaryKey: true
    },
    
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
