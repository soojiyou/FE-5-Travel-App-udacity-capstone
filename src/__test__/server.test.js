import { handleSubmit, requestURL } from "../js/formHandler";

global.fetch = require('jest-fetch-mock');

import fetchLocation from '../src/client/views/page-trips/js/fetchLocation';

beforeEach(() => {
    fetch.resetMocks();
});

describe('Test the fetch', () => {
    it('it should return country name', async () => {
        fetch.mockResponseOnce(JSON.stringify({
            result: [
                {
                    name: 'Rome',
                    countryName: 'Italy',
                }],
        }));
        const res = await fetchLocation();
        expect(res).toEqual({ result: [{ name: 'Rome', countryName: 'Italy' }] });
        expect(fetch.mock.calls.length).toEqual(1);
    })
})



describe('Testing: "handleSubmit()"', () => {
    test('"handleSubmit()" is a valid function (True)', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
    test('"handleSubmit()" exists (True)', async () => {
        expect(handleSubmit).toBeDefined();
    });
});



describe('Testing: "requestURL()"', () => {
    test('"requestURL()" is a valid function (True)', async () => {
        expect(typeof requestURL).toBe("function");
    });
    test('"requestURL()" exists (True)', async () => {
        expect(requestURL).toBeDefined();
    });
});


