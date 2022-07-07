cube(`AdquirenteFluxo`, {
  sql: `SELECT * FROM fato.adquirente_fluxo`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },

  joins: {
    Adquirente: {
      sql: `${Adquirente}.sk_adquirente = ${AdquirenteFluxo}.sk_adquirente`,
      relationship: `belongsTo`
    },

    Arranjo: {
      sql: `${Arranjo}.sk_arranjo = ${AdquirenteFluxo}.sk_arranjo`,
      relationship: `belongsTo`
    },

    TipoPagamento: {
      sql: `${TipoPagamento}.sk_tipo_pagamento = ${AdquirenteFluxo}.sk_tipo_pagamento`,
      relationship: `belongsTo`
    },

    MeioCaptura: {
      sql: `${MeioCaptura}.sk_meio_captura = ${AdquirenteFluxo}.sk_meio_captura`,
      relationship: `belongsTo`
    },

    Ajuste: {
      sql: `${Ajuste}.sk_ajuste = ${AdquirenteFluxo}.sk_ajuste`,
      relationship: `belongsTo`
    },

    TipoAjuste: {
      sql: `${TipoAjuste}.sk_tipo_ajuste = ${AdquirenteFluxo}.sk_tipo_ajuste`,
      relationship: `belongsTo`
    },

    FaixaParcelamento: {
      sql: `${FaixaParcelamento}.sk_faixa_parcelamento = ${AdquirenteFluxo}.sk_faixa_parcelamento`,
      relationship: `belongsTo`
    },

    Tempo: {
      sql: `${Tempo}.sk_date = ${AdquirenteFluxo}.sk_tempo_venda`,
      relationship: `belongsTo`
    },

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [identificadorAntecipacao, referenciaCodigoPedido, identificadorRegistro, identificaPagamentoAjuste, tid, identificadorTaxaEmbarqueValorEntrada, indicadorRecebaRapido, identificaPagamento, identificadorRevendaAceleracao]
    },

    valorBruto: {
      type: `sum`,
      sql: `valor_bruto`,
      drillMembers: [identificadorAntecipacao, referenciaCodigoPedido, identificadorRegistro, identificaPagamentoAjuste, tid, identificadorTaxaEmbarqueValorEntrada, indicadorRecebaRapido, identificaPagamento, identificadorRevendaAceleracao]
    },

    tarifaAdministrativa: {
      type: `sum`,
      sql: `tarifa_administrativa`,
      drillMembers: [identificadorAntecipacao, referenciaCodigoPedido, identificadorRegistro, identificaPagamentoAjuste, tid, identificadorTaxaEmbarqueValorEntrada, indicadorRecebaRapido, identificaPagamento, identificadorRevendaAceleracao]
    },
    valorTaxaAdministrativa: {
      type: `sum`,
      sql: `valor_taxa_administrativa`,
      drillMembers: [identificadorAntecipacao, referenciaCodigoPedido, identificadorRegistro, identificaPagamentoAjuste, tid, identificadorTaxaEmbarqueValorEntrada, indicadorRecebaRapido, identificaPagamento, identificadorRevendaAceleracao]
    },

    valorLiquido: {
      type: `sum`,
      sql: `valor_liquido`,
      drillMembers: [identificadorAntecipacao, referenciaCodigoPedido, identificadorRegistro, identificaPagamentoAjuste, tid, identificadorTaxaEmbarqueValorEntrada, indicadorRecebaRapido, identificaPagamento, identificadorRevendaAceleracao]
    },

    valorBrutoAntecipado: {
      type: `sum`,
      sql: `valor_bruto_antecipado`,
      drillMembers: [identificadorAntecipacao, referenciaCodigoPedido, identificadorRegistro, identificaPagamentoAjuste, tid, identificadorTaxaEmbarqueValorEntrada, indicadorRecebaRapido, identificaPagamento, identificadorRevendaAceleracao]
    },

    taxaAdministrativa: {
      type: `avg`,
      sql: `taxa_administrativa`,
      drillMembers: [identificadorAntecipacao, referenciaCodigoPedido, identificadorRegistro, identificaPagamentoAjuste, tid, identificadorTaxaEmbarqueValorEntrada, indicadorRecebaRapido, identificaPagamento, identificadorRevendaAceleracao]
    },
    taxaRecebaRapido: {
      type: `avg`,
      sql: `taxa_receba_rapido`,
      drillMembers: [identificadorAntecipacao, referenciaCodigoPedido, identificadorRegistro, identificaPagamentoAjuste, tid, identificadorTaxaEmbarqueValorEntrada, indicadorRecebaRapido, identificaPagamento, identificadorRevendaAceleracao]
    },
  },

  dimensions: {

    identificadorRegistro: {
      sql: `identificador_registro`,
      type: `number`,
      primaryKey: true
    },
    skAdquirente: {
      sql: `sk_adquirente`,
      type: `number`,
      shown: false
    },
    skArranjo: {
      sql: `sk_arranjo`,
      type: `number`,
      shown: false
    },
    skTipoPagamento: {
      sql: `sk_tipo_pagamento`,
      type: `number`,
      shown: false
    },
    skMeioCaptura: {
      sql: `sk_meio_captura`,
      type: `number`,
      shown: false
    },
    skAjuste: {
      sql: `sk_ajuste`,
      type: `number`,
      shown: false
    },
    skTipoAjuste: {
      sql: `sk_tipo_ajuste`,
      type: `number`,
      shown: false
    },
    skFaixaParcelamento: {
      sql: `sk_faixa_parcelamento`,
      type: `number`,
      shown: false
    },
    skArquivoProcessado: {
      sql: `sk_arquivo_processado`,
      type: `number`,
      shown: false
    },
    skTempoVenda: {
      sql: `sk_tempo_venda`,
      type: `number`,
      shown: false
    },
    skTempoPagamento: {
      sql: `sk_tempo_pagamento`,
      type: `number`,
      shown: false
    },

    numeroLogicoTerminal: {
      sql: `numero_logico_terminal`,
      type: `string`
    },

    grupoCartoes: {
      sql: `grupo_cartoes`,
      type: `string`
    },

    indicadorCieloPromo: {
      sql: `indicador_cielo_promo`,
      type: `string`
    },

    indicadorSaldoAberto: {
      sql: `indicador_saldo_aberto`,
      type: `string`
    },

    identificadorAntecipacao: {
      sql: `identificador_antecipacao`,
      type: `string`
    },

    estabelecimento: {
      sql: `estabelecimento`,
      type: `string`
    },

    referenciaCodigoPedido: {
      sql: `referencia_codigo_pedido`,
      type: `string`
    },

    tipoTransacao: {
      sql: `tipo_transacao`,
      type: `string`
    },

    tipoCartao: {
      sql: `tipo_cartao`,
      type: `string`
    },

    banco: {
      sql: `banco`,
      type: `string`
    },

    agencia: {
      sql: `agencia`,
      type: `string`
    },

    numeroResumoOperacao: {
      sql: `numero_resumo_operacao`,
      type: `string`
    },

    motivoRejeicao: {
      sql: `motivo_rejeicao`,
      type: `string`
    },

    nsuDoc: {
      sql: `nsu_doc`,
      type: `string`
    },

    conceitoAplicado: {
      sql: `conceito_aplicado`,
      type: `string`
    },

    codigoVenda: {
      sql: `codigo_venda`,
      type: `string`
    },

    identificaPagamentoAjuste: {
      sql: `identifica_pagamento_ajuste`,
      type: `string`
    },

    estabelecimentoMatriz: {
      sql: `estabelecimento_matriz`,
      type: `string`
    },

    codigoAutorizacao: {
      sql: `codigo_autorizacao`,
      type: `string`
    },

    modoEntradaCartao: {
      sql: `modo_entrada_cartao`,
      type: `string`
    },

    tid: {
      sql: `tid`,
      type: `string`
    },

    numeroNotaFiscal: {
      sql: `numero_nota_fiscal`,
      type: `string`
    },

    numeroCartaoTruncado: {
      sql: `numero_cartao_truncado`,
      type: `string`
    },

    identificadorTaxaEmbarqueValorEntrada: {
      sql: `identificador_taxa_embarque_valor_entrada`,
      type: `string`
    },

    indicadorTaxaMinima: {
      sql: `indicador_taxa_minima`,
      type: `string`
    },

    numeroUnicoTransacao: {
      sql: `numero_unico_transacao`,
      type: `string`
    },

    indicadorRecebaRapido: {
      sql: `indicador_receba_rapido`,
      type: `string`
    },

    conta: {
      sql: `conta`,
      type: `string`
    },

    numeroOperacaoAntecipacao: {
      sql: `numero_operacao_antecipacao`,
      type: `string`
    },

    numeroUnicoRo: {
      sql: `numero_unico_ro`,
      type: `string`
    },

    fluxo: {
      sql: `fluxo`,
      type: `string`
    },

    identificaPagamento: {
      sql: `identifica_pagamento`,
      type: `string`
    },

    identificadorRevendaAceleracao: {
      sql: `identificador_revenda_aceleracao`,
      type: `string`
    },

    dataVencimentoOriginal: {
      sql: `data_vencimento_original`,
      type: `time`
    },

    dataCapturaTransacao: {
      sql: `data_captura_transacao`,
      type: `time`
    },

    dataApresentacao: {
      sql: `data_apresentacao`,
      type: `time`
    },

    horaTransacao: {
      sql: `hora_transacao`,
      type: `time`
    },

    dataVenda: {
      sql: `${Tempo.dayDate}`,
      type: `time`
  },
  
  },

  dataSource: `default`
});
