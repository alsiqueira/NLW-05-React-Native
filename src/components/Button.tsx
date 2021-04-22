import React from 'react';
import { TouchableOpacity, 
          Text, 
          TouchableOpacityProps, 
          StyleSheet
        } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface ButtonProps extends TouchableOpacityProps {
  title: string
}
export function Button({ title, ...rest }: ButtonProps){
  return (
    
    <TouchableOpacity 
        style={styles.container}
        activeOpacity={0.70}
        {...rest}
       
      >
        <Text style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    
  );
}
const styles = StyleSheet.create({
        container: {
          backgroundColor: colors.green,
          height: 56,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          // width: 56,
        },

        text:{
          color: colors.white,
          fontSize: 16,
          fontFamily: fonts.heading
        }

})

