cube(`Data`, {
  sql: `SELECT * FROM public.dim_data`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
  },
  
  measures: {
    quantidadeRegistros: {
      type: `count`,
      drillMembers: [numeroAno],
      shown: true,
    }
  },
  
  dimensions: {
    skDimDataId: {
      sql: `sk_dim_data_id`,
      type: `number`,
      primaryKey: true,
    },

    diaData: {
      sql: `dia_data`,
      type: `time`,
      shown: true,
    },

    numeroAno: {
      sql: `numero_ano`,
      type: `number`,
      shown: true,
    },

    numeroMes: {
      sql: `nomero_mes`,
      type: `number`,
      shown: true,
    },

    numeroDiaAno: {
      sql: `numero_dia_ano`,
      type: `number`,
      shown: true,
    },

    numeroDiaMes: {
      sql: `numero_dia_mes`,
      type: `number`,
      shown: true,
    },
    
    numeroDiaSemana: {
      sql: `numero_dia_semana`,
      type: `number`,
      shown: true,
    },
    
    numeroSemanaAno: {
      sql: `numero_semana_ano`,
      type: `number`,
      shown: true,
    },
    
    numeroTrimestre: {
      sql: `numero_trimestre`,
      type: `number`,
      shown: true,
    },
    
    numeroSemanaMes: {
      sql: `numero_semana_mes`,
      type: `number`,
      shown: true,
    },
    
    numeroTipoAno: {
      sql: `numero_tipo_ano`,
      type: `number`,
      shown: true,
    },

    nomeDiaSemana: {
      sql: `nome_dia_semana`,
      type: `string`,
      shown: true,
    },

    nomeMes: {
      sql: `nomes_mes`,
      type: `string`,
      shown: true,
    },

    nomeTrimestre: {
      sql: `nome_trimestre`,
      type: `string`,
      shown: true,
    },

    nomeTrimestreAno: {
      sql: `nome_trimestre_ano`,
      type: `string`,
      shown: true,
    },

    nomeDia: {
      sql: `nome_dia`,
      type: `string`,
      shown: true,
    },

    nomeSemana: {
      sql: `nome_semana`,
      type: `string`,
      shown: true,
    },

    nomeSemanaMes: {
      sql: `nome_semana_mes`,
      type: `string`,
      shown: true,
    },
    
    nomeTipoDiaSemana: {
      sql: `nome_tipo_dia_semana`,
      type: `string`,
      shown: true,
    },

    fimSemana: {
      sql: `fim_semana`,
      type: `string`,
      shown: true,
    },
    
    qtdDiasMes: {
      sql: `qtd_dias_mes`,
      type: `number`,
      shown: true,
    },
    
    skDimSemanaId: {
      sql: `sk_dim_semana_id`,
      type: `number`,
      shown: true,
    },

    skDimMesId: {
      sql: `sk_dim_mes_id`,
      type: `number`,
      shown: false,
    },
    
    skDimTrimestreId: {
      sql: `sk_dim_trimestre_id`,
      type: `number`,
      shown: false,
    },
    
    skDimAnoId: {
      sql: `sk_dim_ano_id`,
      type: `number`,
      shown: false,
    },
    
  },
  
  dataSource: `default`
});
