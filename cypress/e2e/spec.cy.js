const URL = 'https://automationexercise.com/'
const firstName = `test${Math.floor(Math.random() * 100)}`
const lastName = `rakib`
const email = `${firstName}_${lastName}@gmail.com`
const password = 'testPassword123'
const days = '14'
const months = 'May'
const years = '1998'
const company = 'Tekarsh'
const address = '4283 Lynn Avenue'
const address2 = 'Apt 7'
const country = 'United States'
const state = 'Wisconsin'
const city = 'Kennan'
const zipCode = '54537'
const mobileNumber = '715-474-0588'
const nameOnCard = `${firstName} ${lastName}`
const cardNumber = '4024007126296861'
const cvc = '759'
const expiryMonth = '04'
const expiryYear = '2026'


describe('Automation Task', () => {
  it('It should do the provided automation task', () => {
    // visit automation exercise and go to login signup page
    cy.visit(URL)
    cy.get('a[href="/login"]').click() 
    cy.url().should('include', 'login')

    // sign up 
    cy.get('[data-qa="signup-name"]').type(`${firstName} ${lastName}`)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    // fill up all the information and create account
    cy.url().should('include', 'signup')
    cy.get('input[value="Mr"]').check()
    cy.get('input[data-qa="password"]').type(password)
    cy.get('select[data-qa="days"]').select(days)
    cy.get('select[data-qa="months"]').select(months)
    cy.get('select[data-qa="years"]').select(years)

    cy.get('input[id="newsletter"]').check().should('be.checked')
    cy.get('input[id="optin"]').check().should('be.checked')

    cy.get('input[data-qa="first_name"]').type(firstName)
    cy.get('input[data-qa="last_name"]').type(lastName)
    cy.get('input[data-qa="company"]').type(company)
    cy.get('input[data-qa="address"]').type(address)
    cy.get('input[data-qa="address2"]').type(address2)
    cy.get('select[data-qa="country"]').select(country)
    cy.get('input[data-qa="state"]').type(state)
    cy.get('input[data-qa="city"]').type(city)
    cy.get('input[data-qa="zipcode"]').type(zipCode)
    cy.get('input[data-qa="mobile_number"]').type(mobileNumber)
    cy.get('button[data-qa="create-account"]').click()
    cy.url().should('include', 'account_created') 
    cy.get('a[data-qa="continue-button"]').click()

    // goto products page and select a random product
    cy.get('a[href="/products"]').click()
    cy.url().should('include', 'products')

    // each product contain anchor tag with data-product-id attribute. 
    // randomly select one of the anchor and click
    cy.get('a[data-product-id]').then((anchors) => {
      const randomIndex = Math.floor(Math.random() * anchors.length)
      const randomProductAnchor = anchors.eq(randomIndex)
      cy.wrap(randomProductAnchor).click()
    })

    // add product to cart
    //cy.get('button.btn.btn-default.cart').click();

    // go to view cart
    cy.get('#cartModal a[href="/view_cart"]').click()
    // go to check out
    cy.get('a.btn.btn-default.check_out').click()
    cy.url().should('include', 'checkout')
    // go to payment
    cy.get('a[href="/payment"]').click()
    cy.url().should('include', 'payment')
    // complete payment
    cy.get('input[data-qa="name-on-card"]').type(nameOnCard)
    cy.get('input[data-qa="card-number"]').type(cardNumber)
    cy.get('input[data-qa="cvc"]').type(cvc)
    cy.get('input[data-qa="expiry-month"]').type(expiryMonth)
    cy.get('input[data-qa="expiry-year"]').type(expiryYear)
    cy.get('button[data-qa="pay-button"]').click()
    // payment done
    cy.url().should('include', 'payment_done')
  })
})