cube(`DimDataPedido`, {
  sql: `SELECT * FROM delivery.dim_data`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [diaData]
    }
  },
  
  dimensions: {
    fimSemana: {
      sql: `fim_semana`,
      type: `string`
    },
    
    nomeDiaSemana: {
      sql: `nome_dia_semana`,
      type: `string`
    },
    
    numeroTipoAno: {
      sql: `numero_tipo_ano`,
      type: `string`
    },
    
    nomesMes: {
      sql: `nomes_mes`,
      type: `string`
    },
    
    nomeTrimestre: {
      sql: `nome_trimestre`,
      type: `string`
    },
    
    nomeTipoDiaSemana: {
      sql: `nome_tipo_dia_semana`,
      type: `string`
    },
    
    nomeSemana: {
      sql: `nome_semana`,
      type: `string`
    },
    
    nomeTrimestreAno: {
      sql: `nome_trimestre_ano`,
      type: `string`
    },
    
    nomeSemanaMes: {
      sql: `nome_semana_mes`,
      type: `string`
    },
    
    nomeDia: {
      sql: `nome_dia`,
      type: `string`
    },
    
    diaData: {
      sql: `dia_data`,
      type: `time`
    },
    skDimDataPedido: {
      sql: `sk_dim_data_id`,
      type: `number`,
      primaryKey: true
    }
  },
  
  
  dataSource: `default`
});
