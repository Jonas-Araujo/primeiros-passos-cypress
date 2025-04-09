// Importação de módulos e arquivos necessários
import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myinfoPage'

// Chance JS e Instanciação
const Chance = require('chance')
const chance = new Chance()

// Instanciação dos objetos das classes das páginas
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

// Descrição do conjunto de testes para Orange HRM
describe('Orange HRM Tests', () => {

  // Teste de atualização de informações de usuário com sucesso
  it('User Info Update - Success', () => {
    // Acessar página de login e realizar login
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    // Verificar página de dashboard
    dashboardPage.checkDashboardPage()

    // Acessar seção de informações pessoais
    menuPage.accessMyInfo()

    // Preencher informações pessoais
    /*
    myInfoPage.fillPersonalDetails('First Name', 'Last Name', 'nickName')
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', 'Drivers Number', '2025-07-29', '123456', '0987654')
    */

    // Preencher informações pessoais utilizando Chance JS
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', 'Drivers Number', '2025-07-29', '123456', '0987654')

    // Preencher status e salvar formulário
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})