const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;

const digit = /[0-9]{1,}/;

const special = /[*.!|,]{1,}/;

const alpha = /[a-z]{1,}/i;

const defaultErrorText = "error";

export function required(message?: string) {
  return (value: string) => {
    if (!!value) {
      return null;
    }

    return message ?? defaultErrorText;
  };
}

export function minLength(minLength: number, message?: string) {
  return (value: string) => {
    if (value.length >= minLength) {
      return null;
    }

    return message ?? defaultErrorText;
  };
}

export function maxLength(maxLength: number, message?: string) {
  return (value: string) => {
    if (value.length <= maxLength) {
      return null;
    }

    return message ?? defaultErrorText;
  };
}

export function email(message?: string) {
  return (value: string) => {
    if (validEmail.test(value)) {
      return null;
    }

    return message ?? defaultErrorText;
  };
}

export function containsDigit(message?: string) {
  return (value: string) => {
    if (digit.test(value)) {
      return null;
    }

    return message ?? defaultErrorText;
  };
}

export function containsSpecial(message?: string) {
  return (value: string) => {
    if (special.test(value)) {
      return null;
    }

    return message ?? defaultErrorText;
  };
}

export function containsAlpha(message?: string) {
  return (value: string) => {
    if (alpha.test(value)) {
      return null;
    }

    return message ?? defaultErrorText;
  };
}
