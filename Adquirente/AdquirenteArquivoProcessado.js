cube(`AdquirenteArquivoProcessado`, {
  sql: `SELECT * FROM fato.adquirente_arquivo_processado`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Adquirente: {
    sql: `${Adquirente}.sk_adquirente = ${AdquirenteArquivoProcessado}.sk_adquirente_id`,
    relationship: `hasMany`
  },
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adquirenteArquivoProcessadoId, valorLiquidoSomaTotalRos]
    }
  },
  
  dimensions: {
    adquirenteArquivoProcessadoId: {
      sql: `adquirente_arquivo_processado_id`,
      type: `string`
    },
    
    versaoLayout: {
      sql: `versao_layout`,
      type: `string`
    },
    
    somaValoresNegociados: {
      sql: `soma_valores_negociados`,
      type: `string`
    },
    
    transmissao: {
      sql: `transmissao`,
      type: `string`
    },
    
    nomeArquivoEdi: {
      sql: `nome_arquivo_edi`,
      type: `string`
    },
    
    valorBrutoAntecipadoSomaTotalRos: {
      sql: `valor_bruto_antecipado_soma_total_ros`,
      type: `string`
    },
    
    caixaPostal: {
      sql: `caixa_postal`,
      type: `string`
    },
    
    valorLiquidoSomaTotalRos: {
      sql: `valor_liquido_soma_total_ros`,
      type: `string`
    },
    
    valorBrutoSomaTotalRos: {
      sql: `valor_bruto_soma_total_ros`,
      type: `string`
    },
    
    periodoInicial: {
      sql: `periodo_inicial`,
      type: `time`
    },
    
    dataHoraProcessamentoArquivo: {
      sql: `data_hora_processamento_arquivo`,
      type: `time`
    },
    
    periodoFinal: {
      sql: `periodo_final`,
      type: `time`
    },
    
    dataProcessamento: {
      sql: `data_processamento`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
