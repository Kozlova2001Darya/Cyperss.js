describe('Автотест для покупки аватара', function () {

   it('Купить аватар', function () {

        cy.visit('https://pokemonbattle.ru/'); //Зашли на сайт    
        cy.get('#k_email').type('USER_LOGIN'); // Ввели верную почту 
        cy.get('#k_password').type('USER_PASSWORD'); /// Ввели верный пароль
        cy.get('.MuiButton-root').click(); // Нажать кнопку войти
        cy.wait(1000); // Ждем
        cy.get('.header_card_trainer').click(); // Войти в свой профиль
        cy.wait(1000); // Ждем
        cy.get('[data-qa="shop"]').click(); // Нажать на сменить аватар
        cy.wait(1000); // Ждем
        cy.get('.available > button').first().click();// Нажать Купить у первого доступного аватара
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // Вводим номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type('1226'); // Вводим срок действия карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Вводим CVV карты
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('NAME');// Вводим имя владельца действия карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// Нажимаем кнопку Оплатить
        cy.get('.style_1_base_input').type('56456'); //Вводим код из смс
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //Нажимаем Оплатить
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
     });
    })

