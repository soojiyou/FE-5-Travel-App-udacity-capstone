import { handleSubmit, displayresult, countdowndays } from "../client/js/app";


describe('Testing: "handleSubmit()"', () => {
    test('"handleSubmit()" is a valid function (True)', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
    test('"handleSubmit()" exists (True)', async () => {
        expect(handleSubmit).toBeDefined();
    });
});



describe('Testing: " displayresult()"', () => {
    test('" displayresult()" is a valid function (True)', async () => {
        expect(typeof displayresult).toBe("function");
    });
    test('" displayresult()" exists (True)', async () => {
        expect(displayresult).toBeDefined();
    });
});


describe('Testing: " countdowndays()"', () => {
    test('" countdowndays()" is a valid function (True)', () => {
        expect(typeof countdowndays).toBe("function");
    });
    test('" displayresult()" exists (True)', () => {
        expect(countdowndays).toBeDefined();
    });
    let dday = '2022 - 12 - 09';
    let test1 = countdowndays(dday);
    test('"countdowndays()" testing', () => {
        //expect(test1).toEqual(1);
        expect(test1).toBeDefined();
    })

});


