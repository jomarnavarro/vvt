import { readFileSync } from 'fs';
import { join } from 'path';
import '@testing-library/jest-dom';


describe('Validation Unit tests', () => {
    beforeAll(() => {
        const html = readFileSync(join(__dirname, '../..', 'index.html'), 'utf-8');
        document.documentElement.innerHTML = html.toString();
    });

    test('form exists', () => {
        const form = document.querySelector('form');
        expect(form).toBeInTheDocument();
    });

    test('Form fields visible and invisible', () => {
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const male = document.getElementById('male');
        const female = document.getElementById('female');
        const other = document.getElementById('other');
        const description = document.getElementById('description');
        const state = document.querySelector('select#state');

        expect(firstName).toBeVisible();
        expect(lastName).toBeVisible();
        expect(email).toBeVisible();
        expect(male).toBeVisible();
        expect(female).toBeVisible();
        expect(other).toBeVisible();
        expect(description).toBeVisible();
        expect(state).toBeVisible();

        const firstNameErrorSpan = document.querySelector('span#firstName');
        const lastNameErrorSpan = document.querySelector('span#lastName');
        const emailErrorSpan = document.querySelector('span#email');
        const genderErrorSpan = document.querySelector('span#gender');
        const descriptionErrorSpan = document.querySelector('span#description');
        const stateErrorSpan = document.querySelector('span#state');

        expect(firstNameErrorSpan).not.toBeVisible();
        expect(lastNameErrorSpan).not.toBeVisible();
        expect(emailErrorSpan).not.toBeVisible();
        expect(genderErrorSpan).not.toBeVisible();
        expect(firstNameErrorSpan).not.toBeVisible();
        expect(descriptionErrorSpan).not.toBeVisible();
        expect(stateErrorSpan).not.toBeVisible();
    });
});
