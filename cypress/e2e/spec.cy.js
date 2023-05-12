describe('template spec', () => {
  it('It should visit Automation Exercise', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('a[href="/login"]').click(); 
    
    cy.url().should('include', 'login')

    cy.get('[data-qa="signup-name"]').type('test_rakib')
    cy.get('[data-qa="signup-email"]').type('rak_test@gmail.com')
    cy.get('[data-qa="signup-button"]').click()

    cy.url().should('include', 'signup')
    cy.get('input[value="Mr"]').check()
    cy.get('input[data-qa="password"]').type('dummyPassword123')
    cy.get('select[data-qa="days"]').select(14)
    cy.get('select[data-qa="months"]').select('May')
    cy.get('select[data-qa="years"]').select("1998")

    cy.get('input[id="newsletter"]').check().should('be.checked')
    cy.get('input[id="optin"]').check().should('be.checked')

    cy.get('input[data-qa="first_name"]').type('test')
    cy.get('input[data-qa="last_name"]').type('rakib')
    cy.get('input[data-qa="company"]').type('tekarsh')
    cy.get('input[data-qa="address"]').type('Kandirpar City Corporation')
    cy.get('input[data-qa="address2"]').type('Adarsha Sadar')
    cy.get('select[data-qa="country"]').select("India")
    cy.get('input[data-qa="state"]').type('Chittagong')
    cy.get('input[data-qa="city"]').type('Comilla')
    cy.get('input[data-qa="zipcode"]').type('3500')
    cy.get('input[data-qa="mobile_number"]').type('01234556789')
    cy.get('button[data-qa="create-account"]').click();
    cy.url().should('include', 'account_created') 
    cy.get('a[data-qa="continue-button"]').click();
    cy.get('a[href="/products"]').click();
    cy.url().should('include', 'products');
    cy.get('.choose').then(($anchors) => {
      // Select a random product index
      const randomIndex = Math.floor(Math.random() * $anchors.length);

      // Get the anchor tag that has an href containing "product_details" for the random product
      const randomProductAnchor = $anchors.eq(randomIndex);

      // Click the anchor tag to view the product details
      cy.wrap(randomProductAnchor).click();
    });

    cy.get('button.btn.btn-default.cart').click();
    cy.get('#cartModal a[href="/view_cart"]').click();
    cy.get('a.btn.btn-default.check_out').click();
    cy.url().should('include', 'checkout');
    cy.get('a[href="/payment"]').click();
    cy.url().should('include', 'payment');

    cy.get('input[data-qa="name-on-card"]').type('test')
    cy.get('input[data-qa="card-number"]').type('1234567')
    cy.get('input[data-qa="cvc"]').type('123')
    cy.get('input[data-qa="expiry-month"]').type('07')
    cy.get('input[data-qa="expiry-year"]').type('2024')
    cy.get('button[data-qa="pay-button"]').click()
    cy.url().should('include', 'payment_done')
  })
})