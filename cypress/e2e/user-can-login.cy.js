describe('User can login to system', () => {
  //positive test case 
  it('user can login with valid username and password', () => {
    //arrange 
    cy.visit('http://127.0.0.1:8000')
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('password')
    cy.get('.btn').click()
    //assert
    cy.get('.nav-link > .d-sm-none').should('have.text', 'Hi, SuperAdmin')
  })
})

//negatvie test case 1
it('user cannot login with valid username and wrong password', () => {
  //arrange
  cy.visit('http://127.0.0.1:8000')
  //act 
  cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
  cy.get(':nth-child(3) > .form-control').type('password-salah')
  cy.get('.btn').click()
  //assert
  cy.get('.invalid-feedback').should(
    'have.text',
    'These credentials do not match our records.'
  )
})

//negatvie test case 2
  it('user cannot login with invalid username and valid password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000')
    //act 
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('password-salah')
    cy.get('.btn').click()
    //assert
    cy.get('.invalid-feedback').should(
      'have.text',
      'These credentials do not match our records.'
    )
})

//negatvie test case 3
it('user cannot login with empty username and correct password', () => {
  //arrange
  cy.visit('http://127.0.0.1:8000')
  //act 
  cy.get(':nth-child(3) > .form-control').type('password')
  cy.get('.btn').click()
  //assert
  cy.get('.invalid-feedback').should(
    'have.text',
    'The email field is required.'
  )
})

//negatvie test case 4
it('user cannot login with empty username and correct password', () => {
  //arrange
  cy.visit('http://127.0.0.1:8000')
  //act 
  cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
  cy.get('.btn').click()
  //assert
  cy.get('.invalid-feedback').should(
    'have.text',
    'The password field is required.'
  )
})

//negative test case kuizz 
it.only('user cannot login without entering username and password', () => {
  //arrange
  cy.visit('http://127.0.0.1:8000')

  //act
  cy.get('.btn').click()

  //assert
  cy.get('.invalid-feedback').should(
    'have.text',
    'The email field is required.The password field is required.'
  )
})