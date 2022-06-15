cube(`FatIfood`, {
  sql: `SELECT * FROM conecta.fat_ifood`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dataPedido]
    },
    
    ocurrencesAmount: {
      sql: `ocurrences_amount`,
      type: `sum`
    },
    
    cancellationsAmount: {
      sql: `cancellations_amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    dataPrevistaPagamento: {
      sql: `data_prevista_pagamento`,
      type: `time`
    },
    
    dataCancelamento: {
      sql: `data_cancelamento`,
      type: `time`
    },
    
    dataPedido: {
      sql: `data_pedido`,
      type: `time`
    },
    
    dataOcorrencia: {
      sql: `data_ocorrencia`,
      type: `time`
    },
    
    dataUltimaDataProcessamento: {
      sql: `data_ultima_data_processamento`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
