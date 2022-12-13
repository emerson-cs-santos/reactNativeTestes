import React from 'react';
import { Text, View } from 'react-native';

// const App: React.FC = () => {
//     return (
//         <View>
//             <Text>Wallet App</Text>
//         </View>
//     )
// }

export default function App() {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <Text>Wallet/Carteira App</Text>
        </View>
    );
  }

export { App };

