import React, { useEffect, useState } from "react";

type ValidatorFunc = (value: string) => string | null;

export function useValidation(
  elementRef: React.MutableRefObject<HTMLInputElement | null>,
  validators: ValidatorFunc[]
) {
  const isTouched = React.useRef(false);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    const element = elementRef.current;

    const onBlur = () => {
      validate(element.value);
      isTouched.current = true;
    };

    const onChange = () => {
      if (isTouched.current) {
        validate(element.value);
      }

      setValue(element.value);
    };

    if (elementRef.current) {
      element.addEventListener("blur", onBlur);
      element.addEventListener("input", onChange);
    }

    return () => {
      element.removeEventListener("blur", onBlur);
      element.removeEventListener("input", onChange);
    };
  }, [elementRef]);

  function validate(value: string) {
    let error: string | null = null;

    for (const validator of validators) {
      error = validator(value);
      if (error) {
        isTouched.current = true;
        break;
      }
    }

    setError(error);
  }

  return {
    value,
    error,
    validate,
  };
}
