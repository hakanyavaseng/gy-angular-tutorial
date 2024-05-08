import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, concat, concatMap, map, of, timer } from "rxjs";


/*
export function capitalLetterValidator(control : AbstractControl) : ValidationErrors | 
null {
    const value = control.value;
    const ascii : string[] = [];

    for(let n = 65; n <= 90; n++) {
        ascii.push(String.fromCharCode(n));
    }

    if(ascii.indexOf(value[0]) === -1) 
        return { capitalLetter : true };
    return null;
}
*/
/*
export function capitalLetterValidator(count : number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        const ascii : string[] = [];

        for(let n = 65; n <= 90; n++) {
            ascii.push(String.fromCharCode(n));
        }

        let state: boolean = true;
        for(let i = 0; i < count; i++) {
            if(ascii.indexOf(value[i]) === -1) {
                state = false;
                break;
            }
        }

        if(!state) 
            return { capitalLetter : true };
        return null;
    };
}
*/

//Async Validator
/*
export function validateAsyncValidator() : AsyncValidatorFn {
    return (control:AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        const source = of(true);

        return timer(5000)
        .pipe(
            concatMap(() => source), 
            map(() => {
                console.log("X");
                if(false)
                    return null;
                else
                    return { text: "..." };
            })
        );

    }
}
*/

export function matchPassword() : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const password = control.get('password').value;
        const confirmPassword = control.get('passwordConfirm').value;

        if(password !== confirmPassword)
            return { matchPassword : true };
        return null;
    }
}