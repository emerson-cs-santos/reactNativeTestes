import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

type FormControlProps = {
  isInvalid?: boolean;
};

export const FormControl = styled.View`
  margin-bottom: 10px;
  width: 100%;
  min-height: 56px;
  max-height: 106px;
`;

export const FormInput = styled(TextInput)<FormControlProps>`
  flex: 1;
  min-height: 56px;
  max-height: 106px;

  ${({ theme, isInvalid }) => css`
    color: ${ ( { theme } ) => theme.COLORS.GRAY1 };
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid ${isInvalid ? theme.COLORS.RED : theme.COLORS.GRAY_100};

    font-family: ${ ( { theme } ) => theme.FONTS.POPPINSLIGHT };
    font-size: ${RFValue(12)}px;
  `};

  border-radius: 6px;
  padding: 12px;
  margin-bottom: 4px;
`;

export const ErrorMessage = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-family: ${ ( { theme } ) => theme.FONTS.POPPINSLIGHT };
    font-size: ${RFValue(12)}px;
  `};
`;


// import styled, { css } from "styled-components/native";
// import { TextInput, ViewProps } from "react-native";
// import { RFValue } from "react-native-responsive-fontsize";

// interface IContainerProps extends ViewProps {
//     hasError: boolean;
//     isFocused: boolean;
//     isFilled?: boolean;

// }

// interface ITextContainerProps extends ViewProps {
//     hasError: boolean;
//     isFocused: boolean;
//     isFilled?: boolean;
// }

// export const Container = styled.View`
//     width: 85%;
//     height: ${RFValue(50)}px;
//     flex-direction: row;
//     margin-bottom: ${RFValue(10)}px;
// `;

// export const IConContainer = styled.View<IContainerProps>`
//     width: ${RFValue(55)}px;
//     height: ${RFValue(50)}px;
//     justify-content: center;
//     align-items: center;
//     margin-right: ${RFValue(3)}px;
//     border-top-left-radius: ${RFValue(5)}px;
//     border-bottom-left-radius: ${RFValue(5)}px;
//     background-color: ${ ( { theme } ) => theme.COLORS.GRAY5 };

//     ${ ( { isFocused, isFilled } ) => ( isFocused || isFilled ) && css`
//         border-bottom-width: ${RFValue(2)}px;
//         border-bottom-color: ${ ( { theme } ) => theme.COLORS.BLUE1 };
//     `};

//     ${ ( { hasError } ) => hasError && css`
//         border-bottom-color: ${ ( { theme } ) => theme.COLORS.RED };
//     `};
// `;

// export const InputText = styled(TextInput)<ITextContainerProps>`
//     flex: 1;
//     font-size: ${RFValue(12)}px;
//     border-top-right-radius: ${RFValue(5)}px;
//     border-bottom-right-radius: ${RFValue(5)}px;
//     color: ${ ( { theme } ) => theme.COLORS.GRAY4 };
//     font-family: ${ ( { theme } ) => theme.FONTS.POPPINSLIGHT };
//     background-color: ${ ( { theme } ) => theme.COLORS.GRAY5 };
//     padding: 0 ${RFValue(10)}px;

//     ${ ( { isFocused, isFilled } ) => ( isFocused || isFilled ) && css`
//         border-bottom-width: ${RFValue(2)}px;
//         border-bottom-color: ${ ( { theme } ) => theme.COLORS.BLUE1 };
//     `};

//     ${ ( { hasError } ) => hasError && css`
//         border-bottom-color: ${ ( { theme } ) => theme.COLORS.RED };
//     `};
// `;

