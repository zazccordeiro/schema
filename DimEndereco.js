cube(`DimEndereco`, {
  sql: `SELECT * FROM public.dim_endereco`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [celularvalidacao, idLojista, idmensageirocliente, cid, validacaovalida, ecid, flagVisitaValida, quilometragemPercorrida, cidade, atestadoCovid, descricaoPedido, operationId, codigoPedido, possuiCid, camposminimospreenchidos, listaIdIfood, procInstId, diasCorridosAtestado, dateFrom, dateTo]
    }
  },
  
  dimensions: {
    skDimEndereco: {
      sql: `sk_dim_endereco`,
      type: `number`,
      primaryKey: true
    },
    fotoAtestado: {
      sql: `foto_atestado`,
      type: `string`
    },
    
    celularvalidacao: {
      sql: `celularvalidacao`,
      type: `string`
    },
    
    fotoComprovanteProduto: {
      sql: `foto_comprovante_produto`,
      type: `string`
    },
    
    pendentemaquinainventario: {
      sql: `pendentemaquinainventario`,
      type: `string`
    },
    
    idLojista: {
      sql: `id_lojista`,
      type: `string`
    },
    
    camposminimos: {
      sql: `camposminimos`,
      type: `string`
    },
    
    nomecliente: {
      sql: `nomecliente`,
      type: `string`
    },
    
    idmensageirocliente: {
      sql: `idmensageirocliente`,
      type: `string`
    },
    
    telefone: {
      sql: `telefone`,
      type: `string`
    },
    
    cid: {
      sql: `cid`,
      type: `string`
    },
    
    fotoAtestadoAprovado: {
      sql: `foto_atestado_aprovado`,
      type: `string`
    },
    
    ambiente: {
      sql: `ambiente`,
      type: `string`
    },
    
    nomedecisor: {
      sql: `nomedecisor`,
      type: `string`
    },
    
    fotoComprovanteCadastro: {
      sql: `foto_comprovante_cadastro`,
      type: `string`
    },
    
    motivoFotosTransacaoTeste: {
      sql: `motivo_fotos_transacao_teste`,
      type: `string`
    },
    
    businessKey: {
      sql: `business_key`,
      type: `string`
    },
    
    latlong: {
      sql: `latlong`,
      type: `string`
    },
    
    nrofactiveinstances: {
      sql: `nrofactiveinstances`,
      type: `string`
    },
    
    validacaovalida: {
      sql: `validacaovalida`,
      type: `string`
    },
    
    emaildecisor: {
      sql: `emaildecisor`,
      type: `string`
    },
    
    codigosPagamento: {
      sql: `codigos_pagamento`,
      type: `string`
    },
    
    vendarealizada: {
      sql: `vendarealizada`,
      type: `string`
    },
    
    atualizacaocadastral: {
      sql: `atualizacaocadastral`,
      type: `string`
    },
    
    detalhesPendencia: {
      sql: `detalhes_pendencia`,
      type: `string`
    },
    
    adquirente: {
      sql: `adquirente`,
      type: `string`
    },
    
    urlFotosTransacaoTeste: {
      sql: `url_fotos_transacao_teste`,
      type: `string`
    },
    
    horafimprocesso: {
      sql: `horafimprocesso`,
      type: `string`
    },
    
    tpv: {
      sql: `tpv`,
      type: `string`
    },
    
    statusAuditoriaRh: {
      sql: `status_auditoria_rh`,
      type: `string`
    },
    
    ecid: {
      sql: `ecid`,
      type: `string`
    },
    
    fotoSerialNumbers: {
      sql: `foto_serial_numbers`,
      type: `string`
    },
    
    produto: {
      sql: `produto`,
      type: `string`
    },
    
    flagVisitaValida: {
      sql: `flag_visita_valida`,
      type: `string`
    },
    
    fotosAtestado: {
      sql: `fotos_atestado`,
      type: `string`
    },
    
    iniciarprocesso: {
      sql: `iniciarprocesso`,
      type: `string`
    },
    
    quilometragemPercorrida: {
      sql: `quilometragem_percorrida`,
      type: `string`
    },
    
    fotoSelfieFachada: {
      sql: `foto_selfie_fachada`,
      type: `string`
    },
    
    cep: {
      sql: `cep`,
      type: `string`
    },
    
    agendamento: {
      sql: `agendamento`,
      type: `string`
    },
    
    logradouro: {
      sql: `logradouro`,
      type: `string`
    },
    
    fotoComprovantesPagamento: {
      sql: `foto_comprovantes_pagamento`,
      type: `string`
    },
    
    cidade: {
      sql: `cidade`,
      type: `string`
    },
    
    numeroChamado: {
      sql: `numero_chamado`,
      type: `string`
    },
    
    faturamentoestimado: {
      sql: `faturamentoestimado`,
      type: `string`
    },
    
    detalhesMotivoRecusa: {
      sql: `detalhes_motivo_recusa`,
      type: `string`
    },
    
    tipoPagamento: {
      sql: `tipo_pagamento`,
      type: `string`
    },
    
    tipoReembolso: {
      sql: `tipo_reembolso`,
      type: `string`
    },
    
    latitude: {
      sql: `latitude`,
      type: `string`
    },
    
    horainiciovisita: {
      sql: `horainiciovisita`,
      type: `string`
    },
    
    atestadoCovid: {
      sql: `atestado_covid`,
      type: `string`
    },
    
    nrofcompletedinstances: {
      sql: `nrofcompletedinstances`,
      type: `string`
    },
    
    fotoConfirmacaoProposta: {
      sql: `foto_confirmacao_proposta`,
      type: `string`
    },
    
    cnpjcpf: {
      sql: `cnpjcpf`,
      type: `string`
    },
    
    dataFimAtestado: {
      sql: `data_fim_atestado`,
      type: `string`
    },
    
    dataAtestado: {
      sql: `data_atestado`,
      type: `string`
    },
    
    precoTotal: {
      sql: `preco_total`,
      type: `string`
    },
    
    dataFalta: {
      sql: `data_falta`,
      type: `string`
    },
    
    descricaoPedido: {
      sql: `descricao_pedido`,
      type: `string`
    },
    
    urlFotosSeriais: {
      sql: `url_fotos_seriais`,
      type: `string`
    },
    
    planoPromocional: {
      sql: `plano_promocional`,
      type: `string`
    },
    
    listaprocessos: {
      sql: `listaprocessos`,
      type: `string`
    },
    
    anexosdetalhes: {
      sql: `anexosdetalhes`,
      type: `string`
    },
    
    motivoFotosSeriais: {
      sql: `motivo_fotos_seriais`,
      type: `string`
    },
    
    operacao: {
      sql: `operacao`,
      type: `string`
    },
    
    fechouAgora: {
      sql: `fechou_agora`,
      type: `string`
    },
    
    reprovadoFotosTransacaoTeste: {
      sql: `reprovado_fotos_transacao_teste`,
      type: `string`
    },
    
    ecnovo: {
      sql: `ecnovo`,
      type: `string`
    },
    
    bairro: {
      sql: `bairro`,
      type: `string`
    },
    
    reprovadoFotosSeriais: {
      sql: `reprovado_fotos_seriais`,
      type: `string`
    },
    
    fotoContrato: {
      sql: `foto_contrato`,
      type: `string`
    },
    
    horarioLocalizacao: {
      sql: `horario_localizacao`,
      type: `string`
    },
    
    fotoAtestadoMotivoReprovada: {
      sql: `foto_atestado_motivo_reprovada`,
      type: `string`
    },
    
    clientecurioso: {
      sql: `clientecurioso`,
      type: `string`
    },
    
    cnae: {
      sql: `cnae`,
      type: `string`
    },
    
    fotoBancario: {
      sql: `foto_bancario`,
      type: `string`
    },
    
    auditor: {
      sql: `auditor`,
      type: `string`
    },
    
    processoatual: {
      sql: `processoatual`,
      type: `string`
    },
    
    motivorecusa: {
      sql: `motivorecusa`,
      type: `string`
    },
    
    businesskey: {
      sql: `businesskey`,
      type: `string`
    },
    
    cpf: {
      sql: `cpf`,
      type: `string`
    },
    
    uf: {
      sql: `uf`,
      type: `string`
    },
    
    operationId: {
      sql: `operation_id`,
      type: `string`
    },
    
    longitude: {
      sql: `longitude`,
      type: `string`
    },
    
    extratosim: {
      sql: `extratosim`,
      type: `string`
    },
    
    planoEscolha: {
      sql: `plano_escolha`,
      type: `string`
    },
    
    datafimvisita: {
      sql: `datafimvisita`,
      type: `string`
    },
    
    leadqualificado: {
      sql: `leadqualificado`,
      type: `string`
    },
    
    nrofinstances: {
      sql: `nrofinstances`,
      type: `string`
    },
    
    precoUnitario: {
      sql: `preco_unitario`,
      type: `string`
    },
    
    possuiAtestado: {
      sql: `possui_atestado`,
      type: `string`
    },
    
    codigoPedido: {
      sql: `codigo_pedido`,
      type: `string`
    },
    
    dataInicioAtestado: {
      sql: `data_inicio_atestado`,
      type: `string`
    },
    
    centroCusto: {
      sql: `centro_custo`,
      type: `string`
    },
    
    loopcounter: {
      sql: `loopcounter`,
      type: `string`
    },
    
    listaMotivos: {
      sql: `lista_motivos`,
      type: `string`
    },
    
    listaSnSumup: {
      sql: `lista_sn_sumup`,
      type: `string`
    },
    
    resultadoAuditoria: {
      sql: `resultado_auditoria`,
      type: `string`
    },
    
    horainicioprocesso: {
      sql: `horainicioprocesso`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    fotoSlip: {
      sql: `foto_slip`,
      type: `string`
    },
    
    datainiciovisita: {
      sql: `datainiciovisita`,
      type: `string`
    },
    
    plano: {
      sql: `plano`,
      type: `string`
    },
    
    fotoEmail: {
      sql: `foto_email`,
      type: `string`
    },
    
    valorReembolso: {
      sql: `valor_reembolso`,
      type: `string`
    },
    
    processoinicializar: {
      sql: `processoinicializar`,
      type: `string`
    },
    
    celular: {
      sql: `celular`,
      type: `string`
    },
    
    reprovadoFotosCompPagamento: {
      sql: `reprovado_fotos_comp_pagamento`,
      type: `string`
    },
    
    tipoCliente: {
      sql: `tipo_cliente`,
      type: `string`
    },
    
    nomeestabelecimento: {
      sql: `nomeestabelecimento`,
      type: `string`
    },
    
    possuiCid: {
      sql: `possui_cid`,
      type: `string`
    },
    
    camposminimospreenchidos: {
      sql: `camposminimospreenchidos`,
      type: `string`
    },
    
    possuiinteresse: {
      sql: `possuiinteresse`,
      type: `string`
    },
    
    listaIdIfood: {
      sql: `lista_id_ifood`,
      type: `string`
    },
    
    contato: {
      sql: `contato`,
      type: `string`
    },
    
    procInstId: {
      sql: `proc_inst_id`,
      type: `string`
    },
    
    serialNumber: {
      sql: `serial_number`,
      type: `string`
    },
    
    horafimvisita: {
      sql: `horafimvisita`,
      type: `string`
    },
    
    emailcliente: {
      sql: `emailcliente`,
      type: `string`
    },
    
    diasCorridosAtestado: {
      sql: `dias_corridos_atestado`,
      type: `string`
    },
    
    stonecode: {
      sql: `stonecode`,
      type: `string`
    },
    
    cnpj: {
      sql: `cnpj`,
      type: `string`
    },
    
    fotoVinteQuatro: {
      sql: `foto_vinte_quatro`,
      type: `string`
    },
    
    diasAbonoAtestado: {
      sql: `dias_abono_atestado`,
      type: `string`
    },
    
    motivoFotosCompPagamento: {
      sql: `motivo_fotos_comp_pagamento`,
      type: `string`
    },
    
    tpvmedio: {
      sql: `tpvmedio`,
      type: `string`
    },
    
    data: {
      sql: `data`,
      type: `string`
    },
    
    urlFotosCompPagamento: {
      sql: `url_fotos_comp_pagamento`,
      type: `string`
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
