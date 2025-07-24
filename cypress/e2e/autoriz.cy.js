import * as data from "../helpers/default_data.json"

beforeEach('Начало теста', function () {
         cy.visit('/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
           });

afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик
        });

describe('Автотесты для формы логина и пароля', function () {

   it('Верный логин и верный пароль', function () {

        cy.get('#mail').type(data.login); // Ввели верный логин
        cy.get('#pass').type(data.password); /// Ввели верный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Видна надпись
    })

    it('Восстановления пароля', function () {

        cy.get('#forgotEmailButton').click(); // Нажать кнопку забыли пароль
        cy.get('#mailForgot').type(data.login); // Ввели верный логин
        cy.get('#restoreEmailButton').click();

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Видна надпись
    })

     it('Верный логин и не верный пароль', function () {

        cy.get('#mail').type(data.login); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); /// Ввели верный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Видна надпись
    })

    it('Не верный логин и верный пароль', function () {

        cy.get('#mail').type('gaerman@dolnikov.ru'); // Ввели не верный логин
        cy.get('#pass').type(data.password); /// Ввели верный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Видна надпись
    })

    it('Логин без @ и верный пароль', function () {

        cy.get('#mail').type('germandolnikov.ru'); // Ввели  логин без @
        cy.get('#pass').type(data.password); /// Ввели верный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Видна надпись
    })

    it('Приведение к строчным буквам в логине', function () {

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин, но с верхним регистром
        cy.get('#pass').type(data.password); /// Ввели верный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Видна надпись
    })
})

