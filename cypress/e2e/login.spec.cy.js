// Importação de dados e objetos necessários
import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

// Instanciação dos objetos das páginas
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

// Descrição dos testes de login para Orange HRM
describe('LoginOrange HRM Tests', () => {
  
  // Cenário de teste: Login com credenciais INVÁLIDAS
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid() // Verificar acesso NEGADO
  })

  // Cenários de teste: Login com credenciais VÁLIDAS
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage() // Verificar acesso ao dashboard
  })

})