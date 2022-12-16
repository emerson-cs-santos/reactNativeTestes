import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from "styled-components"

import { FormControl, FormInput, ErrorMessage } from './styles';

export type InputHandle = {
  getValue: () => string;
  onFocus: () => void;
};

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  errorMessage?: string | null;
};

export const Input = forwardRef<InputHandle, Props>(({ inputRef, errorMessage, ...rest }, ref) => {
  const [value, setValue] = useState('');
  const textInputRef = useRef<TextInput>(null);

  const { COLORS } = useTheme();

  const invalid = !!errorMessage;

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    onFocus: () => textInputRef.current?.focus(),
  }));

  return (

    <FormControl>

      <FormInput
        ref={inputRef}
        isInvalid={invalid}

        onChangeText={setValue}
        {...rest}
      />

      {invalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormControl>
  );
});


// import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect, useCallback } from 'react';
// import { Text, TextInputProps } from 'react-native';
// import { useField } from "@unform/core"
// import { Ionicons } from "@expo/vector-icons"
// import { useTheme } from "styled-components"
// import { Container, IConContainer, InputText } from './styles';

// interface InputRef {
//     focus(): void;
// }

// interface InputValueReference {
//     value: string;
// }

// interface InputProps extends TextInputProps {
//     name: string;
//     value?: string;
//     iconName?: React.ComponentProps<typeof Ionicons>["name"];
//     contianerStyle?: { [key: string]: string | number }
// }

// const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
//     iconName,
//     name,
//     value,
//     contianerStyle,
//     ...rest

// }, ref) => {

//     const theme = useTheme();
//     const inputElementRef = useRef<any>(null);

//     const [hasError, setHasError] = useState(false);
//     const [isFocused, setIsFocused] = useState(false)
//     const [isFilled, setIsFilled] = useState(false)

//     const {
//         registerField,
//         fieldName,
//         defaultValue = '',
//         error,
//     } = useField(name);
//     const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

//     useEffect(() => {
//         setHasError(!!error)
//     }, [error])

//     const handleFocus = useCallback(() => {
//         setIsFocused(true);
//         setHasError(false);
//     }, []);

//     const handleBlur = useCallback(() => {
//         setIsFocused(false);
//         setIsFilled(!!inputValueRef.current.value);
//     }, []);

//     useImperativeHandle(ref, () => ({
//         focus() {
//             inputElementRef.current.focus();
//         },

//     }));

//     useEffect(() => {
//         registerField<string>({
//             name: fieldName,
//             ref: inputElementRef.current,
//             path: "value",
//             setValue(_, value) {
//                 inputValueRef.current.value = value;
//                 inputElementRef.current.setNativeProps({ text: value });

//             },
//             clearValue() {
//                 inputValueRef.current.value = "";
//                 inputElementRef.current.clear();
//             },
//         })
//     }, [registerField, fieldName])

//     return (
//         <Container style={contianerStyle}>
//             <IConContainer
//                 isFilled={isFilled}
//                 hasError={hasError}
//                 isFocused={isFocused}
//             >
//                 <Ionicons
//                     name={iconName}
//                     size={25}
//                     color={isFocused || hasError || isFilled ? theme.COLORS.BLUE1 : theme.COLORS.GRAY1}
//                 />
//             </IConContainer>

//             <InputText
//                 ref={inputElementRef}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//                 isFilled={isFilled}
//                 hasError={hasError}
//                 isFocused={isFocused}
//                 defaultValue={defaultValue}
//                 placeholderTextColor={theme.COLORS.GRAY1}
//                 onChangeText={(value) => {
//                     inputValueRef.current.value = value
//                 } }
//                 { ... rest }
//             />

//         </Container>
//     );
// }

// export { Input };
