import React, { useEffect, useState } from "react";

type ValidatorFunc = (value: string) => string | null;

export function useValidation(
  elementRef: React.MutableRefObject<HTMLInputElement | null>,
  validators: ValidatorFunc[]
) {
  const [touched, setTouched] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    const element = elementRef.current;

    if (elementRef.current) {
      element.addEventListener("blur", onBlur);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onBlur() {
    if (elementRef.current) {
      validate(elementRef.current.value);
    }

    if (!touched) {
      setTouched(true);
    }
  }

  function validate(value: string) {
    let error: string | null = null;

    for (const validator of validators) {
      error = validator(value);
      if (error) {
        break;
      }
    }

    if (!touched) {
      setTouched(true);
    }

    setError(error);
  }

  return {
    touched,
    error,
    validate,
  };
}
