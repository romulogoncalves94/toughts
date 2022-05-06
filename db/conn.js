const { Sequelize } = require('sequelize')

const sequelize = new Sequelize ('toughts', 'root', '@gorm4565$', {

    host: 'localhost',
    dialect: 'mysql',

})

try {

    sequelize.authenticate()
    console.log('Conectado ao Banco de Dados com sucesso!')

} catch (error) {

    console.log(`Não foi possível estabelecer conexão com o Banco de Dados: ${error}`)

}

module.exports = sequelize