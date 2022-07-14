cube(`VisitasConecta`, {
    sql: `SELECT * FROM fato.fat_visita`,
  
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },

    joins: {
        operacao: {
          sql: `${operacao}.sk_dim_operacao = ${visitasConecta}.sk_dim_operacao`,
          relationship: `belongsTo`
        },

        promotor: {
            sql: `${promotor}.sk_dim_promotor = ${visitasConecta}.sk_dim_promotor`,
            relationship: `belongsTo`
        
        },
        regiao: {
            sql: `${regiao}.cadastroid = ${visitasConecta}.cadastroid`,
            relationship: `belongsTo`
        
        },


    measures: {
        count: {
            type: `count`
            }
        },

    dimensions: {
            skOperacao: {
                sql: `sk_dim_operacao`,
                type: `number`,
                shown: false
        },

            skPromotor: {
                sql: `sk_dim_promotor`,
                type: `number`,
                shown: false
        },
        
            skRegiao: {
                sql: `cadastroid`,
                type: `number`,
                shown: false
        },
    },

},

dataSource: `default`
});
