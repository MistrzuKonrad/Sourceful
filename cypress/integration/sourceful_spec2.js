it("correct shipment of the 20 kg package ",() => {
    cy.visit('https://paczkadoukrainy.pl/')

    cy.get('input[name="parcelWeight"]').type('20').should('have.value', '20')


    // zgody 
    cy.contains(' Zobacz ceny ').click()


    cy.url().should('include', '/calculator.html?weight=200')

    cy.get('button').contains('Nadaj paczkę').click()
    
    //sender
    cy.get('#senderName')
    .type('Mobisense Monika Mazurek')

    cy.get('#senderPostalCode')
    .type('25-663')

    cy.get('#senderCity')
    .type('Kielce')

    cy.get('#senderStreet')
    .type('Olszewskiego')

    cy.get('#senderHouseNumber')
    .type('6')

    cy.get('#senderFlatNumber')
    .type('313')

    cy.get('#senderPhone')
    .type('664540929')

    cy.get('#senderEmail')
    .type('monika@sourceful.nl')

    //receiver

    cy.get('#receiverName')
    .type('Natalia Ivanova')

    cy.get('#recipientPostalCode')
    .type('19900')

    cy.get('input[name="recipentAddressCity"]').type("Chornobai")
    
    cy.contains('Chornobai').click()

    cy.get('input[name="recipentAddressStreet"]').type("Lenina St")
    cy.contains('Lenina St').click()
    

    cy.get('#receiverHouseNumber')
    .type('1')

    cy.get('#receiverFlatNumber')
    .type('1')

    cy.get('#receiverPhone')
    .type('505032236')

    cy.get('#receiverEmail')
    .type('natalia@ivanova.pl')

    //details
    //ex1
    cy.get('#parcelItemDescription')
    .type('Czekoladki')

    cy.get('#parcelItemQuantity')
    .type('2')

    cy.get('#parcelItemWeight')
    .type('2')

    cy.get('#parcelItemValueClientCurrency')
    .type('20')

    //ex2

    cy.get('button[style="color: #1362ad;"]').click()

    cy.get('input[name="parcelItemDescription-1"]').type("Zeszyt")

    cy.get('input[name="parcelItemQuantity-1"]').type("1")

    cy.get('input[name="parcelItemWeight-1"]').type("8")

    cy.get('input[name="parcelItemValueClientCurrency-1"]').type("5")

    //ex3
    cy.get('button[style="color: #1362ad;"]').click()

    cy.get('input[name="parcelItemDescription-2"]').type("Wózek")

    cy.get('input[name="parcelItemQuantity-2"]').type("1")

    cy.get('input[name="parcelItemWeight-2"]').type("10")

    cy.get('input[name="parcelItemValueClientCurrency-2"]').type("75")





    cy.contains('Oświadczam, że zapoznałem/-łam ').click()

    cy.contains('Oświadczam, że nie przesyłam towarów zabronionych w przesyłkach pocztowych').click()

    cy.contains('Wyrażam zgodę na przetwarzanie moich danych os').click()

    cy.contains('Oświadczam, że zamawiam usługę jako konsument i zapoznałem/-łam się z pouczeniem ').click()

    cy.get('#btn_next_step').click()

})