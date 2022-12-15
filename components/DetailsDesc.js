import { View, Text } from 'react-native'
import { useState } from 'react'

import { ETHPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({data}) => {

  const [text, settext] = useState(data.description);
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <ETHPrice price={data.price}/>
      </View> 
      <View style={{
        marginVertical: SIZES.extraLarge * 1.5
      }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }}>Description</Text>

        <View style={{
          marginTop: SIZES.base
        }}>
          <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.regular,
          color: COLORS.secondary,
          lineHeight: SIZES.large
        }}>
            {readMore ? text : text.slice(0, 200)}
            <Text style={{
              color: '#445E93',
              fontWeight: 'bold'
            }}
            onPress={() => {
              setReadMore(!readMore);
            }}>
              {readMore ? '...Show less' : '...Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc