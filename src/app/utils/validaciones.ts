export class Validations {
  inputValidator(event: any): void {
    // console.log(event.target.value);
    const pattern = /^[a-zA-Z0-9]*$/;
    // let inputChar = String.fromCharCode(event.charCode)
    // console.log('validation: ');
    // console.log(pattern.test(event.target.value));
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, '');
      // console.log(event.target.value);
      // invalid character, prevent input
    }
  }
  validateVarcharSpaces(val: any, event: any, num: number): any {
    const pattern = new RegExp(
      '^[(a-zA-Z0-9_\x22\x27-/$#äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ,. )]{0,' +
        num +
        '}$'
    );
    // console.log(pattern);
    // console.log('validaion: ');
    // console.log(pattern.test(val));
    if (!pattern.test(val)) {
      event.target.value = val.slice(0, -1);
      return val.slice(0, -1);
      // invalid character, prevent input
    } else {
      return val;
    }
  }

  validateAlphabetSpaces(val: any, event: any, num: number): any {
    const pattern = new RegExp(
      '^[(a-zA-Z_"/$#äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ,. )]{0,' +
        num +
        '}$'
    );
    // console.log(pattern);
    // console.log('validation: ');
    // console.log(pattern.test(val));
    if (!pattern.test(val)) {
      event.target.value = val.slice(0, -1);
      return val.slice(0, -1);
      // invalid character, prevent input
    } else {
      return val;
    }
  }

  validateVarcharEmail(val: any, event: any, num: number): any {
    const pattern = new RegExp('^[(a-z0-9_.@)]{0,' + num + '}$');
    // console.log(pattern);
    // console.log('validation: ');
    // console.log(pattern.test(val));
    if (!pattern.test(val)) {
      event.target.value = val.slice(0, -1);
      return val.slice(0, -1);
      // invalid character, prevent input
    } else {
      return val;
    }
  }

  validateVarchar(val: any, event: any, num: number): any {
    const pattern = new RegExp('^[(a-zA-Z0-9-)]{0,' + num + '}$');
    // console.log(pattern);
    // console.log('validation: ');
    // console.log(pattern.test(val));
    if (!pattern.test(val)) {
      event.target.value = val.slice(0, -1);
      return val.slice(0, -1);
      // invalid character, prevent input
    } else {
      return val;
    }
  }

  validatePhone(val: any, event: any, num: number): any {
    const pattern = new RegExp('^[(0-9-)]{0,' + num + '}$');
    // console.log(pattern);
    // console.log('validation: ');
    // console.log(pattern.test(val));
    if (!pattern.test(val)) {
      event.target.value = val.slice(0, -1);
      return val.slice(0, -1);
      // invalid character, prevent input
    } else {
      return val;
    }
  }

  validateAlphabet(val: any, event: any, num: number): any {
    const pattern = new RegExp('^[(a-zA-Z)]{0,' + num + '}$');
    // console.log(pattern);
    // console.log('validation: ');
    // console.log(pattern.test(val));
    if (!pattern.test(val)) {
      event.target.value = val.slice(0, -1);
      return val.slice(0, -1);
      // invalid character, prevent input
    } else {
      return val;
    }
  }

  validateDecimal(val: any, event: any, num1: number, num2: number): any {
    const pattern = new RegExp(
      '^[(0-9)(.)]{0,' + num1 + '}[(.)]{0,1}[(0-9)]{0,' + num2 + '}$'
    );
    // console.log(pattern);
    // console.log('validation: ');
    // console.log(pattern.test(val));
    if (!pattern.test(val)) {
      event.target.value = val.slice(0, -1);
      return val.slice(0, -1);
      // invalid character, prevent input
    } else {
      return val;
    }
  }

  validateInt(val: any, event: any, num: number): any {
    const pattern = new RegExp('^[(0-9)]{0,' + num + '}$');
    // console.log(pattern);
    // console.log('validation: ');
    // console.log(pattern.test(val));
    if (!pattern.test(val)) {
      event.target.value = val.slice(0, -1);
      return val.slice(0, -1);
      // invalid character, prevent input
    } else {
      return val;
    }
  }
}
